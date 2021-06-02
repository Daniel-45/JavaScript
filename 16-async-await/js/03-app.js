const clientes = [
    { nombre: 'Emma', email: 'emma.ciambrino@gmail.com' },
    { nombre: 'Hugo', email: 'hugo.ciambrino@gmail.com' },
    { nombre: 'Carmen', email: 'carmen.ciambrino@gmail.com' },
    { nombre: 'Oscar', email: 'oscar.pompa@gmail.com' },
    { nombre: 'Roberto', email: 'roberto.pompa@gmail.com' },
];

const pedidos = [
    { producto: 'PC WorkStation', precio: 2000 },
    { producto: 'PC Basic', precio: 800 },
    { producto: 'PC Gamming', precio: 1600 }
];

function descargarClientes() {
    return new Promise((resolve, reject) => {
        const error = false;
        console.log('Descargando clientes...');
        setTimeout(() => {
            if (!error) {
                resolve(clientes);
            } else {
                reject('No se ha podido descargar el listado de clientes');
            }
        }, 4000);
    });
}

function descargarPedidos() {
    return new Promise((resolve, reject) => {
        const error = false;
        console.log('Descargando pedidos...');
        setTimeout(() => {
            if (!error) {
                resolve(pedidos);
            } else {
                reject('No se ha podido descargar el listado de pedidos');
            }
        }, 3000);
    });
}

const app = async ()  => {
    try {
        const respuesta = await Promise.all([
            descargarClientes(),
            descargarPedidos()
        ]);

        console.log(respuesta[0]);
        console.log(respuesta[1]);
    } catch (error) {
        console.log(error);
    }
}

app();