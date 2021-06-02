const listado = ['Emma', 'Daniel', 'Oscar', 'Hugo', 'Roberto', 'Carmen'];

const clientes = new Promise((resolve, reject) => {
    const mostrar = true;

    if (mostrar) {
        resolve(listado);
    } else {
        reject('No se ha podido mostrar el listado de clientes');
    }
});

clientes
    .then(resultado => mostrarClientes(resultado))
    .catch(error => console.log(error))


function mostrarClientes() {

    console.log('Listado de clientes');

    listado.forEach(cliente => {
        console.log(cliente);
    });
}

console.log(clientes)
