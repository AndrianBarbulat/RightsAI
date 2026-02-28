## Brand Identity

| Element | Value |
|---|---|
| **Product name** | RightsAI |
| **Domain** | rightsai.ie |
| **Tagline** | "Know Your Rights. Instantly." |
| **Sub-tagline** | "Plain English answers based on Irish law and EU regulations. Free. No legal jargon." |
| **Logo mark** | "Rights" in Merriweather bold + "AI" in gold -- no icon required |
| **Voice** | Authoritative but accessible. Serious but not intimidating. Always plain English. |

## Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 14 (Pages Router) |
| **AI SDK** | `@google/genai` |
| **AI Model** | `gemini-2.0-flash-lite` |
| **Hosting** | Vercel |
| **Styling** | Pure CSS, CSS custom properties |
| **Fonts** | Merriweather (headings) + Inter (body) + JetBrains Mono (code) |

---

## Design System

### Typography

| Token | Font | Size / Line | Weight | Usage |
|---|---|---|---|---|
| `--text-display` | Merriweather | 36px / 40px | 700 | Hero headlines only |
| `--text-h1` | Merriweather | 28px / 34px | 700 | Page titles |
| `--text-h2` | Merriweather | 22px / 28px | 600 | Section titles |
| `--text-h3` | Inter | 18px / 24px | 600 | Card titles, response section headers |
| `--text-h4` | Inter | 15px / 22px | 500 | Sub-labels, sidebar items |
| `--text-body` | Inter | 15px / 24px | 400 | All body copy |
| `--text-small` | Inter | 13px / 20px | 400 | Metadata, timestamps, captions |
| `--text-micro` | Inter | 11px / 16px | 500 | Badges, pills, tags |

**Font Stacks:**

- **Display / Headings:** `'Merriweather', Georgia, serif`
- **Body:** `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`
- **Code / Legislation:** `'JetBrains Mono', 'Cascadia Code', 'Consolas', monospace`

---

### Colour System

#### Core Brand

| Token | Hex | Usage |
|---|---|---|
| `--color-navy` | `#0f2240` | Headers, user chat bubbles, footer, hero background |
| `--color-navy-dark` | `#091829` | Darker navy variant |
| `--color-navy-light` | `#1a3a5c` | Lighter navy variant |
| `--color-gold` | `#c9973a` | CTAs, links, accents, logo highlight |
| `--color-gold-light` | `#e8bc6a` | Hover states, light accents |
| `--color-gold-muted` | `#f5e6c8` | Badge backgrounds, subtle gold tones |
| `--color-cream` | `#f8f6f1` | Page background |
| `--color-cream-dark` | `#ede9e0` | Section offsets, card borders |

#### Semantic Colours

| Token | Hex | Usage |
|---|---|---|
| `--color-success` | `#1a7a4a` | Success indicators, checkmarks |
| `--color-success-bg` | `#e8f5ee` | Success background |
| `--color-warning` | `#9a6200` | Warning / disclaimer badges |
| `--color-warning-bg` | `#fef3cd` | Warning background |
| `--color-error` | `#c0392b` | Error messages |
| `--color-error-bg` | `#fdecea` | Error background |
| `--color-info` | `#1a5276` | Info indicators |
| `--color-info-bg` | `#eaf2fb` | Info background |

#### Surfaces

| Token | Hex | Usage |
|---|---|---|
| `--color-surface-1` | `#ffffff` | Cards, modals, chat bubbles |
| `--color-surface-2` | `#f8f6f1` | Sidebar, section backgrounds |
| `--color-surface-3` | `#ede9e0` | Nested containers, hover states |

#### Text

| Token | Hex | Usage |
|---|---|---|
| `--color-text-primary` | `#1a1a2e` | Body text, headings |
| `--color-text-secondary` | `#5a6475` | Secondary labels, captions |
| `--color-text-muted` | `#8a94a0` | Placeholders, disabled text |
| `--color-text-inverse` | `#ffffff` | Text on navy/gold backgrounds |

---

### Dark Mode

Activated via `[data-theme="dark"]` on `<html>`. Persisted to `rightsai_theme` in localStorage. Respects `prefers-color-scheme` as the default.

