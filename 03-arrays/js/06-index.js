const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

numeros.forEach(numero => console.log(numero));

// forEach
numeros.forEach(numero => {
    if (numero === 20) {
        console.log('El número 20 está en el array con forEach');
    }
});

// includes
const resultadoNumeros = numeros.includes(20);

console.log(resultadoNumeros);

if (resultadoNumeros) {
    console.log('El número 20 está en el array con includes');
}

// forEach
console.log('Productos forEach');
carrito.forEach(producto => console.log(producto));
carrito.forEach(producto => console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}€`));

// map - Crea un nuevo array
console.log('Productos map');
carrito.map(producto =>  console.log(producto));
carrito.map(producto => console.log(`Nombre: ${producto.nombre} - Precio: ${producto.precio}€`));

// some - Para arrays de objetos
const resultadoCarrito = carrito.some(producto => producto.nombre === 'PC Workstation');


if (resultadoCarrito) {
    console.log('PC Workstation está en el array con some');
}

// reduce
resultadoCarritoReduce = carrito.reduce((total, producto) => total + producto.precio, 0);

console.log(`Suma total del carrito con reduce: ${resultadoCarritoReduce}€`);

// filter
console.log('Productos con precio superior a 900 con filter');
const resultadoCarritoFilterPrecio = carrito.filter(producto => producto.precio > 900);
console.log(resultadoCarritoFilterPrecio);

console.log('Todos los productos que no son PC Workstation con filter');
const resultadoCarritoFilterNombre = carrito.filter(producto => producto.nombre !== 'PC Workstation');

console.log(resultadoCarritoFilterNombre);