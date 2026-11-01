import { readFile, stat } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, 'inline game script exists');
new Function(script);
for (const feature of ['HER AFTER DARK','INNERWEAR','Innerwear Style Mood','Couples Innerwear Roulette','After Dark Runway Duel','Secret Style Match','Nautanki Banter Battle','brandView','artView','renderBrand','renderArt','data-style-build','data-style-roulette','localStorage']) assert.ok(html.includes(feature), `missing ${feature}`);
const gamesBlock = html.slice(html.indexOf('const games=['), html.indexOf('const $=id=>'));
assert.equal((gamesBlock.match(/\{id:/g)||[]).length,21,'21 game experiences are registered');
for (const file of ['innerwear-campaign-01.webp','innerwear-campaign-02.webp','art-portrait-female.webp','art-portrait-male.webp','art-expression-female.webp','art-expression-male.webp']) { const f=await stat(new URL(file, import.meta.url)); assert.ok(f.size>1000, `${file} exists and is non-empty`); }
const manifest=JSON.parse(await readFile(new URL('./manifest.webmanifest',import.meta.url),'utf8'));
assert.match(manifest.name,/HER AFTER DARK/);
const sw=await readFile(new URL('./sw.js',import.meta.url),'utf8'); assert.match(sw,/after-hours-fixed-v6/);
assert.ok(html.includes('./innerwear-house/'),'main game page links to Innerwear House');
console.log('PASS: game script syntax, 21-game catalogue, brand/art views, local storage, PWA manifest and existing root assets.');
console.log('NOTE: This smoke test does not replace real Android browser and accessibility testing.');
