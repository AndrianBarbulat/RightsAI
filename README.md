# LawBot Ireland

**Irish Legal Questions, Answered Instantly.**

LawBot Ireland is a free, AI-powered legal information assistant that provides clear, plain-English answers based exclusively on Irish law. Ask questions about your rights, legislation, or legal processes in the Republic of Ireland and get structured, well-referenced responses — no legal jargon, no confusion.

---

## Table of Contents

- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Deploy to Vercel](#deploy-to-vercel)
- [Project Structure](#project-structure)
- [Components](#components)
- [Custom Hooks](#custom-hooks)
- [Types](#types)
- [API Route](#api-route)
- [Pages](#pages)
- [Design Tokens](#design-tokens)
- [Important Disclaimer](#important-disclaimer)
- [License](#license)

---

## Features

### Landing Page (`/`)
- **Hero Section** — "Irish Legal Questions, Answered Instantly" with gold CTA linking to `/chat`
- **Trust Bar** — Four trust indicators: Based on Irish Statute Law, References Cited, Information Only, Always Free
- **Feature Cards** — Three cards: "Irish Law Only", "Plain English Answers", "Always Free" with SVG icons
- **How It Works** — Three numbered steps: Ask Your Question → Get an Instant Answer → Consult a Solicitor If Needed
- **Topics Covered** — Eight topics grid: Employment Law, Tenancy Rights, Consumer Rights, Family Law, Criminal Law, GDPR & Data Rights, Immigration, Social Welfare
- **Disclaimer Section** — Styled card explaining the information-only nature of the service
- **Official Resources** — Links to citizensinformation.ie and flac.ie
- **Footer** — Copyright with legal disclaimer

### Chat Page (`/chat`)
- **Full-height chat interface** with navy header and back button
- **Welcome message** — "Hello! I am LawBot Ireland. Ask me anything about Irish law…"
- **Message bubbles** — User messages right-aligned navy, assistant messages left-aligned white
- **Typing indicator** — Three animated gold bouncing dots with "LawBot Ireland is researching" label
- **Enter to send, Shift+Enter for new line**
- **Disclaimer banner** displayed at the top of the chat
- **Clear conversation** button in the header

### Chat Widget (floating on all pages)
- **Gold FAB** — Circular button fixed bottom-right
- **Slide-up panel** — 400px wide, navy header, scrollable messages, textarea input
- **Reuses same chat logic** via `useChat` hook
- **Close button** and clear button in header
- **Disclaimer** shown above the message area

### AI / Backend
- **Irish Law Exclusivity** — System prompt restricts answers to Republic of Ireland law and EU regulations applicable to Ireland
- **Structured JSON output** — Responses include topic, summary, legislation array, keyRights array, nextSteps array, resources array, disclaimer
- **Conversation context** — Full history sent with each request
- **Graceful error handling** — Inline error messages when API fails or is unavailable
- **Model**: `gemini-3.1-flash-lite` at temperature 0.3

---

## How It Works

1. **User asks a question** on the chat page or through the floating chat widget
2. **Message is sent** via `POST /api/chat` with the full conversation history
3. **API route** loads `GEMINI_API_KEY` from server environment and calls Gemini API
4. **Gemini generates** a structured JSON response with summary, legislation, key rights, next steps, resources, and disclaimer
5. **Response is rendered** as a chat message bubble with the summary text
6. **Conversation continues** — each new message preserves all prior messages for context

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (Pages Router) |
| **Language** | TypeScript |
| **AI SDK** | [`@google/genai`](https://www.npmjs.com/package/@google/genai) |
| **AI Model** | `gemini-3.1-flash-lite` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) with CSS-first configuration |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Fonts** | [Merriweather](https://fonts.google.com/specimen/Merriweather) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body) + [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono) (code) |
| **Hosting** | [Vercel](https://vercel.com/) |

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/AndrianBarbulat/RightsAI.git
cd RightsAI
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

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run Next.js linter |

---

## Deploy to Vercel

### 1. Push to GitHub

Push this project to a GitHub repository.

### 2. Import in Vercel

1. Go to [Vercel](https://vercel.com/) and sign in
2. Click **"Add New" → "Project"**
3. Select your GitHub repository
4. Vercel will auto-detect it is a Next.js project

### 3. Set environment variable

In Vercel project settings, go to **"Environment Variables"** and add:

| Name | Value |
|---|---|
| `GEMINI_API_KEY` | Your Gemini API key |

### 4. Deploy

Click **"Deploy"**. Vercel builds and deploys the app. Subsequent pushes to `main` trigger automatic redeploys.

---

## Project Structure

```
rightsai/
├── components/
│   ├── ChatMessage.tsx            # Single message bubble (user/assistant)
│   ├── ChatWidget.tsx             # Floating FAB + slide-up chat panel
│   ├── DisclaimerBanner.tsx       # Reusable disclaimer (landing + chat variants)
│   └── TypingIndicator.tsx        # Three animated gold bouncing dots
├── hooks/
│   └── useChat.ts                 # Chat state management hook
├── types/
│   └── chat.ts                    # TypeScript interfaces (Message, ChatState, etc.)
├── pages/
│   ├── api/
│   │   └── chat.js                # POST /api/chat — Gemini API proxy with system prompt
│   ├── _app.tsx                   # App wrapper (skip-to-main link, global CSS import)
│   ├── _document.tsx              # HTML shell (font preconnect, lang, meta tags)
│   ├── index.tsx                  # Landing page (hero, features, how it works, topics, disclaimer, resources, footer)
│   └── chat.tsx                   # Dedicated full-page chat interface
├── styles/
│   └── globals.css                # Tailwind v4 CSS-first config with @theme, @layer, @utility
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── global.d.ts                    # Module declarations for CSS imports
├── next-env.d.ts                  # Next.js TypeScript reference types
├── tsconfig.json                  # TypeScript configuration
├── tailwind.config.js             # Tailwind content paths (v4 legacy compat)
├── postcss.config.js              # PostCSS with @tailwindcss/postcss plugin
├── next.config.js                 # Next.js config (strict mode, i18n: en-IE)
├── vercel.json                    # Vercel serverless function config
├── .env.example                   # Template: GEMINI_API_KEY=your_key_here
├── .gitignore
├── package.json
└── README.md
```

---

## Components

### `ChatMessage.tsx`

Single message bubble component.

**Props:**

| Prop | Type | Description |
|---|---|---|
| `message` | `Message` | Message object with `role`, `content`, `timestamp` |

**Behavior:**
- User messages: right-aligned, navy background (`#0f2240`), white text, bubble radius
- Assistant messages: left-aligned, white background, cream-dark border, navy text
- Timestamp shown in muted text below the message
- ARIA labels for accessibility

### `ChatWidget.tsx`

Floating chat bubble and slide-up panel.

**State:**
- `isOpen` — boolean controlling panel visibility
- `input` — current textarea value
- Uses `useChat` hook for messages, loading, error, sendMessage, clearChat

**Behavior:**
- Gold circular FAB button fixed bottom-right when closed
- Full overlay panel (400px desktop, full-width mobile) when open
- Navy header with LawBot Ireland branding, clear button, close button
- Welcome message shown on empty state
- Enter to send, Shift+Enter for new line
- Auto-scroll to latest message
- Auto-focus input on open
- Disclaimer banner displayed above messages

### `DisclaimerBanner.tsx`

Reusable disclaimer component.

**Props:**

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `'landing' \| 'chat'` | `'landing'` | Controls styling — landing shows a styled box with heading, chat shows a compact pill banner |

**Behavior:**
- Landing variant: cream background, rounded-xl, border, heading + paragraph with links
- Chat variant: gold-muted background, compact, centered text
- Both variants include `role="alert"` for accessibility

### `TypingIndicator.tsx`

Animated loading indicator.

**Behavior:**
- Three gold dots with staggered `animate-bounce` delays (0ms, 150ms, 300ms)
- "LawBot Ireland is researching" label
- `aria-live="polite"` for screen readers

---

## Custom Hooks

### `useChat.ts`

Manages all chat state and API communication.

**Returns:**

| Value | Type | Description |
|---|---|---|
| `messages` | `Message[]` | Ordered array of all conversation messages |
| `isLoading` | `boolean` | Whether a request is currently in flight |
| `error` | `string \| null` | Error message if the last request failed |
| `sendMessage` | `(text: string) => Promise<void>` | Sends a message to the API and appends the response |
| `clearChat` | `() => void` | Resets messages, error, and loading state |

**Behavior:**
- Appends user message immediately (optimistic update)
- Sends full conversation history to `/api/chat`
- Parses structured JSON response
- On error, appends an error message bubble and sets the error state
- Sets loading to false in finally block

---

## Types

### `Message`
```typescript
interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp?: string;
}
```

### `ConversationHistory`
```typescript
interface ConversationHistory {
  role: string;
  parts: { text: string }[];
}
```

### `ChatState`
```typescript
interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error: string | null;
}
```

### `ChatAPIResponse`
```typescript
interface ChatAPIResponse {
  topic?: string;
  summary?: string;
  legislation?: string[];
  keyRights?: string[];
  nextSteps?: string[];
  resources?: string[];
  disclaimer?: string;
  error?: string;
}
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
| `history` | Array | Ordered list of conversation turns with `role` and `parts` |

### Response

**Success (200):**

```json
{
  "topic": "Residential Tenancies",
  "summary": "Under the Residential Tenancies Act 2004, as amended…",
  "legislation": ["Residential Tenancies Act 2004", "Planning and Development (Housing) and Residential Tenancies Act 2016"],
  "keyRights": ["Right to a rent book", "Right to 90 days notice for tenancies over 6 months"],
  "nextSteps": ["Contact the RTB for dispute resolution", "Review your tenancy agreement"],
  "resources": ["https://www.rtb.ie", "https://www.citizensinformation.ie/en/housing/renting_a_home/"],
  "disclaimer": "This is general legal information, not legal advice."
}
```

**Error (500):**

```json
{
  "error": "Failed to get response from AI",
  "topic": "Error",
  "summary": "Sorry, something went wrong while processing your question. Please try again.",
  "legislation": [],
  "keyRights": [],
  "nextSteps": ["Try asking your question again in a moment."],
  "resources": [],
  "disclaimer": "This is general legal information, not legal advice."
}
```

### Status Codes

| Code | Meaning |
|---|---|
| `200` | Success — structured JSON response returned |
| `400` | Bad request — missing or invalid history array |
| `405` | Method not allowed — only POST accepted |
| `500` | Server error — API key missing, Gemini failure, or JSON parse failure |

### System Prompt

The API uses a system instruction that:
- Restricts answers to Irish law and EU law applicable in Ireland only
- Returns structured JSON with topic, summary, legislation, keyRights, nextSteps, resources, disclaimer
- Cites specific Irish legislation where possible
- Uses plain, accessible English
- States uncertainty rather than guessing
- Always includes a disclaimer

### Model Configuration

| Parameter | Value |
|---|---|
| Model | `gemini-3.1-flash-lite` |
| Temperature | `0.3` |
| Top-P | `0.9` |
| Top-K | `40` |
| Max Output Tokens | `2048` |
| Response MIME Type | `application/json` |

---

## Pages

### `/` — Landing Page

**Sections (top to bottom):**
1. Sticky navy navbar with "LawBot Ireland" branding and "Start Chatting" CTA
2. Navy hero with headline, subtitle, and "Ask a Question" gold button
3. Trust bar (cream-dark) with four checkmark items
4. "Why LawBot Ireland?" — three feature cards in responsive grid
5. "How It Works" — three numbered step circles
6. "Topics Covered" — eight topic cards in grid
7. Disclaimer section with styled card and resource links
8. Official resources — Citizens Information and FLAC cards
9. Navy footer with copyright and disclaimer

**Data:** All content is static — no API calls, no server-side rendering needed.

### `/chat` — Full Chat Page

**Layout:**
1. Sticky navy header with back arrow, "LawBot Ireland", and Clear button
2. Compact disclaimer banner
3. Scrollable message area (max-w-3xl centered)
4. Welcome message shown when no messages exist
5. Typing indicator while loading
6. Sticky input area with textarea and send button
7. "Press Enter to send, Shift+Enter for new line" hint

**State:** Managed via `useChat` hook — no external state management library.

---

## Design Tokens

### Colours

| Token | Hex | Usage |
|---|---|---|
| `navy` | `#0f2240` | Headers, user chat bubbles, footer |
| `navy-dark` | `#091829` | Darker navy variant |
| `navy-light` | `#1a3a5c` | Secondary text on light backgrounds |
| `gold` | `#c9973a` | CTAs, links, FAB button, accents |
| `gold-light` | `#e8bc6a` | Hover states |
| `gold-muted` | `#f5e6c8` | Disclaimer banner backgrounds |
| `cream` | `#f8f6f1` | Page background |
| `cream-dark` | `#ede9e0` | Section offsets, card borders |

### Typography

| Token | Font | Usage |
|---|---|---|
| `font-heading` | Merriweather, Georgia, serif | Headlines, page titles, section headers |
| `font-body` | Inter, system-ui, sans-serif | Body copy, chat messages, form elements |
| `font-code` | JetBrains Mono, Consolas, monospace | Code blocks, legislation references |

### Accessibility
- Skip-to-main-content link on every page
- All interactive elements keyboard-navigable
- ARIA labels on buttons, inputs, and chat messages
- `aria-live="polite"` on typing indicator
- `role="alert"` on disclaimer banners
- `prefers-reduced-motion` respected to disable animations
- Colour contrast meets WCAG 2.1 AA standards

---

## Important Disclaimer

LawBot Ireland provides **general legal information only** and does **not** constitute legal advice. Users should always consult a qualified solicitor for matters specific to their situation. The information provided may not reflect the most current legal developments and should not be relied upon for making legal decisions.

---

## License

MIT