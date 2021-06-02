// Symbol permite crear una propiedad única, no hay dos symbol iguales
const symbol1 = Symbol('PC Workstation');
const symbol2 = Symbol('PC Workstation');

if (symbol1 === symbol2) {
    console.log('Los symbols son iguales');
} else {
    console.log('Los symbols son diferentes');
}

const nombre = Symbol();
const email = Symbol();

const cliente = {};

// Añadir nombre y email
cliente[nombre] = 'Emma';
cliente[email] = 'emma.ciambrino@gmail.com';
cliente.tipo = 'Premium';
cliente.saldo = 6000;

console.log(cliente);