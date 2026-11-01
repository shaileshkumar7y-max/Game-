# V6 Fix — Android / GitHub Upload Guide (Hinglish)

**Is ZIP mein images intentionally nahi hain**, kyunki saari 84 WebP images tumhare `Game-` repo ke root mein pehle se maujood hain. ZIP mein duplicate photos nahi rakhe.

## GitHub par upload

1. `Game-` repository ka current backup ZIP save kar lo.
2. Is V6 ZIP ko extract karo.
3. ZIP ka root `index.html` repository ke existing root `index.html` ko replace karega. Isse After Hours ka 21-game Solo/Couples hub main page par wapas aayega.
4. Root `sw.js` aur `manifest.webmanifest` bhi replace karo.
5. `innerwear-house/` ka poora folder repository root par upload karo. Iske andar `index.html`, `app.js`, `data.js`, `styles.css`, `manifest.webmanifest`, feedback files aur test files hain.
6. Repository ke root mein jo `.webp` images hain unhe **delete, move ya re-upload mat karna**. `assets/` naam ka naya folder banane ki zaroorat nahi hai.
7. Commit changes. GitHub Actions / Pages deployment successful hone ke baad site kholo.

## Open kaise karna hai

- After Hours Solo/Couples games: `https://shaileshkumar7y-max.github.io/Game-/`
- HER AFTER DARK Innerwear House: `https://shaileshkumar7y-max.github.io/Game-/innerwear-house/`

## Upload ke baad cache refresh

Agar purana cached version dikhe, Chrome mein site ko reload karo. Zaroorat pade to site settings mein is site ka stored data/cache clear karke dobara kholo; V6 service worker ka cache name badla gaya hai.

## Important

- ZIP sirf code + docs hai; 0 WebP image files included hain.
- Root images already exist honi chahiye. `ASSET_INVENTORY.md` ki list se missing filename check kar sakte ho.
- Age gate self-declaration hai; public GitHub Pages URL ko private/password protected nahi banata.
- Android physical device par final tap-testing upload ke baad karni hogi.
