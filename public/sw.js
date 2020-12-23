self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll([
                '/public/',
                '/public/index.html',
                '/public/pages/about.html',
                '/public/pages/library.html',
                '/public/pages/playlist.html',
                '/public/pages/offline.html',
                '/public/assets/logo.png',
                '/public/assets/musicas_curtidas.png',
                '/public/assets/favicon-16x16.png',
                '/public/assets/favicon-32x32.png',
                '/public/assets/android-chrome-192x192.png',
                '/public/assets/android-chrome-512x512.png',
                '/public/assets/apple-touch-icon.png',
                '/public/styles/main.css',
                '/public/styles/main-about.css',
                '/public/styles/main-library.css',
                '/public/styles/main-playlist.css',
                '/public/styles/player.css',
                '/public/styles/player-playlist.css',
                '/public/styles/reset.css',
                '/public/styles/responsive.css',
                '/public/styles/responsive-about.css',
                '/public/styles/responsive-library.css',
                '/public/styles/responsive-playlist.css',
                '/public/styles/sidebar.css',
                '/public/scripts/index.js',
                '/public/scripts/library.js',
                '/public/scripts/music-index.js',
                '/public/scripts/music-playlist.js',
                '/public/scripts/player-playlist.js',
                '/public/scripts/player.js',
                '/public/scripts/json/albuns.json',
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
                    return caches.match('./public/pages/offline.html');
                })
            })
    );
});