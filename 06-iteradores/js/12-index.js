const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    edad: 46,
    email: 'daniel.pompa@gmail.com',
    profesion: 'Desarrollador Full Stack'
}

for (let propiedad in persona) {
    console.log(`${propiedad}: ${persona[propiedad]}`);
}

for (let [key, value] of Object.entries(persona)) {
    console.log(key);
    console.log(value);
}