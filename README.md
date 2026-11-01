# After Hours — HER AFTER DARK Innerwear (V4)

A mobile-first, frontend-only refresh of the existing After Hours V3 app. The site name stays **After Hours** and the master brand becomes **HER AFTER DARK · INNERWEAR**.

## Included
- Existing 16 Solo/Couples game experiences preserved.
- 5 new playable style games: Innerwear Style Mood, Couples Innerwear Roulette, After Dark Runway Duel, Secret Style Match, Nautanki Banter Battle.
- HER AFTER DARK Innerwear Studio with interactive local style builder and collection concepts: Midnight Edit, MASTER SERIES Signature Edit, Power Edit, Comfort Edit.
- Art Gallery with two user-supplied campaign-reference crops and four portrait/expression crops from the supplied figure-study sheets.
- Local-only progress and settings, existing age gate, skip/consent choices, offline PWA cache.

## Privacy / hosting
No login, database, backend, AI API, third-party analytics or cloud sync. Style edits and game progress stay in the browser localStorage. The page is public if deployed to a public GitHub Pages repository; localStorage is not a privacy lock.

The supplied full nude figure-study sheets are not included. Only face/expression crops are bundled. The two lingerie campaign images are cropped user-provided references and remain labelled as references; source garment marks visible in the artwork remain the source marks.

## Run checks
```bash
node smoke-test.mjs
```

This is a static site: open `index.html` locally for a basic preview. Service worker caching requires HTTPS.
