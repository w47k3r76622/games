const CACHE = "cache",
  FILES = ["index.html"];
self.addEventListener("install", (a) => {
  a.waitUntil(
    caches
      .open(CACHE)
      .then((a) => a.addAll(FILES))
      .then(self.skipWaiting())
  );
}),
  self.addEventListener("activate", (a) => {
    a.waitUntil(
      caches.keys().then((a) =>
        Promise.all(
          a.map((a) => {
            if (-1 === CACHE.indexOf(a)) return caches.delete(a);
          })
        )
      )
    );
  }),
  self.addEventListener("fetch", function () {});
