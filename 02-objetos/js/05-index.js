const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    email: 'daniel.pompa@gmail.com'
}

const direccion = {
    calle: 'Pizarro',
    numero: 24
}

const resultado = { ...persona, ...direccion };

console.log('Unión de objetos');
console.log(resultado);