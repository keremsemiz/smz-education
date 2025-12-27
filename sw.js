// SMZ Education Service Worker
// Provides offline support and caching for Progressive Web App functionality

const CACHE_NAME = "smz-edu-v1.0.0";
const OFFLINE_URL = "/offline.html";

// Assets to cache on installation
const CRITICAL_ASSETS = [
  "/home/",
  "/general/style.css",
  "/general/main.js",
  "/images/SMZ_LOGO__3_-removebg-preview.png",
  "/images/SMZ_LOGO__3_-removebg-preview.png",
  "/manifest.json",
  OFFLINE_URL,
];

// Install event - cache critical assets
self.addEventListener("install", (event) => {
  console.log("[Service Worker] Installing...");

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Caching critical assets");
        return cache.addAll(CRITICAL_ASSETS);
      })
      .then(() => {
        console.log("[Service Worker] Installation complete");
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error("[Service Worker] Installation failed:", error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener("activate", (event) => {
  console.log("[Service Worker] Activating...");

  event.waitUntil(
    caches
      .keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            if (cacheName !== CACHE_NAME) {
              console.log("[Service Worker] Deleting old cache:", cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
      .then(() => {
        console.log("[Service Worker] Activation complete");
        return self.clients.claim();
      })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener("fetch", (event) => {
  // Skip non-GET requests
  if (event.request.method !== "GET") return;

  // Skip chrome-extension and other non-http(s) requests
  if (!event.request.url.startsWith("http")) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // Return cached response if found
      if (cachedResponse) {
        console.log("[Service Worker] Serving from cache:", event.request.url);
        return cachedResponse;
      }

      // Otherwise fetch from network
      return fetch(event.request)
        .then((networkResponse) => {
          // Don't cache non-successful responses
          if (
            !networkResponse ||
            networkResponse.status !== 200 ||
            networkResponse.type !== "basic"
          ) {
            return networkResponse;
          }

          // Clone the response
          const responseToCache = networkResponse.clone();

          // Cache the fetched response for future use
          caches.open(CACHE_NAME).then((cache) => {
            // Only cache same-origin requests
            if (event.request.url.startsWith(self.location.origin)) {
              cache.put(event.request, responseToCache);
            }
          });

          return networkResponse;
        })
        .catch((error) => {
          console.error("[Service Worker] Fetch failed:", error);

          // If offline and requesting an HTML page, serve offline page
          if (event.request.destination === "document") {
            return caches.match(OFFLINE_URL);
          }

          // For other resources, try to serve a cached version
          return caches.match(event.request);
        });
    })
  );
});

// Background sync event (optional - for offline form submissions)
self.addEventListener("sync", (event) => {
  if (event.tag === "sync-messages") {
    event.waitUntil(syncMessages());
  }
});

// Helper function for background sync
async function syncMessages() {
  // Implement your sync logic here
  console.log("[Service Worker] Syncing messages...");
}

// Push notification event (optional)
self.addEventListener("push", (event) => {
  const options = {
    body: event.data ? event.data.text() : "New update available!",
    icon: "/images/SMZ_LOGO__3_-removebg-preview.png",
    badge: "/images/SMZ_LOGO__3_-removebg-preview.png",
    vibrate: [200, 100, 200],
    tag: "smz-notification",
    requireInteraction: false,
  };

  event.waitUntil(self.registration.showNotification("SMZ Education", options));
});

// Notification click event
self.addEventListener("notificationclick", (event) => {
  event.notification.close();

  event.waitUntil(clients.openWindow("/home/"));
});

console.log("[Service Worker] Loaded successfully");
