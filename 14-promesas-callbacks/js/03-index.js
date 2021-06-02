// Existen tres valores posibles
// fullfiled - Promise se ha cumplido
// rejected - Promise no se ha cumplido
// pending - No se ha cumplido y tampoco se ha rechazado

const login = new Promise((resolve, reject) => {
    const usuario = 'daniel';
    const password = 'usertar';

    if (usuario === 'daniel' && password === 'usertar') {
        resolve('Acceso permitido');
    } else {
        reject('Usuario y/o contraseñe incorrectos');
    }
});

login
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))

console.log(login);