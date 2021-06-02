const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const resultado1 = [...diasSemana, 'Sábado', 'Domingo'];

console.log(resultado1);

const carrito = [
    { nombre: 'PC Workstation', precio: 2000 },
    { nombre: 'PC Gamming', precio: 1600 },
    { nombre: 'PC Basic', precio: 800 },
    { nombre: 'Televisión', precio: 900 },
    { nombre: 'Monitor', precio: 200 },
    { nombre: 'Teclado', precio: 80 },
    { nombre: 'Ratón', precio: 45 }
];

const producto = { nombre: 'Disco duro', precio: 130 };

const resultado2 = [...carrito, producto];

console.log(resultado2);
