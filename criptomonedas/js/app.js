const selectMoneda = document.querySelector('#moneda')
const selectCriptomonedas = document.querySelector('#criptomonedas');
const formulario  = document.querySelector('#formulario');
const resultado  = document.querySelector('#resultado');

const objetoBusqueda = {
    moneda: '',
    criptomoneda: ''
}

// Crear Promesa
const obtenerCriptomonedas = criptomonedas => new Promise(resolve => {
    resolve(criptomonedas);

})

document.addEventListener('DOMContentLoaded', () => {
    consultaCriptomonedas();

    formulario.addEventListener('submit', enviarFormulario);

    selectMoneda.addEventListener('change', obtenerValor);
    selectCriptomonedas.addEventListener('change', obtenerValor);
});

function consultaCriptomonedas() {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

    fetch(url)
        .then(repuesta => repuesta.json())
        .then(resultado => obtenerCriptomonedas(resultado.Data))
        .then(criptomonedas => seleccionarCriptomonedas(criptomonedas))
}

function seleccionarCriptomonedas(criptomonedas) {
    criptomonedas.forEach(c => {
        const { Name, FullName } = c.CoinInfo;

        const opcion = document.createElement('option');
        opcion.value = Name;
        opcion.textContent = FullName;
        selectCriptomonedas.appendChild(opcion);
    });
}

function obtenerValor(e) {
    objetoBusqueda[e.target.name] = e.target.value;
}

function enviarFormulario(e) {
    e.preventDefault();

    // Validar
    const { moneda, criptomoneda } = objetoBusqueda;

    if (moneda === '' || criptomoneda === '') {
        mostrarAlerta('Los campos son obligatorios');
        return;
    }

    // https://min-api.cryptocompare.com/documentation
    consultarAPI()
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.error');
    
    if (!existeAlerta) {
        const divAlerta = document.createElement('div');

        divAlerta.classList.add('error');
        divAlerta.textContent = mensaje;
    
        formulario.appendChild(divAlerta);
    
        setTimeout(() => {
            divAlerta.remove();
        }, 3000);
    }

}

function consultarAPI() {
    const { moneda, criptomoneda } = objetoBusqueda;

    const urlBase = 'https://min-api.cryptocompare.com/data/pricemultifull?fsyms'

    const url = `${urlBase}=${criptomoneda}&tsyms=${moneda}`;

    mostrarSpinner();
    
    setTimeout(() => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(cotizacion => mostrarCotizacionHTML(cotizacion.DISPLAY[criptomoneda][moneda]));
    }, 2000);
}

function mostrarCotizacionHTML(cotizacion) {
    limpiarHTML();

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE } = cotizacion;

    const precio = document.createElement('p');
    precio.classList.add('precio');
    precio.innerHTML = `Precio: <span>${PRICE}</span>`;
    
    const ultimaActualizacion = document.createElement('p');
    ultimaActualizacion.innerHTML = `Variación últimas 24H: <span>${LASTUPDATE}</span>`;

    const ultimas24Horas = document.createElement('p');
    ultimas24Horas.innerHTML = `Variación últimas 24H: <span>${CHANGEPCT24HOUR}%</span>`;

    const precioMaximo = document.createElement('p');
    precioMaximo.innerHTML = `Precio más alto del día: <span>${HIGHDAY}</span>`;

    const precioMinimo = document.createElement('p');
    precioMinimo.innerHTML = `Precio más bajo del día: <span>${LOWDAY}</span>`;


    resultado.appendChild(precio);
    resultado.appendChild(ultimaActualizacion);
    resultado.appendChild(ultimas24Horas);
    resultado.appendChild(precioMaximo);
    resultado.appendChild(precioMinimo);
}

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild)
    }
}

function mostrarSpinner() {
    limpiarHTML();

    // https://tobiasahlin.com/spinkit/
    const spinner = document.createElement('div');
    spinner.classList.add('sk-circle');

    spinner.innerHTML = `
        <div class="sk-circle1 sk-child"></div>
        <div class="sk-circle2 sk-child"></div>
        <div class="sk-circle3 sk-child"></div>
        <div class="sk-circle4 sk-child"></div>
        <div class="sk-circle5 sk-child"></div>
        <div class="sk-circle6 sk-child"></div>
        <div class="sk-circle7 sk-child"></div>
        <div class="sk-circle8 sk-child"></div>
        <div class="sk-circle9 sk-child"></div>
        <div class="sk-circle10 sk-child"></div>
        <div class="sk-circle11 sk-child"></div>
        <div class="sk-circle12 sk-child"></div>
    `;

    resultado.appendChild(spinner);
}