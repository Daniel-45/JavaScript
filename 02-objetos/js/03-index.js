const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    email: 'daniel.pompa@gmail.com',
    informacion: {
        ciudad: {
            nombreCiudad: 'Madrid'
        },
        direccion: {
            calle: 'Pizarro',
            numero: 24
        }
    },
    profesion: 'Desarrollador Full Stack',
    tecnologias: {
        lenguajes: ['Java', 'JavaScript'],
        frameworks: ['Spring Framework', 'Angular']
    }
}

console.log('Objetos dentro de objetos');

const {
    nombre,
    apellidos,
    email,
    informacion: { ciudad: {nombreCiudad}, direccion: {calle, numero} },
    profesion,
    tecnologias
} = persona;

console.log(`Nombre: ${nombre}`);
console.log(`Apellidos ${apellidos}`);
console.log(`Email ${email}`);
console.log(`Dirección`);
console.log(`Ciudad: ${nombreCiudad}`);
console.log(`Calle: ${calle} Número: ${numero}`);
console.log(`Profesión: ${profesion}`);
console.log(`Lenguajes: ${tecnologias.lenguajes}`);
console.log(`Frameworks: ${tecnologias.frameworks}`);