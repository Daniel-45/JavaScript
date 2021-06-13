if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./service-worker.js')
        .then(registrado => console.log('Instalado correctamente', registrado))
        .catch(error => console.log('Fallo en la instalación', error))
} else {
    console.log('No soporta service worker');
}