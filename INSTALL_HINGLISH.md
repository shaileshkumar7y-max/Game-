# AFTER HOURS V7 — Upload Guide (Android / Hinglish)

**ZIP ke andar root files seedhe rakhe gaye hain; extra wrapper folder nahi hai.** Existing images aur Innerwear source files dobara upload nahi karne.

## Upload steps

1. GitHub `shaileshkumar7y-max/Game-` repository ka backup ZIP download kar lo.
2. `After_Hours_V7_Complete_One_Phase.zip` phone par extract karo.
3. Extracted files mein root `index.html`, `manifest.webmanifest` aur `sw.js` ko repository ke root mein replace karo.
4. `games-v7.css` aur `games-v7.js` ko repository root mein naye files ke roop mein upload karo.
5. `innerwear-house` folder ko poora repository root mein upload karo. Iske andar `index.html` aur `manifest.webmanifest` dono hone chahiye.
6. **In existing files ko replace/delete mat karna:** `app.js`, `data.js`, `styles.css`, `icon.svg`, `private-feedback.html`, `feedback.css`, `feedback.js`.
7. Root par pehle se maujood **saari 84 `.webp` images ko waise hi rehne do**. ZIP mein unki copies nahi hain.
8. Commit to `main`; GitHub Actions / Pages deployment green hone do.
9. Chrome mein website reload karo. Purana screen aaye to site cache clear karke dobara kholo.

## Live routes after upload

- Main After Hours game hub: `https://shaileshkumar7y-max.github.io/Game-/`
- HER AFTER DARK Innerwear House: `https://shaileshkumar7y-max.github.io/Game-/innerwear-house/`

## What is in V7

- 26 Solo / Couples / Party game modes with refreshed prompt decks.
- Hinglish banter levels: Friendly, Naughty, Roast and Full Roast.
- CHUT MODE, LAND MODE and Couples Shuffle with no-repeat gallery cycles, previous / next and favourites.
- Scripted Solo Girl Story and Mira Chat, private matching, Spin the Bottle, quiz, dice and reaction games.
- Improved local scoring guard, malformed-save protection, pass / stop controls and reduced-motion option.
- Existing Innerwear House kept as its own route: product catalogue, wishlist, demo bag, wheels, date generator, fit guide, campaigns and Art Atelier.

## Important

- Backend, login, payments, AI API or online multiplayer nahi hai. Scores and favourites same browser ke localStorage mein save hote hain.
- 18+ gate self-confirmation hai, password protection nahi. Public GitHub Pages link public hi rahega.
- Chut/Land shuffle curated lingerie campaign images, portrait crops and covered artwork use karta hai; explicit genital imagery / unblurred nude sheets included nahi hain.
- Existing image and source files ko delete mat karna.
