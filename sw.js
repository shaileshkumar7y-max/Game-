const CACHE_NAME = 'after-hours-fixed-v6';
const CORE_FILES = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./icon.svg",
  "./sw.js",
  "./innerwear-house/",
  "./innerwear-house/index.html",
  "./innerwear-house/app.js",
  "./innerwear-house/data.js",
  "./innerwear-house/styles.css",
  "./innerwear-house/manifest.webmanifest",
  "./innerwear-house/private-feedback.html",
  "./innerwear-house/feedback.css",
  "./innerwear-house/feedback.js"
];
const IMAGE_FILES = [
  "./after-dark-detail.webp",
  "./art-expression-female.webp",
  "./art-expression-male.webp",
  "./art-portrait-female.webp",
  "./art-portrait-male.webp",
  "./atelier-backlit-detail.webp",
  "./backlit-saree-atelier-sketch.webp",
  "./black-elegance-fashion.webp",
  "./black-lace-better-together.webp",
  "./black-lace-collection.webp",
  "./black-lace-detail-v4.webp",
  "./blacked-luxury-campaign-detail.webp",
  "./blacked-luxury-campaign.webp",
  "./blxcked-better-together.webp",
  "./blxcked-boutique-detail.webp",
  "./blxcked-boutique-editorial.webp",
  "./blxcked-comfort-detail.webp",
  "./blxcked-everyday-comfort.webp",
  "./blxcked-lace-detail.webp",
  "./blxcked-luxury-night.webp",
  "./blxcked-runway-detail.webp",
  "./blxcked-runway.webp",
  "./bollywood-romance-poster-collection.webp",
  "./closer-together-campaign.webp",
  "./confidence-together-campaign.webp",
  "./confidence-together-detail.webp",
  "./elegance-after-dark-pink-campaign-detail.webp",
  "./elegance-after-dark-pink-campaign.webp",
  "./fit-guide-detail.webp",
  "./golden-reflection-detail.webp",
  "./her-after-dark-silk-morning-golden-reflection.webp",
  "./her-after-dark.webp",
  "./innerwear-campaign-01.webp",
  "./innerwear-campaign-02.webp",
  "./lace-collection-vanity.webp",
  "./lingerie-fit-guide.webp",
  "./luxury-innerwear-confidence-detail.webp",
  "./luxury-innerwear-confidence.webp",
  "./mughal-poster-detail.webp",
  "./mughal-royal-romance-poster.webp",
  "./new-lace-boutique-ad.webp",
  "./new-lace-boutique-detail.webp",
  "./partner-yoga-balance.webp",
  "./pink-lace-collection-ad.webp",
  "./pink-lace-collection.webp",
  "./pink-lace-detail-v4.webp",
  "./pink-lace-detail.webp",
  "./private-chemistry-after-dark-detail.webp",
  "./private-chemistry-after-dark.webp",
  "./romance-poster-detail.webp",
  "./royal-palace-detail.webp",
  "./royal-palace-saree.webp",
  "./sepia-couples-moodboard.webp",
  "./show-poster-black-edition.webp",
  "./show-poster-sydney-edition.webp",
  "./silk-morning-detail.webp",
  "./stretch-closer-together-detail.webp",
  "./stretch-closer-together.webp",
  "./uploaded-art-expression-female.webp",
  "./uploaded-art-expression-male.webp",
  "./uploaded-art-portrait-female.webp",
  "./uploaded-art-portrait-male.webp",
  "./uploaded-campaign-crop-01.webp",
  "./uploaded-campaign-crop-02.webp",
  "./user-art-preview-01.webp",
  "./user-art-preview-02.webp",
  "./user-art-preview-03.webp",
  "./user-art-preview-04.webp",
  "./user-art-preview-05.webp",
  "./user-art-preview-06.webp",
  "./user-art-preview-07.webp",
  "./user-art-preview-08.webp",
  "./user-art-preview-09.webp",
  "./user-art-preview-10.webp",
  "./user-art-preview-11.webp",
  "./user-art-preview-12.webp",
  "./user-art-preview-13.webp",
  "./user-art-preview-14.webp",
  "./user-art-preview-15.webp",
  "./user-art-preview-16.webp",
  "./user-art-preview-17.webp",
  "./user-art-preview-18.webp",
  "./user-campaign-poster-black.webp",
  "./user-campaign-poster-sydney.webp"
];
const SCOPE_URL = new URL(self.registration.scope);

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_FILES);
    // Individual image misses should not cancel installation of the app shell.
    await Promise.allSettled(IMAGE_FILES.map(file => cache.add(file)));
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith('after-hours-') && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== SCOPE_URL.origin || !url.pathname.startsWith(SCOPE_URL.pathname)) return;
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response.ok && response.type === 'basic') {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy)).catch(() => {});
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        return (await caches.match('./index.html')) || new Response('Offline — this page is not cached yet.', {status: 503, headers: {'Content-Type':'text/plain; charset=utf-8'}});
      }
      return new Response('', {status: 504, statusText: 'Offline asset unavailable'});
    }
  })());
});
