// Exportar variable
export const titulo = 'Módulos en JavaScript';

// Exportar un objeto
export const persona = {
    nombre: 'Oscar',
    apellidos: 'Pompa Pareja',
    email: 'oscar.pompa@gmail.com'
}

// Exportar una función
export function mostrarDatos(nombre, apellidos, email) {
    return `Nombre: ${nombre}\nApellidos: ${apellidos}\nEmail: ${email}`;
}


// Exportar una clase
export class Persona {
    constructor(nombre, apellidos, email) {
        this.nombre = nombre;
        this.apellidos = apellidos;
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

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre}\nApellidos: ${this.apellidos}\nEmail: ${this.email}`;
    }

}

export default function calculadora(numero1, numero2) {
    const suma = numero1 + numero2;
    const resta = numero1 - numero2;
    const multiplicacion = numero1 * numero2;
    const division = numero1 / numero2;

    return `Suma: ${suma}\nResta: ${resta}\nMultiplicación: ${multiplicacion}\nDivisión: ${division}`;
}
