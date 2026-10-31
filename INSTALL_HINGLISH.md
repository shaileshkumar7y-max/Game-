# After Hours V2 — Frontend-only add-on

## What this ZIP contains

- `public/after-hours/index.html` — complete mobile-first browser game hub.
- `public/after-hours/sw.js` — basic offline cache for the standalone game hub.
- `public/after-hours/manifest.webmanifest` and `icon.svg` — installable-app metadata and icon.
- `APP_LINK_PATCH.md` — small optional patch to add a launch button to the existing Adults 18+ page.

## Install into the existing Couple-game- repository

1. Download and extract this ZIP on your phone or computer.
2. Open the `Couple-game-` repository on GitHub.
3. Upload the included `public` folder contents into the repository's root `public` folder. Keep the exact path `public/after-hours/index.html` and `public/after-hours/sw.js`.
4. For a clickable entry inside the old Adults page, follow `APP_LINK_PATCH.md`. Otherwise, after a successful GitHub Pages deployment, open `/Couple-game-/after-hours/` under the same GitHub Pages site.
5. Check GitHub Actions. The existing Vite workflow copies the `public` directory into the build output. The add-on is not live until the workflow completes successfully.

## Frontend-only design

- No Supabase, database, user account, chat API, AI API or external service is used by this add-on.
- Scores, preferences and optional journal notes are stored in browser `localStorage` only.
- Export and clear-local-data controls are included.
- Two-person games use pass-the-phone on one device. They do not synchronize across two phones.
- The age screen is a self-declared 18+ gate, not verified age assurance.
- Mature material is non-graphic: no explicit sexual instructions or graphic sexual scenes. Solo mode focuses on private self-discovery, comfort, boundaries and reflection; couples modes focus on communication, affection, consent and shared choices.

## Checks

The app has no build dependencies. `index.html` can be hosted as a static file. Run the included local smoke test from the add-on directory:

```sh
node scripts/smoke-test.mjs
```

If you do not have Node.js, open `public/after-hours/index.html` in a modern browser to preview the local UI. Service-worker offline caching requires HTTPS (GitHub Pages provides HTTPS).
