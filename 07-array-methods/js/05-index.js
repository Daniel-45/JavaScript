const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

// Filter
const resultadoCarritoFilterPrecio = carrito.filter(producto => producto.precio > 900);

console.log(resultadoCarritoFilterPrecio);

const resultadoCarritoFilterNombre = carrito.filter(producto => producto.nombre !== 'PC Workstation');

console.log(resultadoCarritoFilterNombre);