# RightsAI

**Know Your Rights. Instantly.**

RightsAI is a free, AI-powered Irish legal information assistant that provides clear, plain-English answers based exclusively on Irish law and EU regulations applicable to Ireland. Ask questions about your rights, legislation, or legal processes and get structured, well-referenced responses — no legal jargon, no confusion.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | [Next.js 14](https://nextjs.org/) (Pages Router) |
| **Language** | TypeScript |
| **AI SDK** | [`@google/genai`](https://www.npmjs.com/package/@google/genai) |
| **AI Model** | `gemini-3.1-flash-lite` |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) CSS-first config |
| **Animations** | [Framer Motion](https://www.framer.com/motion/) |
| **Icons** | Inline SVG |
| **Fonts** | Merriweather (headings) + Inter (body) + JetBrains Mono (code) |
| **Hosting** | [Vercel](https://vercel.com/) |

## Design Tokens

| Token | Hex | Usage |
|---|---|---|
| Navy | `#0f2240` | Headers, user chat bubbles, footer |
| Navy Dark | `#091829` | Darker navy variant |
| Navy Light | `#1a3a5c` | Secondary text |
| Gold | `#c9973a` | CTAs, links, accents |
| Gold Light | `#e8bc6a` | Hover states |
| Gold Muted | `#f5e6c8` | Badge backgrounds |
| Cream | `#f8f6f1` | Page background |
| Cream Dark | `#ede9e0` | Section offsets, card borders |

## Getting Started

```bash
git clone https://github.com/AndrianBarbulat/RightsAI.git
cd RightsAI
npm install
```

Create `.env.local` with your Gemini API key:

```
GEMINI_API_KEY=your_key_here
```

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Pages

### `/` — Landing Page
Hero, trust bar, feature cards, how it works, topic grid (clickable → /chat?q=), disclaimer, resources, footer. Floating chat widget (gold FAB bottom-right).

### `/chat` — Chat Page
Full-height chat with structured responses. Query param `?q=` auto-sends first message. Question suggestion chips when empty. Character counter (max 1000). Enter to send, Shift+Enter for new line. Dark mode toggle.

### `/api/chat` — POST endpoint
Accepts `{ history }`, returns structured JSON with topic, summary, legislation[], keyPoints[], nextSteps[], resources[], disclaimer. Model: gemini-3.1-flash-lite, temperature 0.3, max 2048 tokens.

## Components

| Component | Description |
|---|---|
| `ChatMessage` | Detects structured JSON vs plain text. Renders `StructuredResponse` or standard bubble |
| `StructuredResponse` | Card with topic badge, summary, legislation links, key points (checkmarks), next steps (numbered), resources, disclaimer, copy button, feedback buttons |
| `ChatWidget` | Floating FAB + slide-up panel with full chat experience |
| `TypingIndicator` | Three animated gold dots with "RightsAI is researching" label |
| `DisclaimerBanner` | Reusable disclaimer (`landing` and `chat` variants) |
| `QuestionChips` | 6 clickable suggestion pills |
| `DarkModeToggle` | Sun/moon toggle, persists to localStorage, sets `data-theme` |
| `FeedbackButtons` | Thumbs up/down toggle with visual state |
| `CopyButton` | Clipboard copy with "Copied!" feedback (2s timeout) |

## Custom Hooks

| Hook | Returns | Description |
|---|---|---|
| `useChat` | `{ messages, isLoading, error, sendMessage, clearChat }` | Full chat state + API integration |
| `useDarkMode` | `{ isDark, toggleDarkMode }` | Theme persistence + `data-theme` management |
| `useCopyToClipboard` | `{ copied, copy }` | Clipboard API with auto-reset |

## Types

All TypeScript interfaces in `types/chat.ts`: `Message`, `ConversationHistory`, `ChatState`, `LegislationItem`, `ResourceItem`, `ChatAPIResponse`.

## Disclaimer

RightsAI provides **general legal information only** and does **not** constitute legal advice. Always consult a qualified solicitor for matters specific to your situation.

## License

MIT