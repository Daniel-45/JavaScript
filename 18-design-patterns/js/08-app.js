// Namespace

const app = {};

app.camisetas = [
    {
        camiseta: 'Camiseta Vue',
        color: 'Verde',
        precio: 15
    },
    {
        camiseta: 'Camiseta React',
        color: 'Azul',
        precio: 15
    },
    {
        camiseta: 'Camiseta Angular',
        color: 'Roja',
        precio: 15
    },
    {
        camiseta: 'Camiseta JavaScript',
        color: 'Negra',
        precio: 15
    }
]

app.funciones = {
    mostrarCamisetas: () => {
        console.log('Nuetras camisetas');

        camisetas.forEach((c, index) => {
            console.log(`${index}: ${c.camiseta} | Precio: ${c.precio} | Color: ${c.color}`);
        });
    },
    mostrarCamiseta: id => {
        console.log(`Camiseta seleccionada: ${app.camisetas[id].camiseta}`);
    },
    addCamiseta: (camiseta, color, precio) =>  {
        const nuevaCamiseta = {
            camiseta,
            color,
            precio
        };

        app.camisetas.push(nuevaCamiseta)
    }
}

const { camisetas } = app;

app.funciones.addCamiseta('Camiseta Git', 'Negra', 15);

app.funciones.mostrarCamisetas(camisetas);

app.funciones.mostrarCamiseta(3);