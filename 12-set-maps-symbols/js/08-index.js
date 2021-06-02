function *crearGenerador() {
    // Valores que se pueden iterar
    yield 1;
    yield 'Emma';
    yield 9*9;
    yield true;
}

const iterador = crearGenerador();

console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador.next());
console.log(iterador);

// Carrito de compra
function *generadorCarrito(carrito) {
    for(let i = 0; i < carrito.length; i++) {
        yield carrito[i];
    }
}

const carrito = ['PC Workstation', 'Teclado', 'Ratón', 'Monitor'];

const it = generadorCarrito(carrito);

console.log('Carrito compra');

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