| Token | Light Value | Dark Value |
|---|---|---|
| `--color-cream` | `#f8f6f1` | `#12131a` |
| `--color-cream-dark` | `#ede9e0` | `#0d0e14` |
| `--color-surface-1` | `#ffffff` | `#1a1d27` |
| `--color-surface-2` | `#f8f6f1` | `#21263a` |
| `--color-surface-3` | `#ede9e0` | `#2a3048` |
| `--color-navy` | `#0f2240` | `#2a3a5c` |
| `--color-navy-dark` | `#091829` | `#1a2a4a` |
| `--color-navy-light` | `#1a3a5c` | `#3a4a6c` |
| `--color-text-primary` | `#1a1a2e` | `#e8eaf0` |
| `--color-text-secondary` | `#5a6475` | `#9aa3b5` |
| `--color-text-muted` | `#8a94a0` | `#6b7280` |
| `--color-text-inverse` | `#ffffff` | `#ffffff` |
| `--color-gold` | `#c9973a` | `#d4a84b` |
| `--color-gold-light` | `#e8bc6a` | `#e8bc6a` |
| `--color-gold-muted` | `#f5e6c8` | `#3d3520` |
| `--color-border` | (not set) | `#2a3048` |
| `--color-success-bg` | `#e8f5ee` | `#143020` |
| `--color-warning-bg` | `#fef3cd` | `#3d2e00` |
| `--color-error-bg` | `#fdecea` | `#3d1515` |
| `--color-info-bg` | `#eaf2fb` | `#102840` |
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` | `0 1px 3px rgba(0,0,0,0.3)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.1)` | `0 4px 12px rgba(0,0,0,0.4)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.12)` | `0 8px 30px rgba(0,0,0,0.5)` |
| `--shadow-xl` | `0 12px 48px rgba(0,0,0,0.18)` | `0 12px 48px rgba(0,0,0,0.6)` |

---

### Spacing Scale

4px base. Use only these values. No arbitrary spacing.

| Token | Value | Token | Value |
|---|---|---|---|
| `--space-1` | 4px | `--space-8` | 32px |
| `--space-2` | 8px | `--space-10` | 40px |
| `--space-3` | 12px | `--space-12` | 48px |
| `--space-4` | 16px | `--space-16` | 64px |
| `--space-5` | 20px | `--space-20` | 80px |
| `--space-6` | 24px | `--space-24` | 96px |

---

### Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | 4px | Small badges, inline pills |
| `--radius-md` | 8px | Buttons, inputs, cards |
| `--radius-lg` | 12px | Larger cards, modals |
| `--radius-xl` | 16px | Hero sections, feature cards |
| `--radius-2xl` | 24px | Large containers |
| `--radius-full` | 9999px | Pills, tags, floating buttons |

---

### Shadows

| Token | Value |
|---|---|
| `--shadow-sm` | `0 1px 3px rgba(0,0,0,0.08)` |
| `--shadow-md` | `0 4px 12px rgba(0,0,0,0.1)` |
| `--shadow-lg` | `0 8px 30px rgba(0,0,0,0.12)` |
| `--shadow-xl` | `0 12px 48px rgba(0,0,0,0.18)` |

---

### Transitions

| Token | Value |
|---|---|
| `--transition-fast` | 150ms ease |
| `--transition-base` | 200ms ease |
| `--transition-slow` | 300ms ease |

---

### Layout

| Token | Value |
|---|---|
| `--sidebar-width` | 260px |
| `--navbar-height` | 64px |

---

## Sitemap

| Route | Type | Description |
|---|---|---|
| `/` | Static | Landing page -- hero, trust bar, topic grid, how it works, example QA, resources, FAQ |
| `/chat` | Static | Dedicated chat -- the primary product |
| `/topics` | Static | Legal topic explorer |
| `/topics/[slug]` | SSG | Individual topic guide (19 topics) |
| `/guides` | Static | Irish legal guides index |
| `/guides/[slug]` | SSG | Step-by-step guides |
| `/glossary` | Static | Irish legal terms A-Z |
| `/about` | Static | About, disclaimer, scope |
| `/api/chat` | Dynamic | `POST` -- Gemini proxy with structured JSON output |
| `/api/feedback` | Dynamic | `POST` -- Thumbs up/down rating |

---

## File Structure

```
rightsai/
├── components/
│   ├── layout/
│   │   ├── Navbar.js              # Sticky nav with logo, links, theme toggle, mobile drawer
│   │   ├── Footer.js              # Three-column footer with resources and disclaimer
│   │   └── Sidebar.js             # Chat history sidebar grouped by time (Today/Yesterday/This Week/Earlier)
│   ├── chat/
│   │   ├── LegalResponse.js       # Main chat page container with all state management
│   │   ├── ChatHeader.js          # Sticky header with logo, topic badge, disclaimer pill, Clear/Export
│   │   ├── MessageList.js         # Scrollable message container with auto-scroll
│   │   ├── UserMessage.js         # Right-aligned navy user bubble with timestamp
│   │   ├── ResponseSection.js     # Reusable section wrapper for structured response sections
│   │   ├── TypingIndicator.js     # Three animated gold dots with "RightsAI is researching..." label
│   │   ├── SuggestedChips.js      # Horizontal scroll of 6 suggested question chips
│   │   ├── QuickActionCards.js    # 2x2 topic card grid in welcome state
│   │   └── ChatInput.js           # Auto-expanding textarea with send button and disclaimer
│   ├── ui/
│   │   ├── Badge.js               # Pill badges (gold-muted, warning, info variants)
│   │   ├── Button.js              # Button component (primary/ghost/outline, sm/lg sizes)
│   │   ├── Accordion.js           # Expandable FAQ accordion (for landing page FAQ and ExampleQA)
│   │   ├── Modal.js               # Overlay modal for confirmations and preferences
│   │   └── ThemeToggle.js         # Sun/moon icon toggle with localStorage persistence
│   └── landing/
│       ├── Hero.js                # Full-width navy hero with headline, subtitle, CTA buttons
│       ├── TrustBar.js            # Cream strip with four trust indicator icons
│       ├── TopicGrid.js           # 19 legal topic cards in responsive grid
│       ├── HowItWorks.js          # Three-step visual: Ask -> Receive -> Act
│       ├── ExampleQA.js           # Four expandable example Q&A accordions
│       ├── ResourcesSection.js    # Three external resource cards (Citizens Information, FLAC, Courts)
│       └── FAQ.js                 # Six FAQ accordion items
├── pages/
│   ├── api/
│   │   ├── chat.js                # POST -- Gemini API proxy with system prompt and structured JSON
│   │   └── feedback.js            # POST -- Thumbs up/down rating endpoint
│   ├── topics/
│   │   └── [slug].js              # Static generation for all 19 topic pages
│   ├── guides/
│   │   └── [slug].js              # Static generation for step-by-step guides
│   ├── _app.js                    # Theme context provider, skip-to-main link, dark mode detection
│   ├── _document.js               # HTML shell with font preloads and meta tags
│   ├── index.js                   # Landing page assembly (all landing components)
│   ├── chat.js                    # Chat page entry point
│   ├── topics.js                  # Topics index page
│   ├── guides.js                  # Guides index page
│   ├── glossary.js                # Glossary page with A-Z grouping
│   └── about.js                   # About page with mission, disclaimer, scope
├── styles/
│   └── globals.css                # All design tokens, reset, utility classes, component styles (2200+ lines)
├── data/
│   ├── topics.js                  # 19 legal topics with Acts, descriptions, and common Q&As
│   └── guides.js                  # 4 guide definitions + 21 glossary terms
├── .env.example                   # GEMINI_API_KEY template
├── .gitignore
├── next.config.js                 # Next.js config with i18n (en-IE) and strict mode
├── package.json                   # Dependencies: next, react, @google/genai
├── vercel.json                    # Vercel serverless function config
├── README.md                      # Project overview, setup, API docs
└── readmeDesign.md                # This file -- complete design system reference
```

---

## Page Designs

### Landing Page (`/`)

#### Navbar
- Sticky, transparent on scroll, solid navy on scroll-past-hero
- Logo: "Rights" (Merriweather, white/navy) + "AI" (gold) -- no separator
- Nav links: Topics, Guides, Glossary, About
- CTA: "Ask a Question" pill button in gold linking to /chat
- Theme toggle: sun/moon icon
- Mobile: hamburger opens full-width slide-down drawer

#### Hero Section
- Full-width navy background (`#0f2240`)
- Headline: "Know Your Rights. Instantly." (Merriweather, white, 36px)
- Sub-headline: "Free AI-powered Irish legal information..." (Inter, 18px)
- Two CTA buttons: "Ask a Question" (primary gold) + "Explore Topics" (outline)

