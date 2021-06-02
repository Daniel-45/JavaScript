// Un set permite crear una lista de valores sin duplicados
// Puede almacenar cualquier tipo de dato
const pc = new Set();

// Añadir elementos
pc.add('Placa base: MSI Z390-A PRO')
pc.add('Procesador: AMD Ryzen 9 3900XT');
pc.add('Disco duro: Crucial MX500 SSD 500GB SATA');
pc.add('Disco duro: Seagate BarraCuda 3.5" 2TB SATA 3');
pc.add('Tarjeta gráfica: MSI Radeon RX Vega 64 Air Boost 8GB HBM2');
pc.add('Memoria RAM: Kingston HyperX Fury Black DDR4 3600MHz PC4-28800 32GB CL15');
pc.add('Grabadora DVD: Asus DRW-24D5MT');
pc.add('Torre: Nox Hummer ZS Negra');
pc.add('Ventilador CPU: Corsair A500');
pc.add('Fuente de alimentación: Corsair RM750i 750W 80 Plus Gold Modular');
pc.add('Teclado: Corsair K95 RGB Platinum');
pc.add('Ratón: Corsair Glaive Pro 18000 DPI');
pc.add('Monitor: Lenovo L27q-30 27" QuadHD FreeSync');

// console.log(pc);

console.log('PC Desktop')

// Iterar
pc.forEach(item => console.log(item));

// Obtener número de elementos
console.log(`Número de elementos del set: ${pc.size}`);

// Comprobar si un valor existe
console.log('Comprobar si un valor existe en el set');
console.log('Procesador: AMD Ryzen 9 3900XT');
console.log(pc.has('Procesador: AMD Ryzen 9 3900XT'));

// Eliminar un elemento
pc.delete('Monitor: Lenovo L27q-30 27" QuadHD FreeSync');

// Eliminar todos los elementos
// pc.clear();

// Eliminar duplicados de un array
const numeros = [10, 20, 30, 40, 50, 60, 10, 70, 80, 10, 90];
console.log('Eliminar duplicados de un array con un set');
console.log(`Números: ${numeros}`);

const noDuplicados = new Set(numeros);
console.log(noDuplicados);


