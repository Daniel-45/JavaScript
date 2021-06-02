const usuario = 'daniel';
const password = 'usertar';

function iniciar() {
    console.log('Comprobando usuario y contraseña, espere por favor...');

    setTimeout(() => {
        autenticacion();
    }, 2000);
}

function autenticacion() {
    if (usuario === 'daniel' && password === 'usertar') {
        exito('daniel');
    } else {
        error();
    }
}


function exito(usuario) {
    console.log(`Usuario autenticado: ${usuario}`);
}

function error() {
    console.log('Nombre de usuario y/o contraseña incorrecto');
}

iniciar();