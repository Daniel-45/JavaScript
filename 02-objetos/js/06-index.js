const cliente1 = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    email: 'daniel.pompa@gmail.com',
    saldo: 100000,
    premium: false,
    informacion: function() {
        console.log('Cliente');
        console.log(`Nombre: ${this.nombre} ${this.apellidos}`);
        console.log(`Email: ${this.email}`);
        if (this.premium) {
            console.log('Cliente premium');
        }
    }
}

const cliente2 = {
    nombre: 'Emma',
    apellidos: 'Ciambrino Baz',
    email: 'emma.ciambrino@gmail.com',
    saldo: 200000,
    premium: true,
    informacion: function() {
        console.log('Cliente');
        console.log(`Nombre: ${this.nombre} ${this.apellidos}`);
        console.log(`Email: ${this.email}`);
        if (this.premium) {
            console.log('Cliente premium');
        }
    }
}

console.log('Funciones en objetos y acceder a sus valores');
cliente1.informacion();
cliente2.informacion();