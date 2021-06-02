// Existen tres valores posibles
// fullfiled - Promise se ha cumplido
// rejected - Promise no se ha cumplido
// pending - No se ha cumplido y tampoco se ha rechazado

const descuento = new Promise((resolve, reject) => {
    const aplicar = true;

    if (aplicar) {
        resolve('Descuento aplicado');
    } else {
        reject('No se ha podido aplicar el descuento');
    }
});

descuento
    .then(resultado => mostrarResultado(resultado))
    .catch(error => console.log(error));

function mostrarResultado(resultado) {
    console.log(resultado);
}

console.log(descuento);