#### TrustBar
- Cream background strip with four items:
  1. Based on Irish Statute Law
  2. References Cited in Every Answer
  3. Information Only -- Not Legal Advice
  4. Always Free

#### TopicGrid
- 19 topic cards in responsive grid
- Each card: icon, title, one-line description

#### HowItWorks
- Three-step visual: Ask -> Receive -> Act

#### ExampleQA
- Four expandable accordion items showing real Q&A previews
- Each tagged with topic and source Act

#### ResourcesSection
- Three cards: citizensinformation.ie, flac.ie, courts.ie

#### FAQ
- Six accordion questions about the product

#### Footer
- Three-column layout:
  - Column 1: RightsAI logo, description, theme toggle
  - Column 2: Topics, Guides, Glossary, About
  - Column 3: Citizens Information, FLAC, RTB, DPC, Courts Service
- Bottom bar: copyright, not legal advice disclaimer

---

### Chat Page (`/chat`)

This is the primary product. It must feel like a professional legal AI interface.

#### Desktop Layout (>= 1024px)
- Sidebar (260px fixed) + Chat area (flex: 1)

Sidebar:
- RightsAI wordmark at top
- "New Chat" button (full width, gold, prominent)
- Conversation history grouped by: Today, Yesterday, This Week, Earlier
- Each item: truncated first message (40 chars) + timestamp + delete on hover
- Bottom: Preferences, About, Theme toggle
- Storage: localStorage key `rightsai_conversations`

