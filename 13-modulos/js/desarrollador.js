import { Persona } from './persona.js';

export class Desarrollador extends Persona {
    constructor(nombre, apellidos, email, profesion, lenguajes, frameworks) {
        super(nombre, apellidos, email);
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

    mostrarDatosDesarrollador() {
        return `${super.mostrarInformacion()}\nProfesión: ${this.profesion}\nLenguajes ${this.lenguajes}\nFrameworks: ${this.frameworks}`;
    }
}