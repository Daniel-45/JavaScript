window.onload = function inicializar() {
    pantalla = document.getElementById("textoPantalla");
    x = "0"; // Número de la pantalla.
    xi = "1"; // Iniciar número en pantalla: 1=si; 0=no.
    ni = "0"; // Número oculto o en espera.
    operacion = "no"; //operación en curso, "no"=sin operación.
}

function numero(xx) { // Recoge el número pulsado en el argumento.
    if (x == "0" || xi == "1") { // Inicializar un número,
        pantalla.innerHTML = xx; // Mostrar en pantalla
        x = xx; // Guardar número;
    } else { // Continuar un número
        pantalla.innerHTML += xx; // Añadir y mostrar en pantalla.
        x += xx; // Añadir y guardar.
    }
    xi = "0"; //el número está iniciado y podemos ampliarlo.
}

function operar(s) {
    ni = x; // Ponemos el primer número en "numero en espera" para poder escribir el segundo.
    operacion = s; // Guardar tipo de operación.
    xi = "1"; // Inicializar pantalla.
}

function igualar() {
    if (operacion == "no") { // No hay ninguna operación pendiente.
        pantalla.innerHTML = x; // Mostrar el mismo número.
    } else { // Con operación pendiente resolvemos
        s = ni + operacion + x; // Escribe la operación en una cadena.
        resultado = eval(s); // Convertir la cadena a código y resolver.
        pantalla.innerHTML = resultado; //Mostrar el resultado.
        x = resultado; // Guardae el resultado.
        operacion = "no"; // Ya no hay operaciones pendientes.
        xi = "1"; // Se puede reiniciar la pantalla.
    }
}

function borrado() {
    pantalla.innerHTML = "0"; // Poner la pantalla a 0.
    x = "0"; // Reiniciar número en pantalla.
    ni = "0"; // Indicador de número oculto a 0.
    operacion = "no"; // Borrar operación en curso.
}