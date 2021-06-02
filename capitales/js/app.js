var ciudades;
var numero;
var posicion;
var vidas;
var libres = new Array();

function Generaraletorio(num) {
    return Math.round(Math.random() * num);
}

function Comprobarlibre(pos) {
    var esta1 = false;
    for (i = 0; i < libres.length; i++) {
        if (pos == libres[i]) return true
    }
    return esta1;
}

function Acertar() {
    var capital;
    if (numero == ciudades.length) {
        document.getElementById('mensaje2').innerHTML = "HAS GANADO!!";
    } else {
        do {
            posicion = Generaraletorio(ciudades.length - 1);
            libre = Comprobarlibre(posicion);
        } while (libre)
    }
    capital = ciudades[posicion][0];
    document.getElementById('mensaje').innerHTML = " La capital de " + capital.toString() + " es:";
}

function Comprobar() {

    acierto = false;
    capital = document.getElementById('capital').value;
    capital2 = ciudades[posicion][1];
    if (vidas == 3) {
        document.getElementById('mensaje2').innerHTML = "Lo siento, has perdido";
    } else {
        if (capital.toLowerCase() == capital2.toLowerCase()) {
            numero = numero + 1;
            libres.push(posicion);
            vidas = 0;
            document.getElementById('capital').value = "";
            document.getElementById('mensaje2').innerHTML = "Correcto!!";
            document.getElementById('bien').value++;
            Acertar();
        } else {
            vidas = vidas + 1;
            document.getElementById('mensaje2').innerHTML = "No has acertado,vuele a intentarlo, te quedan " + (3 - vidas) + " intentos.";
            document.getElementById('capital').value = "";
            document.getElementById('bien').value--;
        }
    }
}

function Inicializar() {
    numero = 0;
    posicion = 0;
    vidas = 0;
    ciudades = [
        ['España', 'Madrid'],
        ['Francia', 'Paris'],
        ['Italia', 'Roma'],
        ['Alemania', 'Berlin'],
        ['Reino Unido', 'Londres'],
        ['Países Bajos', 'Amsterdam']
    ];
    document.getElementById('bien').value = 0;
    document.getElementById('boton').addEventListener('click', Comprobar);
}

document.addEventListener('DOMContentLoaded', Inicializar, false);
document.addEventListener('DOMContentLoaded', Acertar, false);