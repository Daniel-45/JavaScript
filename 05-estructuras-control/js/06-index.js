'use strict'

/* Comprobar si un número introducido por el usuario es par o impar:
1. Pedir el número al usuario
2. Si el número introducido no es válido volver a pedir */

let numero = parseInt(prompt("Introduce número"));
let resultado = document.getElementById('resultado');

while (isNaN(numero)) {
    numero = parseInt(prompt("Introduce valor válido. Tiene que ser un número, no texto"));
}

if (numero % 2 == 0) {
    console.log(`El número ${numero} es par`);
} else {
    console.log(`El número ${numero} es impar`);
}