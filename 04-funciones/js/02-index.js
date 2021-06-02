// Declaración de función 
function saludo(nombre = 'John', apellidos = 'Doe') {
    console.log(`Hola, ${nombre} ${apellidos} `);
};

saludo('Emma', 'Ciambrino Baz');
saludo();

// Expresión de función
const saludar = function (nombre, apellidos) {
    console.log(`Hola, ${nombre} ${apellidos}`);
}

saludar('Daniel', 'Pompa Pareja');

// Operaciones aritméticas básicas
function suma(a = 20, b = 6) {
    return a + b;
}

console.log('39 + 7 =', parseInt(suma(39, 7)));

function resta(a = 20, b = 6) {
    return a - b;
}

console.log('100 - 46 =', parseInt(resta(100, 46)));

function multiplicacion(a = 20, b = 6) {
    return a * b;
}

console.log('9 * 9 =', parseInt(multiplicacion(9, 9)));

function division(a = 20, b = 6) {
    return (a / b).toFixed(2);
}

console.log('189 / 4 =', parseFloat(division(189, 4)));


function raizCuadrada(n = 10) {
    return Math.sqrt(n);
}

console.log('Raíz cuadrada de 8 =', parseFloat(raizCuadrada(8)));

console.log('Valor de los parámetros por defecto: a = 20, b = 6, n = 10');
console.log('Resultado de las funciones con los parámetros por defecto');

console.log(suma());
console.log(resta());
console.log(multiplicacion());
console.log(division());
console.log(raizCuadrada());

