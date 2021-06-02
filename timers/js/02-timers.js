'use strict'

document.addEventListener('DOMContentLoaded', function() {
    var reloj;
    var botones = document.getElementsByTagName('button');
    botones[0].addEventListener('click', iniciar);
    botones[1].addEventListener('click', detener);

    // Mostrar el reloj
    function mostrarReloj() {
        var tiempo = new Date();
        var horas = tiempo.getHours();
        var minutos = tiempo.getMinutes();
        var segundos = tiempo.getSeconds();

        if (horas < 10) {
            hora = "0" + hora;
        } else if (minutos < 10) {
            minutos = "0" + minutos;
        } else if (segundos < 10) {
            segundos = "0" + segundos;
        }

        document.getElementById('contenedor').style.backgroundColor = "#e6e6e6";
        document.getElementById('contenedor').style.border = "1px solid #b3b3b3";
        document.getElementById('reloj').innerHTML = horas + ":" + minutos + ":" + segundos;
    }

    // Iniciar el reloj
    function iniciar() {
        reloj = setInterval(mostrarReloj, 1000);
    }

    // Detener el reloj
    function detener() {
        clearInterval(reloj);
    }
});