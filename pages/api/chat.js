import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are RightsAI, an Irish legal information assistant. You provide information about Irish law and EU law as it applies in Ireland ONLY.

RULES:
1. ONLY answer questions about Irish law (Republic of Ireland) and EU law as it applies in Ireland.
2. If asked about any other jurisdiction (UK, Northern Ireland, US, etc.), politely decline and state you only cover Irish law.
3. You provide GENERAL LEGAL INFORMATION only — NOT legal advice. Always include a disclaimer.
4. Structure EVERY response as JSON with these exact fields:
   - topic: a short topic label (e.g., "Employment Law", "Residential Tenancies")
   - summary: a plain-English summary of the answer (2-4 paragraphs)
   - legislation: an array of objects, each with "name" (the Act name and year) and "url" (the full URL to irishstatutebook.ie or eur-lex.europa.eu if you know it; if unsure, just provide the name and omit url)
     Example: [{ "name": "Residential Tenancies Act 2004", "url": "https://www.irishstatutebook.ie/eli/2004/act/27" }]
   - keyPoints: an array of key rights or facts the person has in this area
   - nextSteps: an array of practical steps the person can take
   - resources: an array of objects, each with "label" (the resource name) and "url" (the full URL to citizensinformation.ie, rtb.ie, wrc.ie, flac.ie, or other official government resource)
     Example: [{ "label": "Residential Tenancies Board", "url": "https://www.rtb.ie" }]
   - disclaimer: "This is general legal information, not legal advice. Always consult a qualified solicitor for advice specific to your situation."

5. Provide real URLs from irishstatutebook.ie, eur-lex.europa.eu, and citizensinformation.ie whenever you know them. If unsure of the exact URL, provide the act name without a url and let the frontend generate a fallback search link.
6. Always populate topic, summary, and disclaimer fields. Fill legislation, keyPoints, nextSteps, and resources when relevant.
7. Reference specific section numbers where relevant.
8. Use plain, accessible English. Avoid unnecessary legal jargon.
9. If you are unsure about something, say so rather than guessing.`;

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
      return res.status(500).json({
        error: 'Empty response from Gemini API',
        topic: 'Error',
        summary: 'Sorry, something went wrong while processing your question. Please try again.',
        legislation: [],
        keyPoints: [],
        nextSteps: ['Try asking your question again in a moment.'],
        resources: [],
        disclaimer: 'This is general legal information, not legal advice.',
      });
    }

    let structured;
    try {
      structured = JSON.parse(text);
    } catch {
      const jsonMatch = text.match(/```(?:json)?\s*\n?([\s\S]*?)\n?```/) || text.match(/(\{[\s\S]*\})/);
      const jsonStr = jsonMatch ? jsonMatch[1] || jsonMatch[0] : text;
      structured = JSON.parse(jsonStr);
    }

    // Ensure required fields exist
    return res.status(200).json({
      topic: structured.topic || 'General Legal Query',
      summary: structured.summary || 'No summary available.',
      legislation: Array.isArray(structured.legislation) ? structured.legislation : [],
      keyPoints: Array.isArray(structured.keyPoints) ? structured.keyPoints : [],
      nextSteps: Array.isArray(structured.nextSteps) ? structured.nextSteps : [],
      resources: Array.isArray(structured.resources) ? structured.resources : [],
      disclaimer: structured.disclaimer || 'This is general legal information, not legal advice.',
    });
  } catch (err) {
    console.error('Gemini API error:', err);
    return res.status(500).json({
      error: err.message || 'Failed to get response from AI',
      topic: 'Error',
      summary: 'Sorry, something went wrong while processing your question. Please try again.',
      legislation: [],
      keyPoints: [],
      nextSteps: ['Try asking your question again in a moment.'],
      resources: [],
      disclaimer: 'This is general legal information, not legal advice.',
    });
  }
}