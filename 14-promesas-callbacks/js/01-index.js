const clientes = [
    'Daniel Pompa Pareja',
    'Emma Ciambrino Baz'
];

function nuevoCliente(cliente, callback) {
    setTimeout(() => {
        clientes.push(cliente);
        console.log(`Añadido cliente: ${cliente}`);
        callback();
    }, 2000);
}

function mostrarClientes() {
    setTimeout(() => {
        clientes.forEach(cliente => {
            console.log(cliente);
        });
    }, 3000);
}

console.log(`Clientes: ${clientes}`);

nuevoCliente('Oscar Pompa Pareja', mostrarClientes);
