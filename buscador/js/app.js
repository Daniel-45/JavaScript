'use strict'

// Variables
const marca = document.querySelector('#marca');
const anio = document.querySelector('#anio');
const precioMinimo = document.querySelector('#minimo');
const precioMaximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');
// Contenedor para los resultados
const resultado = document.querySelector('#resultado');
const anioMaximo = new Date().getFullYear();
const anioMinimo = anioMaximo - 10;
// Crear objeto para datos de búsqueda
const datosBusqueda = {
    marca: '',
    anio: '',
    precioMinimo: '',
    precioMaximo: '',
    puertas: '',
    transmision: '',
    color: ''
}

// Eventos
document.addEventListener('DOMContentLoaded', () => {
    // Muestra los coches al cargar la página
    mostrarCoches(coches);
    // Llena las opciones del select Año
    llenarSelect();
})

// Event Listener para los select de búsqueda
marca.addEventListener('change', e => {
    // console.log(e.target.value);
    datosBusqueda.marca = e.target.value;

    filtraCoches();
})

anio.addEventListener('change', e => {
    datosBusqueda.anio = parseInt(e.target.value);

    filtraCoches();
})

precioMinimo.addEventListener('change', e => {
    datosBusqueda.precioMinimo = e.target.value;

    filtraCoches();
})

precioMaximo.addEventListener('change', e => {
    datosBusqueda.precioMaximo = e.target.value;

    filtraCoches();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value);

    filtraCoches();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;

    filtraCoches();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;

    // console.log(datosBusqueda);

    filtraCoches();
})

// Funciones

// Muestra los coches disponibles
function mostrarCoches(coches) {
    // Elimina HTML previo
    limpiarHTML()

    coches.forEach(coche => {
        const cocheHTML = document.createElement('p');

        // Destructuring
        const { marca, modelo, anio, puertas, transmision, precio, color } = coche;

        cocheHTML.textContent = `
            ${marca} ${modelo} | ${anio} | Puertas: ${puertas} | Transmisión: ${transmision} | Precio: ${precio} | Color: ${color}
        `;

        // Insertar en el HTML
        resultado.appendChild(cocheHTML);
    })
}

// Limpiar HTML
function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Llena el select Año desde el 2020 al 2010
function llenarSelect() {
    for (let i = anioMaximo; i >= anioMinimo; i--) {
        // console.log(i);
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        anio.appendChild(opcion);
    }
}

// Filtrar coches en base a la búsqueda
function filtraCoches() {
    const resultado = coches.filter(filtraMarca).filter(filtraAnio).filter(filtraMinimo).filter(filtraMaximo).filter(filtraPuertas).filter(filtraTransmision).filter(filtraColor);
    // console.log(resultado);

    if (resultado.length) {
        mostrarCoches(resultado);
    } else {
        noResultado();
    }
}

function filtraMarca(coche) {
    // console.log(coche);
    const { marca } = datosBusqueda;
    if (marca) {
        return coche.marca === marca;
    }

    // Mantener referencia valores que no filtrados
    return coche;
}

function filtraAnio(coche) {
    // console.log(coche);
    const { anio } = datosBusqueda;
    // console.log(typeof(anio));
    // console.log(typeof(coche.anio));

    if (anio) {
        return coche.anio === anio;
    }

    return coche;
}

function filtraMinimo(coche) {
    const { precioMinimo } = datosBusqueda;
 
    if (precioMinimo) {
        return coche.precio >= precioMinimo;
    }

    return coche;
}

function filtraMaximo(coche) {
    const { precioMaximo } = datosBusqueda;
 
    if (precioMaximo) {
        return coche.precio <= precioMaximo;
    }

    return coche;
}

function filtraPuertas(coche) {
    const { puertas } = datosBusqueda;
 
    if (puertas) {
        return coche.puertas === puertas;
    }

    return coche;
}

function filtraTransmision(coche) {
    const { transmision } = datosBusqueda;
 
    if (transmision) {
        return coche.transmision === transmision;
    }

    return coche;
}

function filtraColor(coche) {
    const { color } = datosBusqueda;
 
    if (color) {
        return coche.color === color;
    }

    return coche;
}

function noResultado() {
    limpiarHTML();

    const alerta = document.createElement('div');
    alerta.classList.add('alerta', 'error');
    alerta.textContent = 'No hay resultados con esos criterios de búsqueda';
    resultado.appendChild(alerta);
}