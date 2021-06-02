

function validarUsuario() {
    moment.locale("es");
    let usuario, password, fecha;
    fecha = new Date();
    fecha = moment().format('LLLL');
    usuario = prompt('Introduce nombre de usuario');
    password = prompt('Introduce password');

    if (usuario === 'daniel' && password === 'usertar') {
        console.log(`Acceso permitido ${fecha}`);
        console.log(`Hola, ${usuario}`);
    } else {
        console.warn(`Acceso denegado ${fecha}`);
        console.warn('Usuario y/o password incorrectos');
    }
}

validarUsuario();