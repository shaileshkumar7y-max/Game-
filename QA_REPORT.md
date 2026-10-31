# After Hours V2 — QA report

## Included features

- 4 Solo experiences: Self-Discovery, Mood & Boundaries, Private Prompt Journal, and a scripted fictional chat with Mira (24).
- 8 Couples experiences: Yes/No/Maybe, Roulette, Truth or Dare, Desire Dialogue, compatibility quiz, Would You Rather, Hot Seat, and Connection Bingo.
- 18+ self-declaration gate, consent-first copy, skip controls, local progress, note storage, data export and clear-data action.
- Standalone PWA metadata and a same-origin service worker cache.

## Frontend architecture

- Plain HTML, CSS and JavaScript; no build dependencies for the add-on itself.
- No Supabase, database, login, server, AI API, third-party analytics or external asset requests.
- The couples games are pass-the-phone on one device; cross-device synchronization is not included.

## Checks run

- `node scripts/smoke-test.mjs` — PASS. Compiles the inline JavaScript and checks required feature labels and storage hooks.
- Manifest JSON parse — PASS.
- ZIP integrity/listing — PASS.

## Not yet verified

- Real Android/iOS browser interaction, service-worker caching and PWA installation have not been tested on physical devices.
- The existing repository's full `npm test`, `npm run build` and GitHub Pages deployment have not been run with this add-on.
- I could not push this add-on to GitHub: the connected GitHub integration rejected branch creation with HTTP 403. The existing repository has not been modified. Use the included Hinglish install notes and optional App link patch.

## Content boundary

Solo mode is a non-graphic self-discovery and reflection experience; Couples mode focuses on communication, affection, consent and shared choices. This package does not contain explicit masturbation instructions or graphic sexual scenes. The age screen is self-declared and is not verified age assurance.
