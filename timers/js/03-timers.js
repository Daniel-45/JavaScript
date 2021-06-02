'use strict' 

document.addEventListener('DOMContentLoaded', function() {

    iniciaTiempo();

    function iniciaTiempo() {
        var fecha = new Date();
        var hora = fecha.getHours();
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var reloj = (hora < 12) ? "<span>AM</span>" : "<span>PM</span>";
        hora = (hora == 0) ? 12 : hora;
        hora = (hora > 12) ? hora - 12 : hora;
        //Añade un cero a las horas, minutos y segundos < 10
        hora = compruebaTiempo(hora);
        minutos = compruebaTiempo(minutos);
        segundos = compruebaTiempo(segundos);
        document.getElementById("reloj").innerHTML = hora + ":" + minutos + ":" + segundos + " " + reloj;
    
        var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
        var dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
        var diaSemana = dias[fecha.getDay()];
        var dia = fecha.getDate();
        var mes = meses[fecha.getMonth()];
        var anio = fecha.getFullYear();
        var fecha = diaSemana + ", " + dia + " " + mes + " " + anio;
        document.getElementById("fecha").innerHTML = fecha;
    
        var fecha = setTimeout(function() {iniciaTiempo()}, 500);
    }
    
    function compruebaTiempo(i) {
        if (i < 10) {
            i = "0" + i;
        }
        return i;
    }
});