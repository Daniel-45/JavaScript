const diasSemana = [
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
    'Domingo'
];

console.table(diasSemana);

// Tamaño del array
console.log('Tamaño del array');
console.log('Días de la semana:', diasSemana.length);

// Iterar un array
console.log('Iterar un array con for');
for (let i = 0; i < diasSemana.length; i++) {
    console.log(diasSemana[i]);
}

console.log('Iterar un array con forEach');
diasSemana.forEach(dia => console.log(dia));
