const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

console.log('forEach');
carrito.forEach(producto => console.log(producto));

console.log('map');
carrito.map(producto => console.log(producto));

const reproductor = {
    cancion: '',
    reproducir: n => console.log(`Reproduciendo canción ${n}`),
    pausa: n => console.log(`Pausando canción ${n}`),
    eliminar: n => console.log(`Eliminando canción ${n}`),
    crearPlayList: nombre => console.log(`Creando playlist ${nombre}`),
    reproducirPlayList: nombre => console.log(`Reproduciendo playlist ${nombre}`),
    eliminarPlayList: nombre => console.log(`Eliminando playlist ${nombre}`),

    set nuevaCancion(cancion) {
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    },

    get obtenerCancion() {
        console.log(`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'until the end of time';

reproductor.reproducir(1);
reproductor.pausa(1);
reproductor.eliminar(1);

reproductor.crearPlayList('Rap');
reproductor.crearPlayList('Rock');

reproductor.reproducirPlayList('Rap');