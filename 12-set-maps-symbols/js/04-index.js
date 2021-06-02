// WeakMaps
const producto = {
    id: 1,
    nombre: 'PC Workstation',
    precio: 1800
}

const weakmap = new WeakMap();

weakmap.set(producto);

console.log(producto);

console.log(weakmap.has(producto));