Chat area:
- Sticky chat header: RightsAI logo, detected topic badge, disclaimer pill, Clear and Export buttons
- Scrollable message area
- Suggested chips above input (horizontal scroll)
- Sticky input bar at bottom

#### Mobile Layout (< 768px)
- Sidebar hidden behind hamburger icon
- Chat fills full viewport
- Input bar sticky at bottom
- Suggested chips scroll horizontally

#### Welcome State (no messages)
- Greeting: "Good morning / afternoon / evening -- how can I help?"
- Sub-text about Irish/EU law scope
- Quick action cards (2x2 grid): Tenant Rights, Employment Law, Consumer Rights, Garda Interactions
- Suggested question chips (6 items)

#### User Message Bubble
- Right-aligned, navy background (`#0f2240`)
- White text, Inter 15px
- Border radius: 18px 18px 4px 18px
- Timestamp below (small, muted)

#### AI Response Card (structured multi-section)
1. **Topic badge** + detected legal area
2. **Summary** -- 2-3 sentence plain English answer
3. **Relevant Legislation** -- bulleted list of Acts
4. **Your Key Rights** -- checkmark list
5. **Next Steps** -- numbered action list
6. **Official Resources** -- linked list of URLs
7. **Disclaimer** -- "General legal information only, not legal advice"
8. **Action row** -- Copy, Helpful, Not helpful buttons

#### Typing Indicator
- Three gold animated dots
- Label: "RightsAI is researching..." (not generic "typing...")

#### Input Area
- Multi-line textarea, auto-expands, max ~5 lines then internal scroll
- Send button (gold, arrow icon) -- disabled when empty or loading
- Hint: Press Enter to send, Shift+Enter for new line
- Disclaimer below: "RightsAI provides general legal information, not legal advice."

---

### Topics Page (`/topics` and `/topics/[slug]`)

#### Topics Index (`/topics`)
- Page title: "Legal Topics"
- Subtitle: "Explore 19 areas of Irish law..."
- Grid of topic cards linking to `/topics/[slug]`

#### Individual Topic (`/topics/[slug]`)
- Topic hero with title, description, relevant Acts
- Five to six pre-answered common questions (static content)
- "Ask your own question" CTA linking to `/chat?topic=slug`
- Key legislation panel
- Official resources for that topic area
- Related topics grid
- Disclaimer

---

### Guides Page (`/guides` and `/guides/[slug]`)

#### Guides Index (`/guides`)
- Page title: "Guides"
- Subtitle: "Step-by-step guides..."
- Grid of guide cards with icon, title, description

#### Individual Guide (`/guides/[slug]`)
- Step-by-step layout with guide content
- Key legislation references
- Official resource links

---

### Glossary Page (`/glossary`)
- A-Z alphabetical index
- 21 Irish legal terms with plain-English definitions
- Grouped by letter with letter headers

---

### About Page (`/about`)
- Mission statement
- How It Works detailed section
- Disclaimer and legal information policy
- Scope (Republic of Ireland only, 19 areas of law)

---

## State Management

