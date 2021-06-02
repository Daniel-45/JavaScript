/* Hacer un programa que muestre todos los números
entre dos números introducidos por el usuario. */

let numero1, numero2;

do   {
    numero1 = parseInt(prompt("Introduce el primer número"));
    numero2 = parseInt(prompt("Introduce el segundo número"));
    if (numero1 > numero2) {
        alert('El primer número tiene que ser menor que el segundo número')
    }
} while (numero1 > numero2)

console.log(`Entre el ${numero1} y el ${numero2} están estos números:`);


for (let i = numero1 + 1; i < numero2; i++) {
    console.log(`Número: ${i}`);
}