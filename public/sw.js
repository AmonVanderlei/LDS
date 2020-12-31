self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
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
                '/styles/main-offline.css',
                '/styles/player.css',
                '/styles/player-playlist.css',
                '/styles/reset.css',
                '/styles/responsive.css',
                '/styles/responsive-about.css',
                '/styles/responsive-library.css',
                '/styles/responsive-playlist.css',
                '/styles/responsive-offline.css',
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
self.addEventListener('activate', (event) => {
    var cacheKeeplist = ['v2'];

    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (cacheKeeplist.indexOf(key) === -1) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((resp) => {
                return resp || fetch(event.request).then((response) => {
                    let responseClone = response.clone();
                    caches.open('v1').then((cache) => {
                        cache.put(event.request, responseClone);
                    });

                    return response;
                }).catch(() => {
                    return caches.match('./pages/offline.html');
                })
            })
    );
});