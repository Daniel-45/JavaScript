const numeros = [10, 20, 30, 40, 50];

console.log('Desestructuración de arrays');
console.log(numeros);
const [uno, dos, tres, ...resto] = numeros;

console.log(`1: ${uno}`);
console.log(`2: ${dos}`);
console.log(`3: ${tres}`);
console.log(`Resto de elementos: ${resto}`);

const [, , , , cinco] = numeros;
console.log(`5: ${cinco}`);

