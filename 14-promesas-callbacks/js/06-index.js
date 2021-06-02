const clientes = [];

const nuevoCliente = cliente => new Promise((resolve, reject) => {
    setTimeout(() => {
        clientes.push(cliente);
        resolve(`Cliente ${cliente} añadido`);
    }, 2000);
});

nuevoCliente('Emma')
    .then(resultado => {
        console.log(resultado);
        console.log(clientes);

        return nuevoCliente('Daniel')
    })
    .then(resultado => {
        console.log(resultado);
        console.log(clientes);

        return nuevoCliente('Oscar')
    })
    .then(resultado => {
        console.log(resultado);
        console.log(clientes);
    })
    .catch(error => console.log(error));