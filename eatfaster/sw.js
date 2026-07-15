const CACHE_NAME = 'eatfaster-prototype-v15-clean-3syllable-real-pet-calls';
const ASSETS = ['./', './index.html', './manifest.json', './assets/icons/icon-192.png', './assets/icons/icon-512.png', './assets/gemini/pets/capybara.png', './assets/gemini/pets/cat.png', './assets/gemini/pets/dino.png', './assets/gemini/pets/dog.png', './assets/gemini/pets/elephant.png', './assets/gemini/pets/hamster.png', './assets/gemini/pets/panda.png', './assets/gemini/pets/penguin.png', './assets/gemini/pets/rabbit.png', './assets/gemini/foods/apple.png', './assets/gemini/foods/broccoli.png', './assets/gemini/foods/carrot.png', './assets/gemini/foods/chicken.png', './assets/gemini/foods/corn.png', './assets/gemini/foods/dumpling.png', './assets/gemini/foods/egg.png', './assets/gemini/foods/fish.png', './assets/gemini/foods/greens.png', './assets/gemini/foods/noodles.png', './assets/gemini/foods/rice-ball.png', './assets/gemini/foods/rice-bowl.png', './assets/gemini/backgrounds/candy-house.png', './assets/gemini/backgrounds/forest-cabin.png', './assets/gemini/backgrounds/home-table.png', './assets/gemini/backgrounds/kitchen.png', './assets/gemini/backgrounds/picnic.png', './assets/gemini/backgrounds/school-canteen.png', './assets/gemini/backgrounds/seaside.png', './assets/gemini/backgrounds/space-canteen.png', './assets/gemini/backgrounds/train-station.png', './assets/sounds/pet-calls/capybara-call.mp3', './assets/sounds/pet-calls/cat-call.mp3', './assets/sounds/pet-calls/dino-call.mp3', './assets/sounds/pet-calls/dog-call.mp3', './assets/sounds/pet-calls/elephant-call.mp3', './assets/sounds/pet-calls/hamster-call.mp3', './assets/sounds/pet-calls/panda-call.mp3', './assets/sounds/pet-calls/penguin-call.mp3', './assets/sounds/pet-calls/rabbit-call.mp3', './assets/voices/encourage-yue.mp3', './assets/voices/encourage-en.mp3'];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  if (url.origin !== location.origin) return;
  if (event.request.mode === 'navigate') {
    event.respondWith(fetch(event.request).catch(() => caches.match('./index.html')));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request)));
});
