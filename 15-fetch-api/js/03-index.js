const botonCargarJSONArray = document.querySelector('#cargar-json-array');

botonCargarJSONArray.addEventListener('click', obtenerDatos);

function obtenerDatos() {
    const url = 'data/empleados.json';

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => mostarDatos(datos))
        .catch(error => console.log(error))
}

function mostarDatos(empleados) {
    empleados.forEach(empleado => {
        const { id, nombre, empresa, puesto } = empleado;
        console.log(`ID: ${id}`);
        console.log(`Nombre: ${nombre}`);
        console.log(`Empresa: ${empresa}`);
        console.log(`Puesto: ${puesto}`);
    })
}