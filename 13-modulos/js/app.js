
import  calculadora,{ titulo, persona, mostrarDatos, Persona } from './persona.js';
import { Desarrollador } from './desarrollador.js';

console.log(titulo);

console.log('Importar objetos');
console.log(persona);

console.log('Importar funciones');
console.log(mostrarDatos(persona.nombre, persona.apellidos, persona.email));

console.log('Importar clases');
const nuevaPersona = new Persona('Emma', 'Ciambrino Baz', 'emma.ciambrino@gmail.com');
console.log(nuevaPersona);
console.log(nuevaPersona.mostrarInformacion())

console.log('Importar clases herencia');
const desarrollador = new Desarrollador(
    'Daniel', 'Pompa Pareja', 'daniel.pompa@gmail.com',
    'Desarrollador Full Stack',
    ['Java', 'JavaScript'],
    ['Spring Framework', 'Angular']
);
console.log(desarrollador);
console.log(desarrollador.mostrarDatosDesarrollador());

console.log('Modificar el objeto');
desarrollador.setEmail('daniel.pompa@educa.madrid.org');
desarrollador.setProfesion('Desarrollador Full Stack Junior');
desarrollador.setLenguajes(['Java', 'JavaScript', 'Python']);
desarrollador.setFrameworks(['Spring Framework', 'Angular', 'Django', 'Bootstrap']);
console.log(desarrollador.mostrarDatosDesarrollador());

console.log('export default');
console.log(calculadora(19,4))