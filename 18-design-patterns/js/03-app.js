// Singleton

let instancia = null;

class Persona {
    constructor(nombre, apellidos, edad, email) {
        if (!instancia) {
            this.nombre = nombre;
            this.apellidos = apellidos;
            this.edad = edad;
            this.email = email;
            instancia = this;
        } else {
            return instancia;
        }
    }
}

const persona1 = new Persona('Emma', 'Ciambrino Baz', 38, 'emma.ciambrino@gmail.com');

console.log(persona1);

const persona2 = new Persona('Carmen', 'Ciambrino Baz', 36, 'carmen.ciambrino@gmail.com');

console.log(persona2);