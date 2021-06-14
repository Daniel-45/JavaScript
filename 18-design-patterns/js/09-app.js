// Mediator

function Propietario(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Propietario.prototype = {
    oferta: (articulo, precio)  => {
        console.log(`Artículo: ${articulo}. Se inicia la subasta con un precio de ${precio}€`);
    },
    vendido: usuario => {
        console.log(`Vendido a ${usuario}`);
    }
}

function Usuario(nombre) {
    this.nombre = nombre;
    this.sala = null;
}

Usuario.prototype = {
    oferta: (cantidad, usuario) =>  {
        console.log(`Usuario: ${usuario} | Cantidad: ${cantidad}€`);
    }
}

// Mediator - Comunica propietario y usuarios
function Subasta() {
    let usuarios = {};

    return {
        registrar: usuario =>  {
            usuarios[usuario.nombre] = usuario;
            usuario.sala = this;
        }
    }
}

// Objetos
const emma = new Usuario('Emma');
const oscar = new Usuario('Oscar');
const propietario = new Propietario('Propietario');
const subasta = new Subasta();

subasta.registrar(emma); 
subasta.registrar(oscar); 
subasta.registrar(propietario); 

// Subasta
propietario.oferta('Teléfono móvil', 100);

emma.oferta(110, 'Emma');
oscar.oferta(120, 'Oscar');
emma.oferta(130, 'Emma');
oscar.oferta(140, 'Oscar');

propietario.vendido('Oscar');
