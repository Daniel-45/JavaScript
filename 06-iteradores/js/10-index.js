const lenguajes = ['C#', 'PHP', 'Java', 'JavaScript', 'Python'];

lenguajes.forEach((lenguaje, indice) => console.log(`${indice} : ${lenguaje}`));

const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900, descuento: true },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

carrito.forEach(producto => console.log(producto.nombre));

const nuevoArray = carrito.map(producto => producto);

console.log(nuevoArray);