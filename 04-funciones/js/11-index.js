const suma = ((a,b) => a + b);
const resta = ((a,b) => a - b);
const multiplicacion = ((a,b) => a * b);
const divison = ((a,b) => a / b);
const raizCuadrada = (n => Math.sqrt(n));

console.log('Valores: a = 10, b = 6, n = 8');

console.log(`Suma: ${suma(10,6)}`);
console.log(`Resta: ${resta(10,6)}`);
console.log(`Multiplicación: ${multiplicacion(10,6)}`);
console.log(`División: ${divison(10,6)}`);
console.log(`Raíz cuadrada de 8: ${raizCuadrada(8)}`);