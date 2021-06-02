export class Persona {
    constructor(nombre, apellidos, edad, email) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.email = email;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre) {
        this.nombre = nombre;
    }

    getApellidos() {
        return  this.apellidos;
    }

    setApellidos(apellidos) {
        this.apellidos = apellidos;
    }

    getEdad() {
        return this.edad;
    }

    setEdad(edad) {
        this.edad = edad;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    mostrarDatos() {
        return `Nombre: ${this.nombre} ${this.apellidos}\nEdad: ${this.edad}\nEmail: ${this.email}`;
    }
}

const persona1 = new Persona(
    'Daniel',
    'Pompa pareja',
    46,
    'daniel.pompa@gmail.com'
);

const persona2 = new Persona(
    'Emma',
    'Ciambrino Baz',
    38,
    'emma.ciambrino@gmail.com'
);

console.log('Clases');

console.log(persona1);
console.log(persona2);

console.log('Mostrar datos');
console.log(persona1.mostrarDatos());
console.log(persona2.mostrarDatos());


