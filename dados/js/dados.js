function inicializar() {
    document.getElementById("apuesta").value = 0;
    document.getElementById("dinero").value = 0;
    document.getElementById("jugar").addEventListener('click', inicio, false);
    document.getElementById("inicio").addEventListener('click', resetear, false);
    document.getElementById("mensajes").style.color = "black";
    document.getElementById("mensajes").innerHTML = "LANZA LOS DADOS";
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function inicio() {

    dinero = parseInt(document.getElementById("dinero").value);
    apuesta = parseInt(document.getElementById("apuesta").value);

    // alert(typeof(dinero));
    // alert(typeof(apuesta));

    var dado1 = aleatorio(1, 7);
    var dado2 = aleatorio(1, 7);

    document.getElementById("dado1").src = "./images/dado" + dado1 + ".png";
    document.getElementById("dado2").src = "./images/dado" + dado2 + ".png";

    if ((dado1 + dado2) == 7 || (dado1 + dado2) == 11) {
        document.getElementById("mensajes").style.color = "blue";
        document.getElementById("mensajes").innerHTML = "HAS GANADO!!";
        parseInt(document.getElementById("dinero").value = dinero + apuesta);
        document.getElementById("jugar").value = "Jugar de nuevo";
    } else if (dado1 == dado2) {
        document.getElementById("mensajes").style.color = "green";
        document.getElementById("mensajes").innerHTML = "VUELVE A LANZAR!!";
        document.getElementById("jugar").value = "Lanzar";
    } else {
        document.getElementById("mensajes").style.color = "red";
        document.getElementById("mensajes").innerHTML = "HAS PERDIDO!!";
        parseInt(document.getElementById("dinero").value = dinero - apuesta);
        document.getElementById("jugar").value = "Jugar de nuevo";
    }

    if (document.getElementById("dinero").value == 0) {
        document.getElementById("resultado").style.color = "red";
        document.getElementById("resultado").innerHTML = "HAS PERDIDO TODO TÚ DINERO!!";
        document.getElementById("jugar").disabled = true;
    }
}

function resetear() {
    document.getElementById("apuesta").value = 0;
    document.getElementById("dinero").value = 0;
    document.getElementById("mensajes").style.color = "black";
    document.getElementById("mensajes").innerHTML = "LANZA LOS DADOS";
    document.getElementById("dado1").src = "./images/dado1.png";
    document.getElementById("dado2").src = "./images/dado1.png";
    document.getElementById("jugar").disabled = false;
    document.getElementById("jugar").value = "Lanzar";
    document.getElementById("resultado").innerHTML = "";
}

var apuesta, dinero;

document.addEventListener('DOMContentLoaded', inicializar, false);