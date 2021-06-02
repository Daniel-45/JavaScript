alert('Introduce dos números para mostrar los números que hay entre los dos');
let numero1 = parseInt(prompt("Introduce el primer número"));
let numero2 = parseInt(prompt("Introduce el segundo número"));

console.log(`Todos los números entre ${numero1} y ${numero2}`);

for (let i = numero1 + 1; i < numero2; i++) {
    console.log("Número: " + i);
}

console.log(`Números pares entre ${numero1} y ${numero2}`);

for (let i = numero1 + 1; i < numero2; i++) {
    if (i % 2 == 0) {
        console.log(`El número ${i} es par`);
    }
}

console.log(`Números impares entre ${numero1} y ${numero2}`);

for (let i = numero1 + 1; i < numero2; i++) {
    if (i % 2 != 0) {
        console.log(`El número ${i} es impar`);
    }
}
