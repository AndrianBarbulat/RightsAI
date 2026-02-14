# LawBot Ireland

**Irish Legal Questions, Answered Instantly.**

LawBot Ireland is a free, AI-powered legal information assistant that provides clear, plain-English answers based exclusively on Irish law. Ask questions about your rights, legislation, or legal processes in the Republic of Ireland and get structured, well-referenced responses — no legal jargon, no confusion.

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Getting Started (Local Development)](#getting-started-local-development)
- [Deploy to Vercel](#deploy-to-vercel)
- [Project Structure](#project-structure)
- [API Route](#api-route)
- [Chat Widget Architecture](#chat-widget-architecture)
- [Important Disclaimer](#important-disclaimer)
- [License](#license)

---

## Features

### Landing Page
| Feature | Description |
|---|---|
| **Hero Section** | Headline "Irish Legal Questions, Answered Instantly" with a gold-highlighted call-to-action that opens the chat widget |
| **Feature Cards** | Three cards: "Irish Law Only", "Plain English Answers", "Always Free" |
| **Disclaimer** | Prominent section stating the bot provides general legal information, not legal advice |
| **Recommended Resources** | Links to [citizensinformation.ie](https://www.citizensinformation.ie) and [flac.ie](https://www.flac.ie) |
| **Footer** | Copyright notice and full legal disclaimer |

### Chat Widget
| Feature | Description |
|---|---|
| **Floating Action Button** | Gold circular button fixed to the bottom-right corner. Toggles the chat panel open/closed |
| **Slide-Up Panel** | Animated panel with a navy header ("LawBot Ireland"), close button, message area, and input field |
| **Message Bubbles** | User messages appear right-aligned in navy; bot responses appear left-aligned in cream/white |
| **Typing Indicator** | Animated gold bouncing dots while the AI generates a response |
| **Welcome Message** | On first open: "Hello! I'm LawBot Ireland. Ask me anything about Irish law…" |
| **Markdown Rendering** | Bot responses are formatted with **headings**, **bold** text, *italic* text, bullet lists, numbered lists, horizontal dividers, and clickable hyperlinks |
| **Conversation Context** | Full chat history is sent with each request so the AI maintains context across multiple turns |
| **Enter to Send** | Press Enter to send (Shift+Enter for newline support ready) |
| **Error Handling** | Graceful error messages displayed inline when the API is unavailable or rate-limited |

### AI / Backend
| Feature | Description |
|---|---|
| **Irish Law Exclusivity** | System prompt restricts the model to answer only questions about Irish law and legal processes in the Republic of Ireland |
| **Legislative References** | Responses reference specific Irish Acts and statutory instruments where relevant (e.g., Residential Tenancies Act 2004, Bunreacht na hÉireann) |
| **Source Suggestions** | When uncertain, the bot directs users to citizensinformation.ie or flac.ie instead of guessing |
| **Structured Output** | Responses are organized with clear headings, bullet points, and section dividers for readability |
| **Temperature 0.3** | Low temperature ensures consistent, reliable, and factual answers |
| **Rate Limit Handling** | Returns a friendly message when the free-tier quota is exceeded instead of crashing |

---

## How It Works

1. **User asks a question** in the chat widget or clicks "Ask a Question Now" on the landing page
2. **Chat widget opens** (if not already) and displays a welcome message on first visit
3. **Message is sent** via `POST /api/chat` as JSON, including the full conversation history
4. **API route validates** the request, loads `GEMINI_API_KEY` from the server environment, and calls the Gemini API
5. **Gemini generates a response** using the system prompt, conversation history, and low-temperature settings
6. **Response is returned** as JSON and rendered in the chat widget with Markdown formatting (headings, bold, lists, links)
7. **Conversation continues** — each new message includes all prior messages so the AI maintains context

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (Pages Router) |
| **AI SDK** | [`@google/genai`](https://www.npmjs.com/package/@google/genai) |
| **AI Model** | `gemini-3.1-flash-lite` |
| **Hosting** | [Vercel](https://vercel.com/) |
| **Styling** | Pure CSS with CSS custom properties (no framework) |
| **Fonts** | [Merriweather](https://fonts.google.com/specimen/Merriweather) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body) |

### Design Colours

| Colour | Hex | Usage |
|---|---|---|
| Navy | `#0f2240` | Headers, user chat bubbles, footer |
| Gold | `#c9973a` | CTAs, links, FAB button, accents |
| Cream | `#f8f6f1` | Page background |

---

## Getting Started (Local Development)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/lawbot-ireland.git
cd lawbot-ireland
```

### 2. Install dependencies

```bash
npm install
```

### 3. Get a Gemini API key

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click **"Get API Key"** and create a new API key
4. Copy the key

### 4. Set up environment variables

Create a `.env.local` file in the project root:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

Alternatively, copy the example file:

```bash
cp .env.example .env.local
# Then edit .env.local and replace "your_key_here" with your real API key
```

> **Important:** Never commit `.env.local` to version control. It is already listed in `.gitignore`.

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploy to Vercel

### 1. Push your code to GitHub

Create a repository on GitHub and push this project to it.

### 2. Import the project in Vercel

1. Go to [Vercel](https://vercel.com/) and sign in
2. Click **"Add New" → "Project"**
3. Select your GitHub repository
4. Vercel will auto-detect it's a Next.js project

### 3. Set the environment variable

In the Vercel project settings, go to **"Environment Variables"** and add:

| Name | Value |
|---|---|
| `GEMINI_API_KEY` | Your Gemini API key |

### 4. Deploy

Click **"Deploy"**. Vercel will build and deploy your app. Subsequent pushes to your main branch will trigger automatic redeploys.

---

## Project Structure

```
lawbot-ireland/
├── components/
│   └── ChatWidget.js          # Chat component (FAB, panel, messages, Markdown renderer)
├── pages/
│   ├── api/
│   │   └── chat.js            # POST /api/chat — Gemini API proxy with system prompt
│   ├── _app.js                # Next.js app wrapper (imports global CSS)
│   ├── _document.js           # HTML document shell (fonts, meta tags)
│   └── index.js               # Landing page (hero, features, disclaimer, resources, footer)
├── styles/
│   └── globals.css            # All styles — landing page, chat widget, Markdown formatting
├── .env.example               # Template: GEMINI_API_KEY=your_key_here
├── .env.local                 # Actual API key (gitignored, loaded by Next.js at runtime)
├── .gitignore                 # Excludes .env.local, node_modules, .next, .vercel
├── next.config.js             # Next.js configuration
├── package.json               # Dependencies and scripts
├── README.md                  # This file
└── vercel.json                # Vercel serverless function config (30s timeout)
```

---

## API Route

**Endpoint:** `POST /api/chat`

### Request Body

```json
{
  "history": [
    { "role": "user", "parts": [{ "text": "What are my tenant rights in Ireland?" }] },
    { "role": "model", "parts": [{ "text": "Under the Residential Tenancies Act 2004..." }] },
    { "role": "user", "parts": [{ "text": "What notice period applies?" }] }
  ]
}
```

| Field | Type | Description |
|---|---|---|
| `history` | Array | Ordered list of conversation turns. Each item has a `role` (`"user"` or `"model"`) and `parts` (array of `{ text }` objects) |

### Response

**Success (200):**

```json
{
  "text": "Under the Residential Tenancies Act 2004, as amended, the minimum notice period…"
}
```

**Error (400/405/429/500):**

```json
{
  "error": "The service is receiving high demand right now. Please wait a moment and try again."
}
```

### Status Codes

| Code | Meaning |
|---|---|
| `200` | Success — response text returned |
| `400` | Bad request — invalid JSON, missing fields, or content safety filter triggered |
| `405` | Method not allowed — only POST is accepted |
| `429` | Rate limited — free-tier quota exceeded |
| `500` | Server error — API key not configured, model unavailable, or unexpected failure |

### System Prompt

The API route uses the following system instruction (set via `config.systemInstruction`):

- Only answer questions related to Irish law and legal processes in the Republic of Ireland
- Reference specific Irish Acts and statutory instruments where relevant
- Clearly distinguish between general legal information and legal advice
- Always remind users to consult a qualified solicitor for their specific situation
- Use clear, plain English and avoid unnecessary legal jargon
- If not confident, say so and suggest citizensinformation.ie or flac.ie
- Never provide specific legal advice, make up legislation/case references, or guarantee any legal outcome

### Model Configuration

| Parameter | Value |
|---|---|
| Model | `gemini-3.1-flash-lite` |
| Temperature | `0.3` |
| Top-P | `0.9` |
| Top-K | `40` |
| Max Output Tokens | `2048` |

---

## Chat Widget Architecture

The `ChatWidget` component (`components/ChatWidget.js`) is a self-contained React component with no external dependencies beyond React itself.

### State Management

| State | Type | Purpose |
|---|---|---|
| `isOpen` | Boolean | Whether the chat panel is visible |
| `messages` | Array | Ordered list of `{ role, content }` objects |
| `input` | String | Current text in the input field |
| `isLoading` | Boolean | Whether a request is in flight (shows typing indicator) |

### Markdown Rendering

A built-in `markdownToHtml()` function converts Gemini's Markdown output into styled HTML:

| Markdown | Rendered Output |
|---|---|
| `### Heading` | `<h4>` with navy colour, proper margins |
| `**bold text**` | `<strong>` with navy colour |
| `*italic text*` | `<em>` with italic style |
| `* List item` or `- List item` | `<ul><li>` with disc bullets |
| `[link text](https://…)` | `<a>` with gold colour, opens in new tab |
| `---` or `***` | `<hr>` divider line |
| Double newlines | Paragraph breaks with proper spacing |

The HTML is injected via `dangerouslySetInnerHTML` within a `span.chat-markdown` container. Since Gemini's output contains only Markdown (no raw HTML), this is safe from XSS injection.

### Edge Cases Covered

| Scenario | Behaviour |
|---|---|
| Empty input or loading | Send button disabled |
| API returns non-200 | Error bubble displayed inline with the error message |
| Network failure | Error bubble: "Sorry, something went wrong…" |
| First chat open | Welcome message shown automatically |
| Panel closed/reopened | Message history preserved during session |
| Multiple rapid sends | Input disabled while loading; button disabled |
| Enter key | Sends message (Shift+Enter available for future multiline) |
| Scroll | Auto-scrolls to latest message or typing indicator |

---

## Important Disclaimer

LawBot Ireland provides **general legal information only** and does **not** constitute legal advice. Users should always consult a qualified solicitor for matters specific to their situation. The information provided may not reflect the most current legal developments and should not be relied upon for making legal decisions.

---

## License

MIT