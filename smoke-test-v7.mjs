import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import { createRequire } from 'node:module';
import vm from 'node:vm';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const html=await readFile(path.join(root,'index.html'),'utf8');
const js=await readFile(path.join(root,'games-v7.js'),'utf8');
const inner=await readFile(path.join(root,'innerwear-house','index.html'),'utf8');
const sw=await readFile(path.join(root,'sw.js'),'utf8');
const data=await readFile(path.join(root,'data.js'),'utf8');
assert.match(html,/CHUT MODE/);assert.match(html,/LAND MODE/);assert.match(html,/innerwear-house\//);
assert.match(html,/games-v7\.js/);assert.match(html,/games-v7\.css/);
assert.match(inner,/\.\.\/styles\.css/);assert.match(inner,/\.\.\/app\.js/);assert.match(inner,/\.\/manifest\.webmanifest/);
assert.match(sw,/after-hours-v7-shell/);assert.match(sw,/req\.destination === 'image'/);assert.match(sw,/innerwear-house\/index\.html/);
const gameCount=(js.match(/\{id:'[^']+',title:/g)||[]).length;assert.equal(gameCount,26,`Expected 26 games, got ${gameCount}`);
const assets=[...new Set([...js.matchAll(/\['([a-z0-9-]+\.webp)'/gi)].map(m=>m[1]))];
for(const asset of assets) await access(path.join(root,asset));
const rootImages=(await readdir(root)).filter(x=>x.endsWith('.webp'));
assert.equal(rootImages.length,84,`Expected 84 existing image assets, found ${rootImages.length}`);
// Basic runtime boot using a tiny DOM shim, then exercise modal open and image shuffle.
const elements=new Map(), handlers={}, docHandlers={};
function element(id='') {return {id,value:'',textContent:'',innerHTML:'',checked:false,disabled:false,dataset:{},style:{},scrollTop:0,scrollHeight:0,className:'',src:'',classList:{add(){},remove(){},toggle(){},contains(){return false}},addEventListener(type,fn){(handlers[id]??={})[type]=fn},setAttribute(){},scrollIntoView(){},append(){},prepend(){},remove(){},click(){}}}
const document={
 getElementById(id){if(!elements.has(id))elements.set(id,element(id));return elements.get(id)},
 querySelector(sel){if(sel==='.filter.active')return {dataset:{filter:'all'}};return null},
 querySelectorAll(){return []},
 addEventListener(type,fn){docHandlers[type]=fn},
 createElement(tag){return element(tag)},
 body:element('body')
};
const localStore=new Map();
const context={document,localStorage:{getItem:k=>localStore.get(k)||null,setItem:(k,v)=>localStore.set(k,String(v)),removeItem:k=>localStore.delete(k)},window:{scrollTo(){}},console,Math,Date,JSON,Set,Array,String,Number,Object,RegExp,Promise,Blob,URL:{createObjectURL(){return 'blob:demo'},revokeObjectURL(){}},confirm:()=>true,setTimeout,clearTimeout,performance:{now:()=>1000}};
vm.runInNewContext(js,context,{timeout:2500});
assert.ok(elements.get('gameGrid').innerHTML.includes('Spin the Bottle'));
assert.ok(elements.get('gameGrid').innerHTML.includes('Adult Quiz Battle'));
assert.ok(elements.get('featuredGames').innerHTML.includes('Truth or Dare V2'));
for(const id of ['truth-dare','couples-roulette','yes-maybe','secret-desire','roleplay','three-dice','never-have','fastest-finger','mystery-card','double-trouble','risk-reward','match-mood','secret-envelope','look-night','confession','unlock-night','solo-story','mira-chat','self-discovery','style-mood','hot-seat','spin-bottle','would-rather','quiz-battle','mystery-dare-wheel','couples-after-dark']){
 docHandlers.click({target:{closest(sel){return sel==='[data-open-game]'?{dataset:{openGame:id}}:null}}});
 assert.ok(elements.get('gameOverlay').classList,`Game modal not opened for ${id}`);
 assert.ok(elements.get('gameBody').innerHTML.length>20,`No game UI rendered for ${id}`);
}
docHandlers.click({target:{closest(sel){return sel==='[data-image-mode]'?{dataset:{imageMode:'female'}}:null}}});
assert.ok(elements.get('shuffleImage').src.includes('.webp'));
assert.ok(elements.get('shuffleTitle').textContent.includes('Female'));
const firstImage=elements.get('shuffleImage').src;handlers.shuffleNext.click();assert.notEqual(elements.get('shuffleImage').src,firstImage,'shuffle should not repeat on next');
// Exercise the key interactive loops: prompt draw, private matching and scripted story progression.
docHandlers.click({target:{closest(sel){return sel==='[data-open-game]'?{dataset:{openGame:'truth-dare'}}:null}}});const xpBefore=elements.get('xpValue').textContent;docHandlers.click({target:{closest(sel){return sel==='[data-act]'?{dataset:{act:'complete'}}:null}}});assert.equal(elements.get('xpValue').textContent,xpBefore,'XP must not be awarded before a prompt is drawn.');docHandlers.click({target:{closest(sel){return sel==='[data-act]'?{dataset:{act:'draw'}}:null}}});assert.notEqual(elements.get('promptText').textContent,'Draw your first prompt.');docHandlers.click({target:{closest(sel){return sel==='[data-act]'?{dataset:{act:'complete'}}:null}}});const xpAfterComplete=elements.get('xpValue').textContent;docHandlers.click({target:{closest(sel){return sel==='[data-act]'?{dataset:{act:'complete'}}:null}}});assert.equal(elements.get('xpValue').textContent,xpAfterComplete,'A completed round must not award XP twice.');
docHandlers.click({target:{closest(sel){return sel==='[data-open-game]'?{dataset:{openGame:'yes-maybe'}}:null}}});docHandlers.click({target:{closest(sel){return sel==='[data-match]'?{dataset:{match:'Yes'},classList:{add(){}}}:null}}});assert.match(elements.get('matchStatus').textContent,/Player A is locked/);docHandlers.click({target:{closest(sel){return sel==='[data-match]'?{dataset:{match:'Yes'},classList:{add(){}}}:null}}});assert.match(elements.get('matchStatus').innerHTML,/100% match/);
docHandlers.click({target:{closest(sel){return sel==='[data-open-game]'?{dataset:{openGame:'solo-story'}}:null}}});for(let i=0;i<3;i++)docHandlers.click({target:{closest(sel){return sel==='[data-story-choice]'?{dataset:{storyChoice:'0'}}:null}}});assert.match(elements.get('gameBody').innerHTML,/STORY COMPLETE/);
console.log(`PASS · ${gameCount} game views render · shuffle next changes image · prompt deck, private match and story progression work · ${assets.length} shuffle image refs resolve · ${rootImages.length} existing image files available · hub and Innerwear route verified`);
// A malformed localStorage deck must be discarded safely instead of breaking a prompt draw.
const badElements=new Map(), badHandlers={}, badDocHandlers={};
function badElement(id=''){return {id,value:'',textContent:'',innerHTML:'',checked:false,disabled:false,dataset:{},style:{},scrollTop:0,scrollHeight:0,className:'',src:'',classList:{add(){},remove(){},toggle(){},contains(){return false}},addEventListener(type,fn){(badHandlers[id]??={})[type]=fn},setAttribute(){},scrollIntoView(){},append(){},prepend(){},remove(){},click(){}}}
const badDocument={getElementById(id){if(!badElements.has(id))badElements.set(id,badElement(id));return badElements.get(id)},querySelector(sel){if(sel==='.filter.active')return {dataset:{filter:'all'}};return null},querySelectorAll(){return []},addEventListener(type,fn){badDocHandlers[type]=fn},createElement(tag){return badElement(tag)},body:badElement('body')};
const badStore=new Map([['after-hours-v7-local',JSON.stringify({completed:{'deck:truth-daretruth':'corrupted-value'},favourites:['not-an-image'],roast:'invalid',customPrompts:'not-an-array'})]]);
const badContext={document:badDocument,localStorage:{getItem:k=>badStore.get(k)||null,setItem:(k,v)=>badStore.set(k,String(v)),removeItem:k=>badStore.delete(k)},window:{scrollTo(){}},console,Math,Date,JSON,Set,Array,String,Number,Object,RegExp,Promise,Blob,URL:{createObjectURL(){return 'blob:demo'},revokeObjectURL(){}},confirm:()=>true,setTimeout,clearTimeout,performance:{now:()=>1000}};
vm.runInNewContext(js,badContext,{timeout:2500});
badDocHandlers.click({target:{closest(sel){return sel==='[data-open-game]'?{dataset:{openGame:'truth-dare'}}:null}}});
badDocHandlers.click({target:{closest(sel){return sel==='[data-act]'?{dataset:{act:'draw'}}:null}}});
assert.notEqual(badElements.get('promptText').textContent,'Draw your first prompt.','Corrupt saved deck state should be sanitized before prompt draw.');
console.log('PASS · malformed localStorage deck is sanitized and remains playable');
