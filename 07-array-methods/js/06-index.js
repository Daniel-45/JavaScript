const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

// Con un foreach
let resultado1 = '';

carrito.forEach((producto, index) => {
    if (producto.nombre === 'Teclado') {
        resultado1 = carrito[index];
    }
});

console.log(resultado1);

const resultado2 = carrito.find(producto => producto.nombre === 'Monitor');
console.log(resultado2);

const resultado3 = carrito.find(producto => producto.precio === 2000);
console.log(resultado3);
