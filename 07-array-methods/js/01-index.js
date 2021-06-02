const numeros = [10, 20, 30, 40, 50];

console.table(numeros);

// forEach
numeros.forEach(numero => {
    if (numero === 20) {
        console.log('El número 20 está en el array con forEach');
    }
});

// includes
const resultadoNumeros = numeros.includes(20);

console.log(resultadoNumeros);

if (resultadoNumeros) {
    console.log('El número 20 está en el array con includes');
}

