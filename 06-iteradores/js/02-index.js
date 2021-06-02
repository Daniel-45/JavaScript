// Mostrar todos los números divisores de un número.
let numero = parseInt(prompt("Introduce un número"));

console.log(`Los números divisores de ${numero} son:`);

for (let i = 1; i <= numero; i++) {
    if (numero % i == 0) {
        console.log(`Divisor: ${i}`);
    }
}