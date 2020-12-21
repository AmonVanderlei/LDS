// sw.js
var actualDate = new Date();
setTimeout(() => {
    var cacheName = `cache-lds-${actualdate}`;
self.addEventListener('install', e => {
    e.waitUntil(
        // depois que o Service Worker estiver instalado,,
        // abra um novo cache
        caches.open(cacheName).then(cache => {
            // adicione todas as URLs de recursos que queremos armazenar em cache
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
                    .filter(cacheName => (cacheName !== staticCacheName))
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
          return response || fetch(event.request);
        })
        .catch(() => {
          return caches.match('pages/offline.html');
        })
    )
  });    
}, 2000);