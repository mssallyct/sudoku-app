const CACHE_NAME = 'sudoku-app-v1';
const urlsToCache = [
  '/sudoku-app/',
  '/sudoku-app/index.html',
  '/sudoku-app/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
