// Saludo con el nombre introducido por el usuario
function saludo() {
    let mensaje = 'Hola,';
    let nombre = prompt('Introduce tú nombre:');
    console.log(`${mensaje} ${nombre}`);
};

saludo();