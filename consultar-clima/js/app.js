const container = document.querySelector('.container');
const resultado = document.querySelector('#resultado');
const formulario = document.querySelector('#formulario');

window.addEventListener('load', () => {
    formulario.addEventListener('submit', obtenerClima);
});

function obtenerClima(e) {
    e.preventDefault();

    // Validar
    const ciudad = document.querySelector('#ciudad').value;
    const pais = document.querySelector('#pais').value;

    if (ciudad === '' || pais === '') {
        mostrarError('Todos los campos son obligatorios');
        return;
    }

    // Consultar API
    consultarAPI(ciudad, pais);
}

function mostrarError(mensaje) {
    const alertaPrevia = document.querySelector('.bg-red-700');

    if (!alertaPrevia) {
        // Crear alerta
        const alerta = document.createElement('div');

        alerta.classList.add('bg-red-700', 'border-red-100', 'text-white', 'px-4', 'py-3', 'rounded', 'max-w-md', 'mx-auto', 'mt-6', 'text-center');

        alerta.innerHTML = `
            <p class="block">${mensaje}</p>
        `;

        container.appendChild(alerta);

        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function consultarAPI(ciudad, pais) {
    const appid = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Aquí tu Api Key de OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appid}`;

    spinner(); // Mostrar spinner de carga

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => {
            limpiarHTML(); // Limpiar HTML previo
            if (datos.cod === '404') {
                mostrarError(`No hay resultados para ${ciudad}`);
                return;
            }

            // Mostrar respuesta en el HTML
            mostrarClima(datos);
        })
        .catch(error => console.log(error))
}

function mostrarClima(datos) {
    const { name, main: { temp, temp_max, temp_min } } = datos;

    const centigrados = kelvinACentigrados(temp);
    const max = kelvinACentigrados(temp_max);
    const min = kelvinACentigrados(temp_min);

    const nombreCiudad = document.createElement('p');
    nombreCiudad.textContent = `Clima en ${name}`;
    nombreCiudad.classList.add('font-bold', 'text-4xl')

    const temperaturaActual = document.createElement('p');
    temperaturaActual.innerHTML = `${centigrados} &deg;C`;
    temperaturaActual.classList.add('font-bold', 'text-6xl');

    const temperaturaMaxima = document.createElement('p');
    temperaturaMaxima.innerHTML = `MAX ${max} &deg;C`;
    temperaturaMaxima.classList.add('text-3xl');

    const temperaturaMinima = document.createElement('p');
    temperaturaMinima.innerHTML = `MIN ${min} &deg;C`;
    temperaturaMinima.classList.add('text-3xl');

    const temperaturaMaximaMinimaDiv = document.createElement('div');
    temperaturaMaximaMinimaDiv.classList.add('flex', 'justify-around');

    const temperturaMaximaDiv = document.createElement('div');
    temperturaMaximaDiv.appendChild(temperaturaMaxima);

    const temperturaMinimaDiv = document.createElement('div');
    temperturaMinimaDiv.appendChild(temperaturaMinima);

    temperaturaMaximaMinimaDiv.appendChild(temperturaMaximaDiv);
    temperaturaMaximaMinimaDiv.appendChild(temperturaMinimaDiv);

    const resultadoDiv = document.createElement('div');
    resultadoDiv.classList.add('text-center', 'text-white');
    resultadoDiv.appendChild(nombreCiudad);
    resultadoDiv.appendChild(temperaturaActual);
    resultadoDiv.appendChild(temperaturaMaximaMinimaDiv);

    resultado.appendChild(resultadoDiv);
    resultadoDiv.appendChild(temperaturaMaximaMinimaDiv);
}

// Convertir grados kelvin a grados centígrados
const kelvinACentigrados = grados => parseInt(grados - 273.15);

function limpiarHTML() {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

function spinner() {

    limpiarHTML();

    const spinnerDiv = document.createElement('div');
    spinnerDiv.classList.add('sk-fanding-circle');

    spinnerDiv.innerHTML = `
    <div class="sk-circle1 sk-circle"></div>
    <div class="sk-circle2 sk-circle"></div>
    <div class="sk-circle3 sk-circle"></div>
    <div class="sk-circle4 sk-circle"></div>
    <div class="sk-circle5 sk-circle"></div>
    <div class="sk-circle6 sk-circle"></div>
    <div class="sk-circle7 sk-circle"></div>
    <div class="sk-circle8 sk-circle"></div>
    <div class="sk-circle9 sk-circle"></div>
    <div class="sk-circle10 sk-circle"></div>
    <div class="sk-circle11 sk-circle"></div>
    <div class="sk-circle12 sk-circle"></div>
    `;

    resultado.appendChild(spinnerDiv);
}