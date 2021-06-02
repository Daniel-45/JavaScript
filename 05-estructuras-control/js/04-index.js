function puedeVotar() {
    let nombre, edad;

    nombre = prompt('Introduce tú nombre');
    edad = parseInt(prompt('Introduce tú edad'));

    while (edad < 0 || isNaN(edad)) {
        alert("Introduce un valor correcto!!\nTiene que ser un número entero mayor que cero, no texto");
        edad = parseInt(prompt('Introduce tú edad'));
    }

    if (edad  >= 18) {
        console.log(`${nombre}, tienes ${edad} años y puedes votar`);
    }
    else {
        console.log(`${nombre}, tienes ${edad} años y no puedes votar`);

    }
}

puedeVotar();