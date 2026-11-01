# V6 QA Report

## Root causes found

1. **Wrong image base path.** The deployed Game repo stores WebP files at the repository root, but V5 used `./assets/<file>` while running from the root. Those requests returned 404.
2. **Service worker mirrored the same wrong paths.** Its `cache.addAll()` attempted to cache non-existent `./assets/...` files, so installation could fail. Its fetch fallback also returned `index.html` for failed image requests, which is not a valid image response.
3. **Route mismatch.** The root had been replaced by the Innerwear House page, so the previous 21-game Solo/Couples hub was no longer the main entry. V6 restores that hub and moves the full catalogue to `/innerwear-house/`.
4. **Small interaction/data issues.** One-size concepts were placed in the demo bag as `M`; malformed old localStorage values could break list rendering; repeated wheel taps could create overlapping result timers.

## Repairs

- Root game artwork now loads from `./<filename>.webp`.
- Innerwear House uses `../<filename>.webp` to load the same existing root image files.
- A shared root-scoped V6 service worker caches correct root asset URLs, tolerates optional image-cache misses and only returns the app shell for navigation requests.
- Return-to-games links now resolve to the actual root game hub.
- Invalid privacy-lab route link removed.
- Local state sanitization, one-size bag default and wheel re-entry guard added.

## Checks passed

- `node game-smoke-test.mjs` — PASS; root game script syntax and 21-game inventory.
- `node innerwear-house/smoke-test.mjs` — PASS; 26 products, four wheels, 10 campaigns, 12 collaboration ideas, 54 campaign/product/art image names + 18 covered figure previews.
- `node --check sw.js`, `node --check innerwear-house/app.js`, `node --check innerwear-house/feedback.js` — PASS.
- All 84 root-level WebP files — valid RIFF/WEBP headers and non-empty.
- Local HTTP HEAD checks — 84/84 images returned HTTP 200; 11 page/asset routes returned HTTP 200.
- ZIP integrity check — PASS.
- ZIP contents — 0 `.webp` files; no existing image duplicates bundled.

## Not claimed

Physical Android Chrome testing and final GitHub Pages deployment were not performed. The container's headless Chromium process did not start reliably, so browser visual/interactions remain for post-upload device verification.
