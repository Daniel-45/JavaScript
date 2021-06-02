let mensaje = 'Hola,';
let nombre = 'Emma';

// Declaración de función 
function saludo() {
    console.log(`${mensaje} ${nombre}`);
};

saludo();

// Expresión de función
const saludar = function () {
    nombre = 'Daniel';
    console.log(`${mensaje} ${nombre}`);
}

saludar();

// Operaciones aritméticas básicas
const numero1 = 25;
const numero2 = 10;
let = resultado = 0;

function suma() {
    resultado = numero1 + numero2;
    console.log(`${numero1} + ${numero2} =`, resultado);
}

function resta() {
    resultado = numero1 - numero2;
    console.log(`${numero1} - ${numero2} =`, resultado);
}

function multiplicacion() {
    resultado = numero1 * numero2;
    console.log(`${numero1} * ${numero2} =`, resultado);
}

function division() {
    resultado = numero1 / numero2;
    console.log(`${numero1} / ${numero2} =`, resultado);
}

function raizCuadrada() {
    console.log(`Raíz cuadrada de ${numero2} =`, Math.sqrt(numero2));
}

function mostrarResultado() {
    suma();
    resta();
    multiplicacion();
    division();
    raizCuadrada();
}

mostrarResultado();