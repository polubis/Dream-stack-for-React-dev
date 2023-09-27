self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('cache').then((cache) => {
      return cache.addAll([
        '/fonts/LexendBold.ttf',
        '/fonts/LexendMedium.ttf',
        '/fonts/LexendRegular.ttf',
        '/fonts/LexendLight.ttf',
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/fonts/')) {
    event.respondWith(caches.match(event.request));
  }
});
