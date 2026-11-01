# After Hours V5 — HER AFTER DARK / Innerwear House integration

This is an additive package for the existing `shaileshkumar7y-max/Game-` repository. It preserves the current After Hours V4 game page and adds a linked `innerwear-house/` route.

## Integrated repository features
- The original 21 Solo/Couples game experiences remain on the existing home page.
- The new Innerwear House route adds the source repo's 26-product catalogue and concepts.
- Product quick-view, sample size/colour selection, local wishlist and demo bag.
- Four local wheels: Style, Mood, Date and Surprise.
- Date Night Generator, Fit & Wellness guide and private measurement notes.
- 10 campaign concepts and 12 collaboration directions.
- Royal Sanskari, Noor Edit, Grace/heritage previews, Art Atelier and Couples Studio categories.
- Visual library contains all 52 source-repo WebP files, plus uploaded campaign/portrait crops and covered previews for user-supplied figure-study sheets.
- Local-only storage and offline PWA cache for the nested Innerwear House route.

## No backend
There is no account, database, payment, checkout, remote voting, AI API or cloud sync. Wishlist, demo bag, date picks and wheel results stay in browser localStorage. The bag is a demo only.

## Artwork handling
All 52 WebP assets from the latest successful `New-product-` Pages artifact are included. The source `sepia-couples-moodboard.webp` and user-supplied nude figure-study sheets are shown only as covered/blurred gallery previews. The two non-nude user campaign posters and six previous cropped campaign/portrait references are also included. Unblurred figure-study source sheets are not included in the public-facing package.

## Install on Android / GitHub
1. Download and extract this ZIP.
2. Back up the current `Game-` repository before uploading.
3. Upload/replace the included root `index.html`. Keep the existing root `assets/` folder (the V4 six local assets remain needed by the main game page).
4. Upload the complete `innerwear-house/` folder to the repository root. Do not rename its nested `assets/` folder.
5. Commit to `main` and wait for Pages deployment.
6. Open the existing Game- URL. The new `Innerwear House` link appears in the top navigation and the home launch panel.

## Tests
Run `node innerwear-house/smoke-test.mjs` from the repository root or from the folder. This checks product-data counts, code syntax, routes, image files, wheels, campaigns and local-only behaviour.

Physical Android verification and live deployment are not claimed; the GitHub connector rejected branch writes with HTTP 403, so the repository was not modified by this package build.
