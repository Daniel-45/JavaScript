const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
const diasFinDeSemana = ['Sábado', 'Domingo'];

console.log(diasSemana);
console.log(diasFinDeSemana);

const semanaCompleta = diasSemana.concat(diasFinDeSemana);

console.log(semanaCompleta);

const meses1 = ['Enero', 'Febrero', 'Marzo', 'Abril'];
const meses2 = ['Mayo', 'Junio', 'Julio', 'Agosto'];
const meses3 = ['Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

console.log(meses1);
console.log(meses2);
console.log(meses3);

const resultado1 = meses1.concat(meses2, meses3);
console.log(resultado1);

const resultado2 = [...diasSemana, ...diasFinDeSemana];
console.log(resultado2);