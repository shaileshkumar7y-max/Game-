# V5 QA Report

## Automated checks passed
- `node --check innerwear-house/app.js` — PASS.
- `node innerwear-house/smoke-test.mjs` — PASS.
- Smoke test verifies 26 products, 4 wheels, 10 campaign concepts, 12 collaboration concepts, 78 WebP assets, integrated views and local-only interaction hooks.
- ZIP integrity check (`unzip -t`) — PASS; no corrupt entries reported.
- Asset count in the nested Innerwear House folder — 78 WebP files.

## Not claimed as tested
- Physical Android Chrome interaction and offline cache behaviour have not been tested on a device.
- Live GitHub Pages deployment has not been performed. GitHub integration rejected branch creation with HTTP 403, so repository files remain unchanged.

## Content and privacy notes
- All app features are frontend-only; wishlist, demo bag, wheel results and settings are local browser state. The demo bag does not place orders.
- The age check is self-attestation only. A public Pages URL remains public and is not protected by the gate.
- The 52 WebP assets from New-product- are included. User-submitted campaign posters and six earlier portrait/campaign crops are also included.
- User-submitted nude figure sheets are represented by blurred/covered previews; unblurred nude originals are not in the package. The source `sepia-couples-moodboard.webp` is also covered in the public gallery.
