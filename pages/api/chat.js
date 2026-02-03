import { GoogleGenAI } from '@google/genai';

const SYSTEM_PROMPT = `You are LawBot Ireland, a legal information assistant specialising exclusively in Irish law. You help users understand Irish legislation, their rights, and general legal processes in Ireland.

You must:
- Only answer questions related to Irish law and legal processes in the Republic of Ireland
- Reference specific Irish Acts and statutory instruments where relevant
- Clearly distinguish between general legal information and legal advice
- Always remind users to consult a qualified solicitor for their specific situation
- Be clear, plain-English, and avoid unnecessary legal jargon
- If not confident, say so and suggest citizensinformation.ie or flac.ie

You must not:
- Provide specific legal advice
- Make up legislation or case references
- Guarantee any legal outcome`;

export default async function handler(req, res) {
  // === Only allow POST ===
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  // === Validate API key ===
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error('GEMINI_API_KEY is not set in environment variables.');
    return res.status(500).json({ error: 'Server configuration error: API key not set.' });
  }

  // === Parse request body ===
  let history;
  try {
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
    history = body.history || [];
  } catch {
    return res.status(400).json({ error: 'Invalid JSON body.' });
  }

  if (!Array.isArray(history)) {
    return res.status(400).json({ error: 'history must be an array of messages.' });
  }

  try {
    const ai = new GoogleGenAI({ apiKey });

    // Build the contents array for the chat
    let contents;
    if (history.length === 0) {
      contents = 'Hello';
    } else {
      // Convert history to Gemini format
      contents = history.map((msg) => ({
        role: msg.role,
        parts: msg.parts,
      }));
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.1-flash-lite',
      contents,
      config: {
        systemInstruction: SYSTEM_PROMPT,
        temperature: 0.3,
        topP: 0.9,
        topK: 40,
        maxOutputTokens: 2048,
      },
    });

    const text = response.text;

    if (!text || text.trim().length === 0) {
      return res.status(500).json({ error: 'Received empty response from AI model.' });
    }

    return res.status(200).json({ text });
  } catch (error) {
    console.error('Gemini API error:', error);

    // Handle specific API errors gracefully
    const message =
      error.message || 'An unexpected error occurred while processing your request.';
    const status = error.status || error.code || 500;

    // Check for rate limit / quota exceeded
    if (status === 429 || message.includes('quota') || message.includes('429')) {
      return res.status(429).json({
        error: 'The service is receiving high demand right now. Please wait a moment and try again.',
      });
    }

    // Check for safety/filter blocks
    if (message.includes('SAFETY') || message.includes('blocked')) {
      return res.status(400).json({
        error: 'Your query was flagged by content safety filters. Please rephrase your question.',
      });
    }

    // Check for model not found
    if (status === 404 || message.includes('not found')) {
      return res.status(500).json({
        error: 'The AI model is temporarily unavailable. Please try again later.',
      });
    }

    return res.status(500).json({
      error: 'Sorry, I encountered an error while processing your question. Please try again later.',
    });
  }
}