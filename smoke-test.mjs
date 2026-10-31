import { readFile } from 'node:fs/promises';
import assert from 'node:assert/strict';
const html = await readFile(new URL('./index.html', import.meta.url), 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/i)?.[1];
assert.ok(script, 'Inline app script exists');
new Function(script);
for (const label of [
  'Solo Self-Discovery','Mood & Boundaries','Private Prompt Journal','Mira: After Hours',
  'After Dark Fashion Studio','Slow Burn Stories','Yes / No / Maybe','Couples Roulette',
  'Couples Truth or Dare','Desire Dialogue','How Well Do You Know Us?',
  'After-Dark Would You Rather','Couples Hot Seat','Connection Bingo',
  'Roleplay Roulette','Three Dice Challenge','Character Studio','Whisper mode',
  'Export my data','Clear local data'
]) assert.ok(html.includes(label), `Missing feature marker: ${label}`);
const manifest = JSON.parse(await readFile(new URL('./manifest.webmanifest', import.meta.url), 'utf8'));
assert.equal(manifest.short_name, 'After Hours');
console.log('PASS: After Hours V3 syntax and feature smoke test');
console.log('NOTE: This is not real-device interaction or browser compatibility QA.');
