function operacionesAritmeticas() {
    alert('Introduce dos números para hacer las operaciones aritméticas básicas');

    let numero1 = parseFloat(prompt("Introduce un número"));
    let numero2 = parseFloat(prompt("Introduce otro número"));

    while (isNaN(numero1) || isNaN(numero2)) {
        alert("Introduce valores correctos!! Tienen que ser números, no texto");
        numero1 = parseFloat(prompt("Introduce el primer número"));
        numero2 = parseFloat(prompt("Introduce el segundo número"));
    }

    let suma = numero1 + numero2;
    let resta = numero1 - numero2;
    let multiplicacion = numero1 * numero2;
    let division = numero1 / numero2;

    console.log(`${numero1} + ${numero2} = ${suma}`);
    console.log(`${numero1} - ${numero2} = ${resta}`);
    console.log(`${numero1} * ${numero2} = ${multiplicacion}`);
    console.log(`${numero1} / ${numero2} = ${division}`);
};

operacionesAritmeticas();