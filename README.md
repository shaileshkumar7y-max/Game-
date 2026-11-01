# After Hours V6 — Image & Route Fix

This is a small code-only repair package for the existing `shaileshkumar7y-max/Game-` GitHub Pages repository.

## What it repairs

- Restores the 21-experience After Hours Solo/Couples game hub as the main `/Game-/` page.
- Keeps the 26-product HER AFTER DARK Innerwear House available at `/Game-/innerwear-house/`.
- Fixes the V4 and V5 image URL mismatch: the repository's WebP assets are stored at the repository root, not in an `assets/` folder.
- Uses root-relative image paths in the nested Innerwear House (`../filename.webp`).
- Repairs the service-worker cache list and prevents an offline/missing image from receiving `index.html` as its image response.
- Adds a single shared root service worker for both routes and bumps its cache version.
- Fixes the return-to-games links and removes a stale link to an unavailable `private-rate-lab/` directory.
- Fixes one-size products defaulting to `M`, validates stored wishlist/bag data, and prevents repeated wheel taps from creating overlapping spins.

## Images

**No WebP files are included in this ZIP.** The current Game repository already contains all 84 WebP files at its root. The package points to those existing files, so uploading another copy would create duplicates. See `ASSET_INVENTORY.md` for the full expected inventory.

## Routes

- Main game hub: `/Game-/`
- Innerwear catalogue, wheels, Date Night, Fit & Wellness and Art Atelier: `/Game-/innerwear-house/`

No backend, API, account, payment or cloud sync has been added. Local progress remains in browser storage.
