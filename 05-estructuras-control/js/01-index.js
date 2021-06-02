let resultado = document.getElementById('resultado');
let numero1 = parseInt(prompt("Introduce el primer número"));
let numero2 = parseInt(prompt("Introduce el segundo número"));

while (numero1 <= 0 || numero2 <= 0 || isNaN(numero1) || isNaN(numero2)) {
    alert("Introduce valores correctos!!\nNúmeros enteros positivos, no texto");
    numero1 = parseInt(prompt("Introduce el primer número"));
    numero2 = parseInt(prompt("Introduce el segundo número"));
}

console.log("Número 1: " + numero1);
console.log("Número 2: " + numero2);

if (numero1 == numero2) {
    alert(`El número ${numero1} y el número ${numero2} son iguales!!`);
    console.log(`El número ${numero1} y el número ${numero2} son iguales!!`);
} else if (numero1 > numero2) {
    alert(`El número ${numero1} es mayor que el número ${numero2}`);
    console.log(`El número ${numero1} es mayor que el número ${numero2}`);
} else if (numero2 > numero1) {
    alert(`El número ${numero2} es mayor que el número ${numero1}`);
    console.log(`El número ${numero2} es mayor que el número ${numero1}`)
}