const suma = (a, b) =>  a + b;
const resta = (a, b) =>  a - b;
const multiplicacion = (a, b) =>  a * b;
const division = (a, b) =>  a / b;

const calculadora = fn => fn(30,10);

console.log(calculadora(suma));
console.log(calculadora(resta));
console.log(calculadora(multiplicacion));
console.log(calculadora(division));