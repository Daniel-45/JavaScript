// Factory

class InputHTML {
    constructor(type, nombre) {
        this.type = type;
        this.nombre = nombre;
    }

    crearInput() {
        return `<input type="${this.type}" name="${this.nombre} id="${this.nombre}">`;
    }
}

class HTMLFactory {
    crearElemento(tipo, nombre) {
        switch (tipo) {
            case 'text':
                return new InputHTML('text', nombre);
            case 'tel':
                return new InputHTML('tel', nombre);
            case 'email':
                return new InputHTML('email', nombre);
            default:
                break;
        }
    }
}

const elemento1 = new HTMLFactory();
const elemento2 = new HTMLFactory();
const elemento3 = new HTMLFactory();

const inputText = elemento1.crearElemento('text', 'nombre-cliente');
const inputTel = elemento2.crearElemento('tel', 'telefono-cliente');
const inputEmail = elemento3.crearElemento('email', 'email-cliente');

console.log(inputText.crearInput());
console.log(inputTel.crearInput());
console.log(inputEmail.crearInput());