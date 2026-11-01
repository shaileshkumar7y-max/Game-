import { readFile, access } from 'node:fs/promises';
import assert from 'node:assert/strict';
import { PRODUCTS, WHEELS, CAMPAIGNS, COLLABORATIONS, DATE_IDEAS } from './data.js';

const route = new URL('./', import.meta.url);
const root = new URL('../', import.meta.url);
const html = await readFile(new URL('index.html', route), 'utf8');
const app = await readFile(new URL('app.js', route), 'utf8');
const sw = await readFile(new URL('../sw.js', import.meta.url), 'utf8');
new Function(app.replace(/^import[^\n]*\n/, ''));
assert.equal(PRODUCTS.length, 26);
assert.deepEqual(Object.keys(WHEELS), ['style','mood','date','surprise']);
assert.equal(CAMPAIGNS.length, 10);
assert.equal(COLLABORATIONS.length, 12);
assert.equal(DATE_IDEAS.length, 8);
assert.match(app, /function imgSrc\(name\).*return `\.\.\//);
assert.match(html, /src="\.\.\/her-after-dark\.webp"/);
assert.match(html, /register\('\.\.\/sw\.js'\)/);
assert.doesNotMatch(html, /\.\.\/\.\.\/index\.html/);
assert.doesNotMatch(html, /private-rate-lab/);
for (const p of PRODUCTS) {
  for (const path of [p.image, p.detail]) {
    const file = String(path).split('/').filter(Boolean).pop();
    await access(new URL(file, root));
  }
}
const namesMatch = app.match(/const names=\[(.*?)\];/s);
assert.ok(namesMatch, 'art gallery source list exists');
const names = [...namesMatch[1].matchAll(/'([^']+\.webp)'/g)].map(m=>m[1]);
assert.equal(names.length, 54);
for (const file of names) await access(new URL(file, root));
for (let i=1;i<=18;i++) await access(new URL(`user-art-preview-${String(i).padStart(2,'0')}.webp`, root));
const imageBlock = sw.match(/const IMAGE_FILES = (\[[\s\S]*?\]);/);
assert.ok(imageBlock, 'root service worker contains image list');
const images = JSON.parse(imageBlock[1]);
assert.equal(images.length, 84);
for (const path of images) await access(new URL(path.replace(/^\.\//,''), root));
assert.doesNotMatch(sw, /\.\/assets\//);
assert.match(sw, /request\.mode === 'navigate'/);
assert.match(sw, /startsWith\('after-hours-'\)/);
console.log('PASS: 26 products, 4 wheels, 10 campaigns, 12 collaborations, 54 catalogue/art images + 18 covered previews, 84 existing root images, corrected paths and root-scoped service worker.');
