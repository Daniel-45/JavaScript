const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    email: 'daniel.pompa@gmail.com'
}

console.log('Object literal');
console.log(persona);

console.log('Acceder a las propiedades de un objeto');
console.log(`Nombre: ${persona.nombre}`);
console.log(`Apellidos: ${persona.apellidos}`);
console.log(`Email: ${persona.email}`);

// Añadir propiedades a un objeto
persona.telefono = '656 25 98 65';
persona.profesion = 'Desarrollador Full Stack';

// Eliminar propiedades de un objeto
delete persona.telefono;
