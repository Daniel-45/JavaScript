function comprar() {
    let efectivo, articulo, totalCompra;
    let acumulador = 0;
    let credito = 300;
    let totalParaComprar;

    efectivo = parseFloat(prompt('Introduce el total de efectivo que tienes'));

    while (efectivo < 0 || isNaN(efectivo)) {
        alert("Introduce valores correctos!! Tienen que ser números enteros positivos mayores que cero, no texto");
        efectivo = parseFloat(prompt('Introduce el total de efectivo que tienes'));
    }

    totalParaComprar = (efectivo + credito);

    console.log(`Dinero que tienes: ${efectivo} euros`);
    console.log(`Crédito que tienes: ${credito} euros`);
    console.log(`Total para comprar (efectivo + crédito): ${totalParaComprar} euros`);

    alert('Introduce el precio de los artículos (0 para terminar)');

    do {

        articulo = parseFloat(prompt('Precio del artículo'));

        while (articulo < 0 || isNaN(articulo)) {
            alert("Introduce valores correctos!! Tienen que ser números enteros positivos mayores que cero, no texto");
            articulo = parseFloat(prompt('Precio del artículo'));
        }

        if (efectivo <= 0) {
            credito -= articulo;
        } else {
            efectivo -= articulo;
        }

        acumulador += articulo;

    } while (articulo != 0);

    totalCompra = acumulador;

    if (totalCompra <= efectivo) {
        console.log('Puedes realizar la compra');
    } else if (totalCompra <= efectivo + credito) {
        console.log('Puedes realizar la compra');
    } else {
        console.error('No puedes realizar la compra');
    }

    console.log(`Total compra: ${totalCompra} euros`);

}

comprar();