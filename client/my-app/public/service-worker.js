self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("book-exchange-cache").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/favicon.ico",
        "/manifest.json",
        "/images/android-icon-192x192.png",
        "/images/android-icon-512x512.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
