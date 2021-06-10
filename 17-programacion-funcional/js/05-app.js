const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];


const obtenerNombresProductos = p => p.nombre;

const resultado1 = carrito.map(obtenerNombresProductos);

console.log(resultado1);

const filtrarProductos = p => p.precio > 800;

const resultado2 = carrito.filter(filtrarProductos);

console.log(resultado2);

const productoConNombreMasLargo = (a,b) => a.nombre.length >= b.nombre.length ? a : b;

const resultado3 = carrito.reduce(productoConNombreMasLargo);

console.log(resultado3);
