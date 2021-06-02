'use strict'

let tiempo;

document.addEventListener('DOMContentLoaded', function() {
    // SetTimeout se ejecuta una sola vez
        tiempo = setTimeout(function() {
        console.log("SetTimeOut se ha ejecutado");

        let titulo = document.querySelector("h1");

        titulo.style.fontSize = "3em";
        titulo.style.color = "blue";
            
       
    }, 1000);

    // SetInterval se ejecuta en bucle cada cierto tiempo (intervalo indicado)
    function intervalo() {
        tiempo = setInterval(function() {
            console.log("SetInterval se está ejecutando");
    
            let titulo = document.querySelector("h1");
    
            if (titulo.style.fontSize == "3em") {
                titulo.style.color = "red";
                titulo.style.fontSize = "2.5em";
            } else {
                titulo.style.color = "blue";
                titulo.style.fontSize = "3em";
            }
        }, 1000);

        return tiempo;
    }

    tiempo = start.addEventListener('click', function() {
        intervalo();
    })

    let stop = document.getElementById('stop');
    
    const texto = document.getElementById('texto');

    stop.addEventListener('click', function() {
        texto.style.color = 'red';
        texto.innerHTML = '<h1>Has detenido el intervalo de tiempo en el bucle!!</h1>'
        clearInterval(tiempo);
    })
});