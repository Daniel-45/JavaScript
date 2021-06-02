let total = 0;

function agregarCarrito(precio) {
    return total += precio;
}

function calcularIVA(total) {
    return total * 1.21;
}

total = agregarCarrito(50);
total = agregarCarrito(100);
total = agregarCarrito(20);
total = agregarCarrito(40);

console.log(`Suma total de los artículos del carrito: ${total}€`);

const totalPagar = calcularIVA(total);

console.log(`Total a pagar con IVA: ${totalPagar}€`);
