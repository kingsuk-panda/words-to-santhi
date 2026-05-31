# Words to Santhi

A collection of letters written across time.

A lifetime digital archive of letters, messages, memories, encouragement, and future notes from a brother to his sister.

## Project Overview

This website is a digital box of letters — timeless, warm, and personal. It contains:

- **Letters** — Immediately available messages for different emotional moments
- **Time Capsules** — Letters that unlock automatically as time passes
- **Birthday Vault** — A yearly birthday ritual with dynamically updated age
- **Life Milestones** — Letters for important life events (locked until manually unlocked)
- **Secret Easter Egg** — A hidden letter for the curious

## Technical Stack

- **Framework:** Next.js (static export)
- **Language:** TypeScript
- **Styling:** TailwindCSS v4
- **Fonts:** Playfair Display (headings), Inter (body)
- **Hosting:** Cloudflare Pages / GitHub Pages / Netlify (static)

## Deployment

### Cloudflare Pages (Recommended)

```bash
npm run build
npx wrangler pages deploy out --project-name words-to-santhi
```

Or connect your GitHub repository in the Cloudflare Pages dashboard:
- Build command: `npm run build`
- Output directory: `out`

### GitHub Pages

```bash
npm run build
npx gh-pages -d out
```

Or push the `out/` directory to the `gh-pages` branch.

### Netlify

```bash
npm run build
npx netlify deploy --prod --dir=out
```

Or connect your repository in the Netlify dashboard:
- Build command: `npm run build`
- Publish directory: `out`

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Building

```bash
npm run build
```

Static output goes to the `out/` directory.

## How to Edit Letters

All letters are stored in `src/data/letters.ts`.

Each letter has the following fields:

| Field | Type | Description |
|-------|------|-------------|
| `id` | `string` | Unique identifier (used in URL) |
| `title` | `string` | Letter title |
| `description` | `string` | Short description shown on cards |
| `content` | `string` | Letter body text |
| `category` | `string` | `letter`, `time-capsule`, `milestone`, `special`, or `easter-egg` |
| `unlockDate` | `string?` | ISO date for time capsules (e.g., `"2027-05-31"`) |
| `order` | `number` | Display order |

### To add a new letter:

1. Open `src/data/letters.ts`
2. Add a new entry to the `letters` array with the fields above
3. Run `npm run build` to verify
4. Deploy

### To change unlock dates:

Edit the `unlockDate` field of the time capsule letter. Format: `YYYY-MM-DD`.

### To replace the birthday message:

Find `BIRTHDAY_CONTENT` in `src/app/birthday-vault/page.tsx` and edit the template string.

### To change the birth date:

Find `BIRTH_DATE` in `src/app/birthday-vault/page.tsx` and update the `"YYYY-MM-DD"` value.

### To unlock milestone letters:

Change the milestone letter's `category` from `"milestone"` to `"letter"`.

## Project Structure

```
src/
├── data/
│   └── letters.ts          # All letter content and data
├── components/
│   ├── Navigation.tsx       # Navigation bar
│   ├── Envelope.tsx         # Envelope card component
│   ├── LetterReader.tsx     # Letter reading experience
│   ├── ProgressTracker.tsx  # Archive progress display
│   ├── SearchBar.tsx        # Search functionality
│   └── EasterEgg.tsx        # Hidden easter egg button
└── app/
    ├── layout.tsx           # Root layout
    ├── page.tsx             # Homepage
    ├── globals.css          # Global styles
    ├── letters/
    │   ├── page.tsx         # Letters listing
    │   └── [id]/
    │       ├── page.tsx     # Server component for static generation
    │       └── LetterPageClient.tsx  # Client component for letter viewing
    ├── time-capsule/
    │   └── page.tsx         # Time Capsule timeline
    ├── birthday-vault/
    │   └── page.tsx         # Birthday Vault
    ├── milestones/
    │   └── page.tsx         # Life Milestones
    └── about/
        └── page.tsx         # About page
```

## Design

- **Background:** `#0F1117` (dark)
- **Card:** `#171A22`
- **Text:** `#F5F1E8` (warm white)
- **Secondary:** `#B8B3A8` (warm gray)
- **Accent:** `#D6B370` (gold)
- **Success:** `#8DAA91` (sage green)

## Privacy

- No analytics
- No trackers
- No user accounts
- No cookies
- No advertising
- No third-party data collection
- Only local storage for tracking opened letters

## Maintenance Notes

- This is a fully static site. No server, no backend, no database.
- To update content, edit `src/data/letters.ts` and redeploy.
- The site will continue working indefinitely as long as the hosting platform serves static files.
- No dependencies on external APIs or services.
- Birthday letters are generated dynamically based on the birth date in `src/app/birthday-vault/page.tsx`.

## Backup Procedure

The entire site is the `src/data/letters.ts` file and the component files. To back up:

1. Copy the `src/` directory
2. Or clone the git repository
3. Or export the static build from the `out/` directory

## License

Private — All rights reserved. This project is a personal archive and is not intended for public use.
