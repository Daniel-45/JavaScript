function crearIterador(carrito) {
    let i = 0;
    return {
        siguiente: () => {
            const fin = (i === carrito.length);
            const valor = !fin ? carrito[i++] : undefined;

            return {
                fin, valor
            }
        }
    }
}

const carrito = ['PC Workstation', 'Teclado', 'Ratón', 'Monitor'];

const mostrarCarrito = crearIterador(carrito);

console.log(mostrarCarrito.siguiente());
console.log(mostrarCarrito.siguiente());
console.log(mostrarCarrito.siguiente());
console.log(mostrarCarrito.siguiente());
console.log(mostrarCarrito.siguiente());

