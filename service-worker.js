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
        'offline.html',
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      // If the file is cached, return it
      return response || fetch(e.request).catch(() => {
        // If fetch fails (e.g., no internet), serve the offline page
        return caches.match('offline.html');
      });
    })
  );
});
