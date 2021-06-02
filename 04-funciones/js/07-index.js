// Máximo valor entre dos números
function valorMaximoDeDosNumeros(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log('Función valor máximo de dos números');
console.log(valorMaximoDeDosNumeros(10, 8));

// Calcular la suma de los elementos de un array de números
const numeros = [45, 10, 46, 20, 67, 25];

function sumaArray(array) {
    if (array.length === 0) {
        return 0;
    }
    let suma = array.reduce(function(a,b) {
        return a + b;
    });
    return suma;
}

console.log('Función para sumar los elementos de un array');
console.log(`Array: ${numeros}`);
console.log(`Suma: ${sumaArray(numeros)}`);

// Ordenar de menor a mayor el array de números
numeros.sort(function(x, z) {
    return x - z;
});

console.log(`Números ordenados de menor a mayor: ${numeros}`);

// Ordenar de mayor a menor el array de números
numeros.sort(function(x, z) {
    return z - x;
});

console.log(`Números ordenados de mayor a menor: ${numeros}`);

// Unir dos arrays
let array1 = [1, 3, 5, 7, 9];
let array2 = [0, 2, 4, 6, 8];

function unionArrays(array1, array2) {
    let union = array1.concat(array2);
    return union;
}

console.log('Función para unir dos arrays');
console.log(`Array 1: ${array1}`);
console.log(`Array 2: ${array2}`);
console.log(`Union de los dos arrays: ${unionArrays(array1, array2)}`);

// Encontrar la palabra más larga de un array
let palabras = [
    'Azul',
    'Negro',
    'Blanco',
    'Naranja',
    'Verde'
];

function encontrarPalabraMasLarga(palabras) {

    let palabraMasLarga = palabras[0];

    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length > palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

console.log('Función encontrar la palabra más larga en un array');
console.log(palabras);
console.log('La palabra más larga del array es: ' + encontrarPalabraMasLarga(palabras));

function encontrarPalabraMasCorta(palabras) {

    let palabraMasLarga = palabras[0];

    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i].length < palabraMasLarga.length) {
            palabraMasLarga = palabras[i];
        }
    }

    return palabraMasLarga;
}

console.log('Función encontrar la palabra más corta en un array');
console.log(palabras);
console.log('La palabra más corta del array es: ' + encontrarPalabraMasCorta(palabras));

console.log('Array ordenado: ' + palabras.sort());
console.log('Array invertido: ' + palabras.reverse());

// Calcular el promedio de los elementos de un array
const arrayNumeros = [45, 12, 46, 14, 67, 25];

function promedioNumerosArray(array) {
    if (array.length === 0) {
        return 0;
    }
    let suma = array.reduce(function(a,b) {
        return a + b;
    });
    let promedio = suma/array.length;
    return promedio.toFixed(2);
}

console.log('Función calcular el promedio de los elementos de un array');
console.log(`Array: ${arrayNumeros}`);
console.log('Promedio: ' + promedioNumerosArray(arrayNumeros));