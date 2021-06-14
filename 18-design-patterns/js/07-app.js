// Mixin Pattern

class Persona {
    constructor(nombre, apellidos, email)  {
        this.nombre  = nombre;
        this.apellidos = apellidos;
        this.email = email;
    }
}

class Cliente {
    constructor(nombre, apellidos, email)  {
        this.nombre  = nombre;
        this.apellidos = apellidos;
        this.email = email;
    }
}

const funciones = {
    mostrarDatos() {
        console.log(`Nombre: ${this.nombre} ${this.apellidos} E-Mail: ${this.email}`);
    },
    mostrarNombre() {
        console.log(`Nombre: ${this.nombre}`);
    },
    mostrarApellidos() {
        console.log(`Apellidos: ${this.apellidos}`);
    },
    mostrarEmail() {
        console.log(`E-Mail: ${this.email}`);
    }
}

// Añadir funcionesPersona a la clase Persona
Object.assign(Persona.prototype, funciones);
Object.assign(Cliente.prototype, funciones);

const persona = new Persona('Emma', 'Ciambrino Baz', 'emma.ciambrino@gmail.com');

console.log('Clase Persona');
console.log(persona);
persona.mostrarNombre();
persona.mostrarApellidos();
persona.mostrarEmail();
persona.mostrarDatos();

const cliente = new Persona('Oscar', 'Pompa Pareja', 'oscar.pompa@gmail.com');

console.log('Clase Cliente');
console.log(cliente);
cliente.mostrarNombre();
cliente.mostrarApellidos();
cliente.mostrarEmail();
cliente.mostrarDatos();