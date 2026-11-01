# AFTER HOURS V7 — HER AFTER DARK

A single-phase, frontend-only upgrade for the existing `Game-` GitHub Pages project.

## What's included

- Main `/Game-/` route is the After Hours game hub again.
- 26 playable game modes: Truth or Dare V2, Couples Roulette, Yes/No/Maybe, Secret Desire Match, Roleplay Roulette, Three Dice, Never Have I Ever, Fastest Finger, Mystery Card, Double Trouble, Risk or Reward, Match My Mood, Secret Envelope, Look of the Night, Couple Confession, Unlock the Night, Solo Girl Story, Mira Chat Simulator, Private Self Check-in, Style Mood Generator, Hot Seat, Spin the Bottle, After-Dark Would You Rather, Adult Quiz Battle, Mystery Dare Wheel and Couples After Dark.
- Hinglish banter selector: Friendly, Naughty, Roast and Full Roast.
- CHUT MODE, LAND MODE and Couples Shuffle image decks. Each deck shuffles without repeats until its cycle finishes; users can go previous/next and save favourites locally.
- Branching scripted Solo Girl story, scripted Mira chat, turn-by-turn private matching, local quiz score, bottle player picker and reaction-time game.
- Existing 26-product HER AFTER DARK / BLXCKED Innerwear House preserved at `/Game-/innerwear-house/` with its catalogue, four wheels, date generator, fit guide, campaign lookbook, Art Atelier, wishlist and demo bag.
- Local-only XP, progress, custom prompts, image favourites and settings. No login, database, payment, AI API, camera, uploads or cross-device sync.
- Updated service worker with all 84 existing root WebP assets. Missing images are not replaced with HTML fallback responses.

## Existing image assets are reused

This update ZIP contains **no WebP files**. The 84 WebP images already present in the repository are referenced from the root and are cached by `sw.js`. Do not delete or re-upload those images.

The female/male shuffle modes use existing lingerie campaign art, portrait crops, expression studies and covered art previews. They do not show explicit genital imagery or unblurred nude figure sheets.

## Install on GitHub Pages

1. Back up the current repository before replacing files.
2. Extract the ZIP.
3. Replace root `index.html`, `manifest.webmanifest` and `sw.js` with the V7 versions.
4. Upload the new root files `games-v7.css` and `games-v7.js`.
5. Upload the whole `innerwear-house/` folder. Keep both files inside it.
6. Keep existing `app.js`, `data.js`, `styles.css`, `icon.svg`, `private-feedback.html`, `feedback.css`, `feedback.js` and all 84 root `.webp` images unchanged.
7. Commit to `main`, wait for GitHub Pages to deploy, then refresh the site and clear the old site cache if the prior screen remains.

## Routes

- Game hub: `https://shaileshkumar7y-max.github.io/Game-/`
- Innerwear House: `https://shaileshkumar7y-max.github.io/Game-/innerwear-house/`

## Important limits

- The age gate is self-attestation, not verification or access control. A public GitHub Pages site remains publicly accessible.
- All gameplay and saved data stay in the same browser. LocalStorage is not encrypted; do not save sensitive personal details on a shared device.
- Mira is a scripted character, not a live AI chatbot.
- This is a non-graphic adult-themed game concept. Prompts and physical activities are optional; consent, pass and stop remain available.
