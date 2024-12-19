self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('my-cache').then((cache) => {
        return cache.addAll([
          '/', // L'URL principale
          '/index.html', // Fichiers HTML nécessaires
          '/static/css/main.css', // CSS nécessaires
          '/static/js/main.js', // JS nécessaires
          '/favicon.ico', // Icône
        ]);
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
  