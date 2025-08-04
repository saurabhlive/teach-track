const CACHE_NAME = "traclass-cache-v1";
const toCache = [
  "/",
  "/index.html",
  "/style.css",
  "/app.js",
  // Add more assets/icons you want cached for offline use
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(toCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
