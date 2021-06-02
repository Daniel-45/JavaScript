'use strict';

const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    edad: 46,
    email: 'daniel.pompa@gmail.com',
    profesion: 'Desarrollador Full Stack',
    lenguajes: ['Java', 'JavaScript'],
    frameworks: ['Spring Framework', 'Angular']
}

// No permite modificar el objeto
Object.freeze(persona);

// Comprobar si un objeto está sellado
console.log('Freeze:', Object.isFrozen(persona));

// No permite añadir, ni eliminar, pero si modificar propiedades
// Object.seal(persona);
// console.log('Seal:', Object.isSealed(persona));


const { nombre, apellidos, email, profesion, lenguajes, frameworks } = persona;

console.log(`Nombre: ${nombre} ${apellidos}`);
console.log(`Email: ${email}`);
console.log(`Profesión: ${profesion}`);
console.log(`Lenguajes: ${lenguajes}`);
console.log(`Frameworks: ${frameworks}`);