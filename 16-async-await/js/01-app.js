const clientes = [
    { nombre: 'Emma', email: 'emma.ciambrino@gmail.com' },
    { nombre: 'Hugo', email: 'hugo.ciambrino@gmail.com' },
    { nombre: 'Carmen', email: 'carmen.ciambrino@gmail.com' },
    { nombre: 'Oscar', email: 'oscar.pompa@gmail.com' },
    { nombre: 'Roberto', email: 'roberto.pompa@gmail.com' },
];

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;

        setTimeout(() => {
            if (!error) {
                resolve(clientes);
            } else {
                reject('No se ha podido descargar el listado de clientes');
            }
        }, 3000);
    });
}

async function listadoClientes() {
    try {
        const respuesta = await descargarClientes();
        console.log(respuesta);
    } catch (error) {
        console.log(error);
    }
}

listadoClientes();