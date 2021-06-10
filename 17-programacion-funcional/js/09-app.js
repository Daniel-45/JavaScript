// Partials y Currying

const suma = (a,b,c,d,e) => a + b + c + d + e;

const parcial = a => (b,c) => (d,e) => suma(a,b,c,d,e);

const resultado = parcial(4)(19,21)(41,46);

console.log(resultado);