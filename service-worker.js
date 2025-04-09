const cacheName = 'static-v1';
const assets = [
  '/',
  'index.html',
  'about.html',
  'history.html',
  'medals.html',
  'news.html',
  'styles.css',
  'script.js',
  'peHomO1P.png',
  'peHomO1P-192x192.png',
  'peHomO1P-512x512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Caching assets');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
