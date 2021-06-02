const  persona = {
    nombre: 'Daniel',
    edad: 46,
    email: 'daniel.pompa@gmail.com',
    profesion: 'Desarrollador FullStack Junior',
    informacion: function() {
        console.log(`Nombre: ${this.nombre}\nEmail: ${this.email}\nProfesión: ${this.profesion}`);
    }
}

persona.informacion();

const reproductor = {
    reproducir: function(n) {
        console.log(`Reproduciendo canción ${n}`);
    },
    pausa: function(n) {
        console.log(`Pausando canción ${n}`);
    },
    eliminar: function(n) {
        console.log(`Eliminando canción ${n}`);
    },
    crearPlayList: function(nombre) {
        console.log(`Creando playlist ${nombre}`);
    },
    reproducirPlayList: function(nombre) {
        console.log(`Reproduciendo playlist ${nombre}`);
    },
    eliminarPlayList: function(nombre) {
        console.log(`Eliminando playlist ${nombre}`);
    }
}

reproductor.reproducir(1);
reproductor.pausa(1);
reproductor.eliminar(1);

reproductor.crearPlayList('Rap');
reproductor.crearPlayList('Rock');

reproductor.reproducirPlayList('Rap');



