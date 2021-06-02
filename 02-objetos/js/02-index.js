const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    email: 'daniel.pompa@gmail.com',
    profesion: 'Desarrollador Full Stack'
}

// Desesctructuración
const { nombre, apellidos, email, profesion } = persona;

console.log('Desestructuración')
console.log(`Nombre: ${nombre}`);
console.log(`Apellidos: ${apellidos}`);
console.log(`Email: ${email}`);
console.log(`Profesión: ${profesion}`);