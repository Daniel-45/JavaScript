class Persona {

    // Propiedades privadas
    #nombre;
    #apellidos;
    #edad;
    #email;

    constructor(nombre, apellidos, edad, email) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#edad = edad;
        this.#email = email;
    }

    getNombre() {
        return this.#nombre;
    }

    setNombre(nombre) {
        this.#nombre = nombre;
    }

    getApellidos() {
        return this.#apellidos;
    }

    setApellidos(apellidos) {
        this.#apellidos = apellidos;
    }

    getEdad() {
        return this.#edad;
    }

    setEdad(edad) {
        this.#edad = edad;
    }

    getEmail() {
        return this.#email;
    }

    setEmail(email) {
        this.#email = email;
    }

    mostrarDatos() {
        return `Nombre: ${this.#nombre} ${this.#apellidos} | Edad: ${this.#edad} | Email: ${this.#email}`;
    }
}


const persona1 = new Persona('Daniel', 'Pompa Pareja', 46, 'daniel.pompa@gmail.com');

const persona2 = new Persona('Emma', 'Ciambrino Baz', 38, 'emma.ciambrino@gmail.com');

console.log('Personas');

console.log(`${persona1.mostrarDatos()}`);
console.log(`${persona2.mostrarDatos()}`);

console.log('Modificar datos - Setters');

persona1.setNombre('Oscar');
persona1.setEdad(40);
persona1.setEmail('oscar.pompa@gmail.com');

console.log(`${persona1.mostrarDatos()}`);

// Herencia
console.log('Herencia');

class Programador extends Persona {

    #profesion;

    constructor(nombre, apellidos, edad, email, profesion) {
        super(nombre, apellidos, edad, email);
        this.#profesion = profesion;
    }

    getProfesion() {
        return this.#profesion;
    }

    setProfesion(profesion) {
        this.#profesion = profesion;
    }

    mostrarDatos() {
        return `Nombre: ${super.getNombre()} ${super.getApellidos()} | Edad: ${super.getEdad()} | Email: ${super.getEmail()} | Profesión: ${this.#profesion}`;
    }
}

const programador = new Programador(
    'Razvan',
    'Illies',
    35,
    'razvan.illies@gmail.com',
    'Desarrollador Full Stack'
)

console.log(`${programador.mostrarDatos()}`);

