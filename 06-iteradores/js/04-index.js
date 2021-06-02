// Tabla de multiplicar de un número introducido por el usuario.

let numero = parseInt(prompt("Introduce número y te diré su tabla de multiplicar"));

console.log(`Tabla del ${numero}`);
for (let i = 1; i <= 10; i++) {
    console.log(`${i} x ${numero} = ${i * numero}\n`);
}

console.log('Tablas de multiplicar')

for (let i = 1; i <= 10; i++) {
    console.log(`Tabla del ${i}`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${j} x ${i} = ${(j * i)}\n`);
    }
}
