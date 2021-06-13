const nombreCache = 'apv-v1';

const archivos = [
    '/',
    '/index.html',
    '/error.html',
    '/css/bootstrap.min.css',
    '/css/styles.css',
    '/js/app.js',
    '/js/apv.js'
]

// Instalar el service Worker, no se puede utilizar window, por lo tanto se utiliza self
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(nombreCache)
            .then(cache => {
                cache.addAll(archivos)
            })
    )
});


// Activar el service worker
self.addEventListener('activate', e => {
    // Actualizar la PWA
    e.waitUntil(
        caches.keys()
            .then(keys => {
                return Promise.all(keys
                    .filter(key => key !== nombreCache)
                    .map(key => caches.delete(key)) // borrar versiones anteriores
                )
            })
    )
});

// Evento fetch para descargar archivos estáticos
self.addEventListener('fetch', e => {
    e.respondWith(
        caches.match(e.request)
            .then(respuestaCache => {
                return respuestaCache || fetch(e.request);
            })
            .catch(() => caches.match('/error.html'))
    );
});