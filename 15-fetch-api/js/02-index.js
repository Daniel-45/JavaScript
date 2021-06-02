const botonCargarJSON = document.querySelector('#cargar-json');

botonCargarJSON.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleado.json';

    fetch(url)
        .then(respuesta => {
            return respuesta.json();
        })
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}

function mostrarHTML({id, nombre, empresa, puesto}) {
    const contenido = document.querySelector('#contenido');

    contenido.innerHTML = `
    <p>ID: ${id}</p>
    <p>Nombre: ${nombre}</p>
    <p>Empresa: ${empresa}</p>
    <p>Puesto: ${puesto}</p>
    `;
}