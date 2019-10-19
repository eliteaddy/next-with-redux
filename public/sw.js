const cacheName = 'v1';

// Install service worker
self.addEventListener('install', (e) => {
	console.log(`Service Worker Installed`);
});

// Activate Service worker
self.addEventListener('activate', (e) => {
	console.log(`Service Worker: Activated`);
	e.waitUntil(
		caches.keys().then((cacheNames) => {
			return Promise.all(
				cacheNames.map((cache) => {
					if (cache !== cacheName) {
						return caches.delete(cache);
					}
				}),
			);
		}),
	);
});

// Call fetch event
self.addEventListener('fetch', (e) => {
	console.info(`Service Worker: Fetching`);
	e.respondWith(
		fetch(e.request)
			.then((res) => {
				// Make a clone of response
				const resClone = res.clone();
				caches.open(cacheName).then((cache) => {
					cache.put(e.request, resClone).catch((err) => console.log(err));
				});
				return res;
			})
			.catch((err) => caches.match(e.request).then((res) => res)),
	);
});
