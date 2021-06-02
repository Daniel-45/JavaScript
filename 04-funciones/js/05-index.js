function potencia() {
    alert('Introduce la base y el exponente para saber la potencia');
    let base = parseInt(prompt('Introduce la base'));
    let exponente = parseInt(prompt('Introduce el exponente'));
    let resultado = Math.pow(base, exponente);
    console.log(`${base} a la ${exponente} potencia es: ${resultado}`);
};

potencia();