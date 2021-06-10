const suma = function(a, b) {
    return a + b;
}

const resta = function(a, b) {
    return parseInt(a - b);
}

const multiplicacion = function(a, b) {
    return a * b;
}

const division = function(a, b) {
    return a / b;
}

const resultadoSuma = suma;
const resultadoResta = resta;
const resultadoMultiplicacion = multiplicacion;
const resultadoDivision = division;

console.log(resultadoSuma(40,6));
console.log(resultadoResta(40,6));
console.log(resultadoMultiplicacion(40,6));
console.log(resultadoDivision(40,6));