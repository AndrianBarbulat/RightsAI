import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are RightsAI, an Irish legal information assistant. You provide information about Irish law and EU law as it applies in Ireland ONLY.

RULES:
1. ONLY answer questions about Irish law (Republic of Ireland) and EU law as it applies in Ireland.
2. If asked about any other jurisdiction (UK, Northern Ireland, US, etc.), politely decline and state you only cover Irish law.
3. You provide GENERAL LEGAL INFORMATION only — NOT legal advice. Always include a disclaimer.
4. Structure every response as JSON with these fields:
   - topic: a short topic label (e.g., "Employment Law", "Residential Tenancies")
   - summary: a plain-English summary of the answer (2-4 paragraphs)
   - legislation: an array of relevant Irish statutes or EU regulations cited
   - keyRights: an array of key rights the person has in this area
   - nextSteps: an array of practical steps the person can take
   - resources: an array of official resource links (e.g., citizensinformation.ie, rtb.ie, wrc.ie)
   - disclaimer: the standard disclaimer that this is not legal advice

5. Always cite specific Irish legislation where possible.
6. Use plain, accessible English. Avoid unnecessary legal jargon.
7. If you're unsure about something, say so rather than guessing.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { history } = req.body;

  if (!history || !Array.isArray(history)) {
    return res.status(400).json({ error: 'Missing or invalid history array' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key not configured. Set GEMINI_API_KEY in your environment.' });
  }

  try {
    const genAI = new GoogleGenAI({ apiKey });

    // Convert history to Gemini format — no system prompt in contents
    const contents = history
      .filter(m => m.role === 'user' || m.role === 'model')
      .map(m => ({
        role: m.role,
        parts: m.parts || [{ text: typeof m.content === 'string' ? m.content : '' }],
      }));

    const response = await genAI.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 2048,
        responseMimeType: 'application/json',
      },
      contents,
    });

    const text = response.text;

    if (!text) {
      return res.status(500).json({ error: 'Empty response from Gemini API' });
    }

    // responseMimeType enforces JSON output — parse directly
    let structured;
    try {
      structured = JSON.parse(text);
    } catch {
      // Fallback: try to find JSON block in response
      const jsonMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/) || text.match(/(\{[\s\S]*\})/);
      const jsonStr = jsonMatch ? jsonMatch[1] || jsonMatch[0] : text;
      structured = JSON.parse(jsonStr);
    }

    return res.status(200).json(structured);
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to get response from AI',
      topic: 'Error',
      summary: 'Sorry, something went wrong while processing your question. Please try again.',
      legislation: [],
      keyRights: [],
      nextSteps: ['Try asking your question again in a moment.'],
      resources: [],
      disclaimer: 'This is general legal information, not legal advice.',
    });
  }
}