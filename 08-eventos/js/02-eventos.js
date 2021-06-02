function inicializar() {
    // Eventos 'click'
    boton = document.getElementById('boton');
    // boton.addEventListener('click',mensaje);
    boton.addEventListener('click',cambiaColor);
    // Eventos 'mouseover'
    texto = document.getElementById('texto');
    texto.addEventListener('mouseover',cambiaTexto);
    texto.addEventListener('mouseout',quitaTexto);
}

// Evento 'click'
function mensaje() {
    alert("Has hecho clic en el botón!!");
}

function cambiaColor() {
    boton = document.getElementById('boton');
    contenedores = document.getElementsByTagName('div');
    boton.style.color = "white";
    var colorFondo = boton.style.backgroundColor;

    if (colorFondo == "blue") {
        boton.style.backgroundColor = "#ff8000";
        contenedores[0].style.backgroundColor = "blue";
        contenedores[1].style.backgroundColor = "blue";
        contenedores[2].style.backgroundColor = "blue";
        contenedores[3].style.backgroundColor = "blue";
        contenedores[4].style.backgroundColor = "blue";
        contenedores[5].style.backgroundColor = "blue";
    }
    else {
        boton.style.backgroundColor = "blue";
        contenedores[0].style.backgroundColor = "#ff8000";
        contenedores[1].style.backgroundColor = "#ff8000";
        contenedores[2].style.backgroundColor = "#ff8000";
        contenedores[3].style.backgroundColor = "#ff8000";
        contenedores[4].style.backgroundColor = "#ff8000";
        contenedores[5].style.backgroundColor = "#ff8000";
    }
}

// Evento 'mouseover'
function cambiaTexto() {
    var contenido = document.getElementById('contenido');
    contenido.style.color = "#ff8000";
    contenido.innerHTML = "Has pasado el retón por encima del texto!!";
}

function quitaTexto() {
    var contenido = document.getElementById('contenido');
    contenido.innerHTML = "";
}

var boton, texto;
var contenedores;

document.addEventListener('DOMContentLoaded',inicializar);