// Class Pattern

class Persona {
    constructor(nombre, apellidos, edad)  {
        this.nombre  = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
    }
}

const persona = new Persona('Emma', 'Ciambrino Baz', 38);

console.log(persona);