var actualDate = new Date();
setTimeout(() => {
    var cacheName = `cache-lds-${actualDate}`;
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll([
                '/',
                '/index.html',
                '/pages/about.html',
                '/pages/library.html',
                '/pages/playlist.html',
                '/pages/offline.html',
                '/assets/logo.png',
                '/assets/musicas_curtidas.png',
                '/assets/favicon-16x16.png',
                '/assets/favicon-32x32.png',
                '/assets/android-chrome-192x192.png',
                '/assets/android-chrome-512x512.png',
                '/assets/apple-touch-icon.png',
                '/styles/main.css',
                '/styles/main-about.css',
                '/styles/main-library.css',
                '/styles/main-playlist.css',
                '/styles/player.css',
                '/styles/player-playlist.css',
                '/styles/reset.css',
                '/styles/responsive.css',
                '/styles/responsive-about.css',
                '/styles/responsive-library.css',
                '/styles/responsive-playlist.css',
                '/styles/sidebar.css',
                '/scripts/index.js',
                '/scripts/library.js',
                '/scripts/music-index.js',
                '/scripts/music-playlist.js',
                '/scripts/player-playlist.js',
                '/scripts/player.js',
                '/scripts/json/albuns.json',
            ]);
        })
    );
});

// Clear cache on activate
this.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames
                    .filter(cacheName => (cacheName.startsWith('cache-lds-')))
                    .filter(cacheName => (cacheName !== cacheName))
                    .map(cacheName => caches.delete(cacheName))
            );
        })
    );
});
// Serve from Cache
this.addEventListener("fetch", event => {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
            console.log(response)
          return response || fetch(event.request);
        })
        .catch(() => {
            console.log('offline: '+response)
          return caches.match('pages/offline.html');
        })
    )
  });
}, 5000);