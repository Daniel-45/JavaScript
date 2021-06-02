const formulario = document.querySelector('#formulario');
const resultado = document.querySelector('#resultado');
const divPaginacion = document.querySelector('#paginacion');

const registrosPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

document.addEventListener('DOMContentLoaded', () => {
    formulario.addEventListener('submit', validarFormulario);
});

function validarFormulario(e) {
    e.preventDefault();

    const terminoBusqueda = document.querySelector('#termino').value 

    if (terminoBusqueda === '') {
        mostrarAlerta('Introduce un término de búsqueda');
        return;
    }

    buscarImagenes(terminoBusqueda);
}

function mostrarAlerta(mensaje) {
    const existeAlerta = document.querySelector('.bg-red-100');

    if (!existeAlerta) {
        const alerta = document.createElement('p');
    
        alerta.classList.add('bg-red-100', 'text-red-700', 'px-4', 'py-3', 'rounded', 'max-w-lg', 'mx-auto', 'mt-6', 'text-center');
    
        alerta.innerHTML = `
        <strong class="font-bold>Error!!</strong>
        <span class="block sm:inline>${mensaje}</span>
        `;
    
        formulario.appendChild(alerta);
    
        setTimeout(() => {
            alerta.remove();
        }, 3000);
    }
}

function buscarImagenes() {
    const termino = document.querySelector('#termino').value 
    const key = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'; // Aquí tu Api Key de Pixabay
    const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registrosPorPagina}&page=${paginaActual}`;

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(resultado => {
        totalPaginas = calcularTotalPaginas(resultado.totalHits);
        mostrarImagenes(resultado.hits);
    })
}

// Generador para registrar la cantidad de elementos en función de las páginas
function *crearPaginador(total) {
    for (let i = 1; i <= total; i++) {
        yield i;  
    }
}

function calcularTotalPaginas(total) {
    return parseInt(Math.ceil(total/registrosPorPagina));
}

function mostrarImagenes(imagenes) {
    while (resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }

    // Iterar el array de imágenes y construir HTML
    imagenes.forEach(imagen => {
        const { previewURL, likes, views, largeImageURL } = imagen;
        resultado.innerHTML += `
        <div class="w-1/2 md:w-1/3 lg:w-1/4 p-3 mb-4">
            <div class="bg-white">
                <img class="w-full" src="${previewURL}">
                <div class="p-4">
                    <p class="font-bold">${likes} <span class="font-light">Me gusta</span></p>
                    <p class="font-bold">${views} <span class="font-light">Visitas</span></p>
                    <a
                    class="block w-full bg-blue-800 hover:bg-blue-500 text-white font-bold text-center rounded mt-5 p-1"
                    href="${largeImageURL}" target="_blank" rel="noopener noreferrer"
                    >
                        Ver imagen
                    </a>
                </div>
            </div>
        </div>
        `;
    });

    // Limpiar paginador previo
    while (divPaginacion.firstChild) {
        divPaginacion.removeChild(divPaginacion.firstChild);
    }

    // Generar nuevo HTML
    mostrarPaginador();
}

function mostrarPaginador() {
    iterador = crearPaginador(totalPaginas);
    
    while (true) {
        const { value, done } = iterador.next();

        if (done) return;

        const boton = document.createElement('a');
        boton.href = '#';
        boton.dataset.pagina = value;
        boton.textContent = value;
        boton.classList.add('siguiente', 'bg-yellow-400', 'px-2', 'py-2', 'mr-2', 'mb-4', 'rounded');
        boton.onclick = () => {
            paginaActual = value;
            buscarImagenes();
        }

        divPaginacion.appendChild(boton);
    }
}