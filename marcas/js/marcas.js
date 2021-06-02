function aleatorio(num) {
    var x = Math.floor(Math.random() * parseInt(num));
    return x;
}

function inicio() {
    document.getElementById("imagenes").addEventListener('click', comprobar);
    dificultad();
    cambiaMarca();
    document.getElementById("empezar").disabled = false;
    document.getElementsByTagName("select")[0].disabled = false;
    reloj = setInterval(cambiaImagen, velocidad);
    // document.getElementById("empezar").disabled = true;
    // document.getElementsByTagName("select")[0].disabled = true;
}

function dificultad() {
    var nivel = document.getElementsByTagName("select")[0].value;

    if (nivel == 0) {
        velocidad = 500;
    }

    if (nivel == 1) {
        velocidad = 1000;
    }

    if (nivel == 2) {
        velocidad = 2000;
    }
}

function cambiaMarca() {
    numMarca = aleatorio(7);
    var aux = Amarcas[numMarca];
    document.getElementById("marca").innerHTML = aux;
}

function cambiaImagen() {
    numImagen = aleatorio(7);
    document.getElementById("imagen").src = "./images/" + AImagenes[numImagen];
}

function sumaAcierto() {
    if (document.getElementById("bien").value < 3) {
        document.getElementById("bien").value++;
    }
}

function sumaError() {
    if (document.getElementById("mal").value < 3 && document.getElementById("bien").value < 3) {
        document.getElementById("mal").value++;
    }
}

function comprobar() {
    if (numMarca == numImagen) {
        sumaAcierto();
        cambiaMarca();
    } else {
        sumaError();
    }

    if (document.getElementById("bien").value == 3) {
        clearInterval(reloj);
        document.getElementById("imagen").src = "./images/welldone.jpg";
        document.getElementById("empezar").disabled = false;
        document.getElementsByName("select").disabled = false;
        document.getElementById("marca").innerHTML = "ENHORABUENA HAS APROBADO EL EXAMEN DE JAVASCRIPT!!";
        document.getElementById("empezar").addEventListener('click', inicializar);
    }

    if (document.getElementById("mal").value == 3) {
        clearInterval(reloj);
        document.getElementById("imagen").src = "./images/perdiste.jpg";
        document.getElementById("empezar").disabled = false;
        document.getElementsByName("select").disabled = false;
        document.getElementById("marca").innerHTML = "HAS PERDIDO!!"
        document.getElementById("empezar").addEventListener('click', inicializar);
    }
}

function inicializar() {
    document.getElementById("empezar").addEventListener('click', inicio, false);
    document.getElementById("bien").value = 0;
    document.getElementById("mal").value = 0;
}

var reloj;
var velocidad = 2000;
var numMarca;
var numImagen;
var Amarcas = ["APPLE", "FIREFOX", "LINUX", "GOOGLE CHROME", "MICROSOFT WINDOWS", "ADIDAS", "NIKE"];
var AImagenes = ["apple.jpg", "firefox.jpg", "linux.jpg", "chrome.jpg", "windows.jpg", "adidas.jpg", "nike.jpg"];

document.addEventListener('DOMContentLoaded', inicializar, false);