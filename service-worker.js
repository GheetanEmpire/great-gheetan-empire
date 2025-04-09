self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('static-v1').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/about.html',
        '/history.html',
        '/medals.html',
        '/news.html',
        '/css/styles.css',
        '/js/script.js',
        'peHomO1P.png',
        'peHomO1P-192x192.png',
        'peHomO1P-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
