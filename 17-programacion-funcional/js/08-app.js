// Closures
// Permiten acceder al ámbito de una función exterior desde una función interior

const obtenerCliente = () => {
    const nombreCliente = 'Emma Ciambrino Baz';

    function mostrarNombre() {
        console.log(nombreCliente);
    }

    return mostrarNombre;
}

const cliente = obtenerCliente();

cliente();