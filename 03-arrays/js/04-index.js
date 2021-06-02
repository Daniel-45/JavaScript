// Añadir elementos a un array
const frutas1 = ['Manzana', 'Fresa', 'Naranja'];
const frutas2 = ['Platano', 'Pera', 'Melocotón'];

console.log('Añadir elementos a un array');
console.log('Array:', frutas1);

console.log('Añadir elementos al inicio');
frutas1.unshift('Platano');
console.log(frutas1);

console.log('Añadir elementos al final');
frutas1.push('Pera');
console.log(frutas1);

// Eliminar elementos de un array
console.log('Eliminar último elemento de un array');
frutas1.pop();
console.log(frutas1);

console.log('Eliminar primer elemento de un array');
frutas1.shift();
console.log(frutas1);


// Unión de dos arrays
// const frutas = frutas1.concat(frutas2);
const frutas = [ ...frutas1, ...frutas2];

console.log('Unión de dos arrays');
console.log('Array 1:', frutas1);
console.log('Array 2:', frutas2);
console.log('Unión:', frutas);

// Ordenar elementos de un array
frutas.sort();

console.log('Ordenar elementos de un array');
console.log(frutas);

console.log('Invertir un array');
frutas.reverse();
console.log(frutas);

const numeros = [90, 20, 10, 40, 30, 50, 80, 60, 70];
console.log('Array:', numeros);

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

// Eliminar elementos o rango de elementos específicos
console.log('Eliminar elementos o rango de elementos específicos')
numeros.splice(2,4);
console.log(numeros);
