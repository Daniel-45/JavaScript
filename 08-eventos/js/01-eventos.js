function inicializar() {
    var boton = document.getElementById('boton');
    boton.addEventListener('click',cambiaColor);
}

// Eventos del ratón
function cambiaColor() {
    contenedores = document.getElementsByTagName('div');
    contenedores[0].style.backgroundColor = "#ff8000";
    contenedores[2].style.backgroundColor = "#ff8000";
    contenedores[3].style.backgroundColor = "#ff8000";
    contenedores[5].style.backgroundColor = "#ff8000";
}

var contenedores;

document.addEventListener('DOMContentLoaded',inicializar);