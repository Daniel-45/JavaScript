const clientes = [];

function nuevoCliente(cliente, callback) {
    clientes.push(cliente);
    console.log(`Añadido cliente: ${cliente}`);
    callback();
}

function mostrarClientes() {
    console.log(clientes);
}

function iniciarCallbackHell() {
    setTimeout(() => {
        nuevoCliente('Emma', mostrarClientes);
        setTimeout(() => {
            nuevoCliente('Daniel', mostrarClientes);
            setTimeout(() => {
                nuevoCliente('Oscar', mostrarClientes);
            }, 2000);
        }, 2000);
    }, 2000);
}

iniciarCallbackHell();