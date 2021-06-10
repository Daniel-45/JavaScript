const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];


const obtenerNombresProductos = producto => {
    return producto.nombre;
}

const resultado = carrito.map(obtenerNombresProductos);

console.log(resultado);

const nombres = resultado;

let nombreMasLargo = nombres.reduce((a,b) => a.length >= b.length ? a : b);

console.log('Nombre con más caracteres:', nombreMasLargo);