### React Contexts
- **ThemeContext** -- current theme (light/dark/system), resolved theme
- No other global contexts needed -- chat state is local to the chat page

### localStorage Keys
All prefixed `rightsai_`:
- `rightsai_theme` -- stored theme preference
- `rightsai_conversations` -- max 50 conversations, each with message history
- `rightsai_preferences` -- user settings object (future)
- `rightsai_bookmarks` -- saved responses (future)

---

## AI Integration

### System Prompt
```
You are RightsAI, an Irish legal information assistant.
- ONLY answer questions about Irish law and EU law as it applies in Ireland.
- Provide GENERAL LEGAL INFORMATION only -- NOT legal advice.
- Structure responses as JSON with: topic, summary, legislation, keyRights, nextSteps, resources, disclaimer
- Always cite specific Irish legislation where possible.
- Use plain, accessible English.
- If unsure, say so rather than guessing.
```

### API Route (`POST /api/chat`)
- Accepts `{ history: [...] }` with conversation turns
- Calls Gemini with system prompt and conversation history
- Parses structured JSON response
- Falls back gracefully if JSON parsing fails
- Returns structured response with topic, summary, legislation, keyRights, nextSteps, resources, disclaimer

### Model Configuration
| Parameter | Value |
|---|---|
| Model | `gemini-2.0-flash-lite` |
| Temperature | `0.3` |
| Top-P | `0.9` |
| Max Output Tokens | `1500` |

### Error Handling
- 405: Method not allowed (only POST)
- 400: Missing or invalid history array
- 500: API key not configured, Gemini failure, or JSON parse failure
- All errors return structured JSON with user-friendly messages

---

## Accessibility

- WCAG 2.1 AA target
- All interactive elements keyboard-navigable
- Focus rings visible in both light and dark mode
- Chat messages use `aria-live="polite"` for typing indicator
- Error states use `role="alert"`
- All icons have `aria-hidden="true"` with adjacent visible or sr-only labels
- Colour contrast ratio minimum 4.5:1
- `prefers-reduced-motion` respected to disable animations
- Skip-to-main-content link on every page

---

## Performance Targets

- Lighthouse score >= 90 on all four metrics
- First Contentful Paint under 1.5 seconds on 3G
- No layout shift on message insertion
- Fonts: preload Merriweather and Inter subsets, `font-display: swap`
- Zero images -- icon-only design via Unicode characters

---

## Quality Bar

- No placeholder content -- every label and copy line is real
- No TODO comments in delivered code
- No `console.log` in production code
- Mobile-first CSS -- base mobile styles, `min-width` breakpoints for desktop
- Every colour uses CSS custom property tokens, never hardcoded hex
- Every interactive component has an error state
- All Irish Act references must be real and accurate

---

## Irish Legal Resources

| Organisation | URL | Covers |
|---|---|---|
| Irish Statute Book | irishstatutebook.ie | All Irish legislation |
| Citizens Information | citizensinformation.ie | Plain English rights |
| FLAC | flac.ie | Free legal aid |
| Courts Service | courts.ie | Court procedures |
| RTB | rtb.ie | Residential tenancies |
| WRC | workplacerelations.ie | Employment disputes |
| CCPC | ccpc.ie | Consumer rights |
| DPC | dataprotection.ie | GDPR and data protection |
| PIAB | piab.ie | Personal injury |
| Legal Aid Board | legalaidboard.ie | Legal aid eligibility |
| Law Society | lawsociety.ie | Find a solicitor |
| Bar of Ireland | lawlibrary.ie | Find a barrister |

---

## Export to PDF

- Uses `window.print()` with dedicated print stylesheet -- no external library
- Print stylesheet hides: sidebar, input area, action buttons, chips
- Adds RightsAI header and full disclaimer footer to print output

---

## Out of Scope

- User authentication or accounts
- Payment or premium tiers
- Real-time court case lookup
- Actual legal advice (information only)
- Northern Ireland or UK law
- Document generation or contract creation

---

## 19 Legal Topics Covered

1. Residential Tenancies
2. Employment Law
3. Consumer Rights
4. Family Law
5. Road Traffic Law
6. Criminal Law
7. Constitutional Law
8. Immigration
9. Small Claims
10. Data Protection and GDPR
11. Property Law
12. Wills and Probate
13. Personal Injury
14. Debt and Insolvency
15. Social Welfare
16. Education Law
17. Planning and Development
18. Equality and Human Rights
19. Business and Company Law