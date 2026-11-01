# AFTER HOURS V7 — QA Report

## Passed checks

- `node --check games-v7.js` — PASS.
- `node --check sw.js` — PASS.
- `node --check app.js` and `feedback.js` — PASS.
- `node smoke-test-v7.mjs` — PASS: all 26 game views render under a DOM test shim; prompt draw, XP guard, duplicate-completion guard, private matching reveal, Solo Story progression and image shuffle next action work.
- Malformed localStorage deck state is sanitized and remains playable — PASS.
- All 32 distinct image references used by the new Chut/Land/Couples decks exist in the current repository root.
- Static reference scan across hub, game JS, Innerwear House, app/data and service worker — 84 unique WebP references, 0 missing files.
- HTTP checks against local server — 84/84 existing WebP files returned HTTP 200 with valid RIFF/WEBP signatures; all eight required route/style/script/manifest checks returned HTTP 200.
- Service worker cache list — 84/84 current root WebP assets included; no unknown assets.
- Frontend-only check — no fetch, XHR, WebSocket, camera or external AI code in the new game engine.
- ZIP integrity and duplicate-image check — performed when building the release archive.

## Not claimed as tested

- Chromium's headless process hung in this container, so a full visual browser run was not completed. Physical Android Chrome testing is still required after upload.
- Live GitHub Pages deployment has not been performed from this package build. GitHub write integration returned HTTP 403, so repository files have not been changed here.

## Known boundaries

- No backend, online multiplayer, external AI, remote voting, login or payment.
- The age gate is self-attestation only; it does not protect a public URL.
- Chut/Land modes shuffle lingerie campaign imagery, portraits and covered art previews; explicit genital or unblurred nude imagery is not included.
- Solo Girl / Mira are fictional, scripted adult characters, not live AI chat.
- Game progress and favourites are stored in localStorage on the current device; localStorage is not encrypted.
