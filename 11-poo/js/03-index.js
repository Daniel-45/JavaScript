import { Persona } from './02-index.js';

class Desarrollador extends Persona {
    constructor(nombre, apellidos, edad, email, profesion, lenguajes, frameworks) {
        super(nombre, apellidos, edad, email);
        this.profesion = profesion;
        this.lenguajes = lenguajes;
        this.frameworks = frameworks;
    }

    getProfesion() {
        return this.profesion;
    }

    setProfesion(profesion) {
        this.profesion = profesion;
    }

    getLenguajes() {
        return this.lenguajes;
    }

    setLenguajes(lenguajes) {
        this.lenguajes = lenguajes;
    }

    getFrameworks() {
        return this.frameworks;
    }

    setFrameworks(frameworks) {
        this.frameworks = frameworks;
    }

    mostrarDatos() {
        return `${super.mostrarDatos()}\nProfesión: ${this.profesion}\nLenguajes: ${this.lenguajes}\nFrameworks: ${this.frameworks}`;
    }
}

const desarrolador = new Desarrollador(
    'Oscar',
    'Pompa Pareja',
    41,
    'oscar.pompa@gmail.com',
    'Desarrollador Full Stack',
    ['Java', 'JavaScript'],
    ['Spring Framework, Angular']
);

console.log('Herencia');
console.log(desarrolador.mostrarDatos());

console.log('Modificar objeto');
desarrolador.setEdad(42);
desarrolador.setProfesion('Desarrollador Full Stack Junior');
desarrolador.setLenguajes(['Java', 'JavaScript', 'Python']);
desarrolador.setFrameworks(['Spring Framework', 'Angular', 'Django']);
console.log(desarrolador.mostrarDatos());
