// Constructor Pattern

class Persona {
    constructor(nombre, apellidos, edad)  {
        this.nombre  = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

class Cliente extends Persona {
    constructor(nombre, apellidos, edad, email) {
        super(nombre, apellidos, edad);
        this.email  = email;
    }
}

const cliente = new Cliente('Emma', 'Ciambrino Baz', 38, 'emma.ciambrino@gmail.com');

console.log(cliente);