// Los Maps son listas con clave/valor
// Pueden almacenar cualquier tipo de dato como clave o valor
const cliente = new Map();

cliente.set('nombre', 'Emma');
cliente.set('apellidos', 'Ciambrino Baz');
cliente.set('email', 'emma.ciambrino@gmail.com');
cliente.set('saldo', 40000);
cliente.set('pedido', ['PC Escritorio', 'Monitor', 'Teclado', 'Ratón'])

console.log('Cliente');
cliente.forEach(item => console.log(`${item}`));

// Obtener número de elementos
console.log(`Número de elementos: ${cliente.size}`);

// Comprobar si un valor existe
console.log('Comprobar si existe un valor');
console.log('Existe el valor "pedido":', cliente.has('pedido'));

// Obtener un valor
console.log('Obtener un valor');
console.log(`Nombre: ${cliente.get('nombre')}`);

// Eliminar un elemento
// cliente.delete('saldo');

// Eliminar todos los elementos
// cliente.clear();

// Añadir valores en el constructor
console.log('Añadir valores en el constructor');
const alumno = new Map(
    [
        ['nombre', 'Oscar'], 
        ['asignaturas', 'Acceso a datos, Desarrollo de interfaces'], 
        ['nota', 6]
    ]
);

console.log('Alumno');

alumno.forEach(item => console.log(`${item}`));

console.log('Añadir valores');
alumno.set('email', 'oscar.pompa@educa.madrid.org');
alumno.forEach(item => console.log(`${item}`));
