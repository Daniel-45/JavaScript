'use strict' 

document.addEventListener('DOMContentLoaded', function() {
    
    // Capturar el evento (submit) para guardar las películas
    let formulario = document.getElementById('formulario');
    
    function add() {
        formulario.addEventListener('submit', function() {
            let titulo = document.querySelector('#add-pelicula').value;
            // No añadir en caso de que esté vacío
            if (titulo.length >= 1 ) {
                localStorage.setItem(titulo,titulo);
            }
        });
    }

    // Capturar el evento (submit) para eliminar las películas
    let formularioElimina = document.getElementById('formulario-eliminar');
    
    // Capturar el evento (submit) para guardar las películas
    function remove() {
        formularioElimina.addEventListener('submit', function() {
            let titulo = document.querySelector('#elimina-pelicula').value;
            // No añadir en caso de que esté vacío
            if (titulo.length >= 1 ) {
                localStorage.removeItem(titulo);
            }
        });
    }

    add();
    remove();

    // Añadir las peliculas guardadas en LocalStorage
    function addPeliculas() {
        let ul = document.getElementById('lista');
        for (let i in localStorage) {
            console.log(localStorage[i]);
    
            if (typeof localStorage[i] == 'string') {
                let li = document.createElement("li");
                li.append(localStorage[i]);
                ul.append(li);
            }
        }
    }

    addPeliculas();
});