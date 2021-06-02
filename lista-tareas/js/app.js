'use strict'

document.addEventListener('DOMContentLoaded', () => {

    // Variables
    const formulario = document.querySelector('#formulario');
    const listaTareas = document.querySelector('#lista-tareas');
    let tareas = [];

    eventListeners();

    // Event Listeners
    function eventListeners() {
        // Cuando se añade una nueva tarea
        formulario.addEventListener('submit', agregarTarea);

        // Obtener tareas del Local Storage
        tareas = JSON.parse(localStorage.getItem('tareas')) || [];

        crearHTML();

        // console.log(tareas);
    }

    // Funciones
    function agregarTarea(e) {
        e.preventDefault();

        // TextArea donde escribe el usuario
        const tarea = document.querySelector('#tarea').value;

        // Identificar tareas si contienen el mismo texto
        const tareaObject = {
            id: Date.now(),
            texto: tarea
        }

        // Validación
        if (tarea === '') {
            mostrarError('La tarea tiene que tener texto');
            return; // Evitar que se ejecuten más líneas de código
        }

        // Añadir al array de tareas
        // Crear copia del array y añadir la tarea
        tareas = [...tareas, tareaObject];

        // insertar en el HTML
        crearHTML();

        // Reiniciar TextArea
        formulario.reset();

        // console.log(tareas);
    }

    function mostrarError(mensaje) {
        const error = document.createElement('div');
        error.textContent = mensaje;
        error.classList.add('error');

        // Insertar en el HTML
        const contenido = document.querySelector('#contenido');
        contenido.appendChild(error);

        setTimeout(() => {
            error.remove();
        }, 2000)
    }

    function crearHTML() {

        // Eliminar el códio previo
        limpiarHTML();

        if (tareas.length > 0) {
            tareas.forEach(tarea => {
                // HTML
                const btnEliminar = document.createElement('a');
                btnEliminar.classList.add('eliminar-tarea');
                btnEliminar.textContent = 'X';

                // Función para eliminar tarea
                btnEliminar.onclick = () => {
                    eliminarTarea(tarea.id);
                }

                const div = document.createElement('div');
                div.classList.add('texto-tarea');
                div.textContent = tarea.texto;
                div.appendChild(btnEliminar);

                listaTareas.appendChild(div);
            });
        }

        sincronizarStorage();
    }

    // Añade las tareas a Local Storage
    function sincronizarStorage() {
        localStorage.setItem('tareas', JSON.stringify(tareas));
    }

    function eliminarTarea(id) {
        // console.log('Eliminada la tarea con id:', id);
        tareas = tareas.filter(tarea => tarea.id != id);
        crearHTML();
    }

    function limpiarHTML() {
        while (listaTareas.firstChild) {
            listaTareas.removeChild(listaTareas.firstChild)
        }
    }

})