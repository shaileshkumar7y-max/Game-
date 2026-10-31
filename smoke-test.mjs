import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';

const html = await readFile(new URL('../public/after-hours/index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, 'Inline app script exists');
new Function(script); // syntax compilation only; browser DOM is not executed here.
for (const feature of [
  'Solo Self-Discovery', 'Mood & Boundaries', 'Private Prompt Journal',
  'Mira: After Hours', 'Yes / No / Maybe', 'Couples Roulette',
  'Couples Truth or Dare', 'Desire Dialogue', 'How Well Do You Know Us?',
  'After-Dark Would You Rather', 'Connection Bingo', 'localStorage',
  'Export data', 'Clear local data'
]) {
  assert.ok(html.includes(feature), `Missing expected feature: ${feature}`);
}
assert.ok(html.includes("const AGE_KEY = 'afterhours_v2_age_confirmed'"), 'Age self-declaration gate exists');
console.log('PASS: After Hours V2 static smoke test');
console.log('NOTE: This checks script syntax and required feature labels, not real-device browser behavior.');
