const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

console.table(carrito);

// Some - Para arrays de objetos
const resultadoCarrito = carrito.some(producto => producto.nombre === 'PC Workstation');

if (resultadoCarrito) {
    console.log('PC Workstation está en el array con some');
}

console.log(resultadoCarrito);