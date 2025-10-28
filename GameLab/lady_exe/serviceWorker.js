self.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
});

self.addEventListener("fetch", (event) => {
    // Este SW no hace nada especial, solo permite la instalación
});
