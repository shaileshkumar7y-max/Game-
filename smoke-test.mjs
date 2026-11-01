import {readFile,stat,readdir} from 'node:fs/promises';
import assert from 'node:assert/strict';
import {PRODUCTS,WHEELS,CAMPAIGNS,COLLABORATIONS,DATE_IDEAS} from './data.js';
const html=await readFile(new URL('./index.html',import.meta.url),'utf8');
const app=await readFile(new URL('./app.js',import.meta.url),'utf8');
assert.equal(PRODUCTS.length,26,'26 product concepts');
assert.deepEqual(Object.keys(WHEELS),['style','mood','date','surprise']);
for(const w of Object.values(WHEELS))assert.equal(w.items.length,8);
assert.equal(CAMPAIGNS.length,10);assert.equal(COLLABORATIONS.length,12);assert.equal(DATE_IDEAS.length,8);
for(const s of ['view-shop','view-wheels','view-date','view-wellness','view-campaigns','view-art','view-couples','view-wishlist','view-bag','productModal','lightbox'])assert.ok(html.includes(s),`missing ${s}`);
for(const s of ['spin','renderArt','addBag','toggleWish','generateDate','sizeNotes','drawCouple','exportBag'])assert.ok(app.includes(s),`missing interaction ${s}`);
assert.doesNotMatch(app,/fetch\s*\(|XMLHttpRequest|WebSocket|https?:\/\//,'no network/backend APIs in application logic');
const assets=await readdir(new URL('./assets/',import.meta.url));
const webps=assets.filter(x=>x.endsWith('.webp'));
assert.ok(webps.length>=75,`all image assets bundled (${webps.length})`);
for(const f of ['her-after-dark.webp','sepia-couples-moodboard.webp','user-art-preview-01.webp','user-campaign-poster-black.webp']){const st=await stat(new URL('./assets/'+f,import.meta.url));assert.ok(st.size>1000,f+' exists')}
const sw=await readFile(new URL('./sw.js',import.meta.url),'utf8');assert.match(sw,/after-hours-innerwear-house-v5/);
const manifest=JSON.parse(await readFile(new URL('./manifest.webmanifest',import.meta.url),'utf8'));assert.match(manifest.name,/Innerwear House/);
console.log(`PASS: ${PRODUCTS.length} products, 4 wheels, ${CAMPAIGNS.length} campaigns, ${COLLABORATIONS.length} collaborations, ${webps.length} WebP assets, all integrated views and local-only interactions.`);
