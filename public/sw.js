// Nombre de la caché. Si cambias el número de versión,
// el navegador borrará la caché vieja y guardará una nueva.
const CACHE_NAME = "portafolio-cache-v1";

// Archivos base que queremos que funcionen sin conexión.
const URLS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/favicon.svg",
  "/icons.svg",
];

// 1. INSTALACIÓN: se ejecuta una sola vez, cuando el navegador
// descubre el Service Worker por primera vez.
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(URLS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. ACTIVACIÓN: se ejecuta cuando el Service Worker toma el control.
// Aquí borramos cachés antiguas de versiones anteriores.
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// 3. FETCH: se ejecuta cada vez que la página pide un archivo
// (imagen, script, css, etc.). Aquí decidimos si respondemos
// desde la caché o desde internet.
self.addEventListener("fetch", (event) => {
  // Solo interceptamos peticiones GET (no formularios, no POST, etc.)
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Si el archivo ya está en caché, lo devolvemos directo.
      if (cachedResponse) {
        return cachedResponse;
      }

      // Si no está en caché, lo pedimos a internet...
      return fetch(event.request)
        .then((networkResponse) => {
          // y lo guardamos en caché para la próxima vez.
          return caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // Si no hay internet Y no está en caché, podríamos
          // devolver una página de "sin conexión" aquí.
          // Por ahora, dejamos que falle normalmente.
        });
    })
  );
});