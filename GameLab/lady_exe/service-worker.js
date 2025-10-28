self.addEventListener("install", event => {
    console.log("Service Worker instalado");
    event.waitUntil(
        caches.open("lady-cache-v1").then(cache => {
            return cache.addAll([
                "./",
                "./index.html",
                "./css/estilos_main.css",
                "./css/animaciones_main.css",
                "./js/scrip_main.js",
                "./assets/img/icon.png",
                "./assets/img/icon512.png"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

self.addEventListener("activate", () => {
    console.log("Service Worker activado");
});


// v2 – Forzar actualización 😏 y listo, magia pura 🧙‍♂️
