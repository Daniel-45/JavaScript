const botonCargarAPI = document.querySelector('#cargar-api');

botonCargarAPI.addEventListener('click', mostrarDatos);

function mostrarDatos() {
    const url = 'https://picsum.photos/list';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostrarHTML(datos))
        .catch(error => console.log(error))
}

function mostrarHTML(datos) {
    const contenido = document.querySelector('.contenedor');

    let html = '';

    datos.forEach(item => {
        const { author, post_url } = item;

        html += `
        <p>Autor: ${author}</p>
        <a href="${post_url}" target="_blank">Ver imagen</a>
        `;
    });

    contenido.innerHTML = html;
}