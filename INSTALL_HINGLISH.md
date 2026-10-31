# After Hours V3 — Upload instructions (Hinglish)

## Kya mila hai?
- `index.html` — complete upgraded game website.
- `manifest.webmanifest`, `icon.svg`, `sw.js` — PWA/offline support files.
- `smoke-test.mjs` — basic syntax/feature test.

## Existing Game- repo mein V3 kaise lagayein
1. ZIP extract karo.
2. GitHub par `shaileshkumar7y-max/Game-` repo kholo.
3. Existing `index.html` ka backup download kar lo. Existing version ko delete karne se pehle backup zaroor rakho.
4. Root folder mein V3 ka `index.html`, `manifest.webmanifest`, `icon.svg` aur `sw.js` upload karo. Existing files ko replace karna hoga.
5. Commit changes karo.
6. Actions tab mein workflow green hone ka wait karo; fail ho toh deployment publish nahi hua hoga.
7. Website par hard refresh karo. Android Chrome mein site data/cache clear karna pad sakta hai agar old service worker old version dikha raha ho.

## Existing repo backup route
- Backup branch ya ZIP save karna safest hai.
- GitHub par root files replace karne se old V2 files history mein rahengi, par download ki hui local backup copy bhi rakhna.

## Test checklist
- 18+ gate confirm karo.
- Solo tab, Couples tab aur Studio tab kholo.
- Character settings change karke save karo.
- Mira story ke 4 chapters/choices test karo.
- Roulette spin, Truth/Dare, Yes/No/Maybe, Quiz, WYR, Bingo, Roleplay and Dice test karo.
- Progress export aur clear-data test karo.
- Android phone par portrait layout aur service-worker offline behavior test karo.

Note: age gate self-declaration only hai. Public GitHub Pages URL password-restricted nahi hota; link private share karne se real access control nahi milta. Browser localStorage password-protected nahi hota. Website mature but non-graphic hai.
