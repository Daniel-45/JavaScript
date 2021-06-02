const ciudades = ['Madrid', 'Londres', 'New York', 'Berlín'];

const numeros = new Set([46, 1500, 2, 1800, 98]);

const datos = new Map();

datos.set('nombre', 'Emma');
datos.set('email', 'emma.ciambrino@gmail.com');

console.log('Default Iterator');

console.log('Ciudades');

for (let ciudad of ciudades) {
    console.log(`${ciudad}`);
}

console.log('Números');

for (let numero of numeros) {
    console.log(`${numero}`);
}

console.log('Datos');

for (let dato of datos) {
    console.log(`${dato}`);
}

// Entries Iterator añade una clave si no existe, retorna clave/valor
console.log('Entries Iterator');

console.log('Ciudades');

for (let entry of ciudades.entries()) {
    console.log(entry);
}

console.log('Números');

for (let entry of numeros.entries()) {
    console.log(entry);
}

console.log('Datos');

for (let entry of datos.entries()) {
    console.log(entry);
}

// Values Iterator retorna los valores
console.log('Values Iterator');

console.log('Ciudades');

for (let values of ciudades.values()) {
    console.log(values);
}

console.log('Números');

for (let values of numeros.values()) {
    console.log(values);
}

console.log('Datos');

for (let values of datos.values()) {
    console.log(values);
}

// Keys Iterator retorna las claves
console.log('Keys Iterator');

console.log('Ciudades');

for (let keys of ciudades.keys()) {
    console.log(keys);
}

console.log('Números');

for (let keys of numeros.keys()) {
    console.log(keys);
}

console.log('Datos');

for (let keys of datos.keys()) {
    console.log(keys);
}