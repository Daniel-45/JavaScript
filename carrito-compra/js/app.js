'use strict'

document.addEventListener('DOMContentLoaded', () => {

    const carrito = document.querySelector('#carrito');
    const contenedorCarrito = document.querySelector('#lista-carrito tbody');
    const btnVaciarCarrito = document.querySelector('#vaciar-carrito');
    const listaCursos = document.querySelector('#lista-cursos');
    let cursosCarrito = [];

    eventListeners();

    function eventListeners() {
        // Añadir un curso a presionar el botón 'añadir al carrito'
        listaCursos.addEventListener('click', addCurso);

        // Eliminar cursos del carrito
        carrito.addEventListener('click', eliminarCurso);

        // Mostrar los cursos de Local Storage
        cursosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

        carritoHTML();

        // Vaciar carrito de compra
        btnVaciarCarrito.addEventListener('click', () => {
            // console.log('Limpia carrito');
            cursosCarrito = []; // Resetear el arry

            limpiarHTML(); // Eliminar todo el HTML
        });
    }

    // Funciones
    function addCurso(e) {
        e.preventDefault();

        // console.log(e.target.classList);

        // Evitar bubbling
        // Asegurar que el usuario ha hecho click en 'añadir al carrito'
        if (e.target.classList.contains('agregar-carrito')) {
            // Traversing
            //console.log(e.target.parentElement.parentElement);
            const cursoSeleccionado = e.target.parentElement.parentElement;
            leerDatosCurso(cursoSeleccionado);
        }

    }

    // Leer contenido del HTML en el que se hace click
    function leerDatosCurso(curso) {
        // console.log(curso);

        // Crear objeto con el contenido del curso
        const informacionCurso = {
            imagen: curso.querySelector('img').src,
            titulo: curso.querySelector('h4').textContent,
            precio: curso.querySelector('.precio span').textContent,
            id: curso.querySelector('a').getAttribute('data-id'),
            cantidad: 1
        }

        // console.log(informacionCurso);

        // Comprobar si un curso ya existe en el carrito
        // some itera sobre un array y verifica si un elemento existe
        const existe = cursosCarrito.some((curso) => curso.id === informacionCurso.id);

        if (existe) {
            // Actualizar la cantidad
            // map crea un nuevo array
            const cursos = cursosCarrito.map((curso) => {
                if (curso.id === informacionCurso.id) {
                    curso.cantidad++;
                    return curso; // retorna objeto actualizado
                } else {
                    return curso; // Retorna objetos no duplicados
                }
            });
            cursosCarrito = [...cursos];
        } else {
            // Añadir curso al array de carrito
            cursosCarrito = [...cursosCarrito, informacionCurso]
        }

        console.log(cursosCarrito);

        carritoHTML();
    }

    // Mostrar el carrito en el HTML
    function carritoHTML() {
        // Limpiar el HTML para evitar duplicados
        limpiarHTML();

        // Recorrer el carrito y generar el HTML
        cursosCarrito.forEach((curso) => {
            // Destructuring
            const { imagen, titulo, precio, cantidad, id } = curso;
            // Por cada curso del carrito
            const fila = document.createElement('tr');
            fila.innerHTML = `
            <td>
                <img src="${imagen}" width="160">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="fas fa-trash borrar-curso" data-id="${id}" ></a>
            </td>
        `;

            // Añadir HTML del carrito en el tbody
            contenedorCarrito.appendChild(fila);
        });

        // Añadir a Local Storage
        sincronizarStorage();
    }

    function sincronizarStorage() {
        localStorage.setItem('carrito', JSON.stringify(cursosCarrito))
    }

    // Eliminar curso del carrito
    function eliminarCurso(e) {
        // console.log('Curso eliminado');
        // console.log(e.target.classList);
        if (e.target.classList.contains('borrar-curso')) {
            // console.log(e.target);
            // console.log(e.target.getAttribute('data-id'));
            const cursoId = e.target.getAttribute('data-id');

            // Elimina del array por el id
            cursosCarrito = cursosCarrito.filter((curso) => curso.id !== cursoId);
            // console.log(cursosCarrito);

            carritoHTML(); // Iterar sobre el carrito y mostrar su HTML
        }
    }

    // Elimina los cursos del tbody
    function limpiarHTML() {
        // Forma antigua
        // contenedorCarrito.innerHTML = '';

        // Forma recomendada
        // Si el contenedor tiene al menos un elemento
        while (contenedorCarrito.firstChild) {
            contenedorCarrito.removeChild(contenedorCarrito.firstChild);
        }
    }

})