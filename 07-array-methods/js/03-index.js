const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];

const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

// Encontrar un índice en un array
console.table(diasSemana);
const indice1 = diasSemana.findIndex(dia => dia === 'Jueves');
console.log(`Jueves está en el índice ${indice1}`);

// Encontrar un índice en un array de objetos
console.table(carrito);
const indice2 = carrito.findIndex(producto => producto.nombre === 'Teclado');
console.log(`Teclado está en el índice ${indice2}`);
