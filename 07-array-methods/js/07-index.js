const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

const resultado = carrito.every(producto => producto.precio < 2500);
console.log(resultado);