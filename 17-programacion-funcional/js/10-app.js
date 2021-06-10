const obtenerNombre = info => ({
    mostrarNombre() {
        console.log(`Nombre: ${info.nombre}`);
    }
});

const guardarEmail = info => ({
    insertarEmail(email) {
        console.log(`Añadir e-mail a ${info.nombre}`);
        info.email = email;
    }
});

const obtenerEmail = info => ({
    mostrarEmail() {
        console.log(`Correo electrónico: ${info.email}`);
    }
});

const obtenerDatosCliente = info =>  ({
    mostrarDatos() {
        console.log(`Nombre: ${info.nombre} - E-Mail: ${info.email}`);
    }
});

const obtenerDatosEmpleado = info =>  ({
    mostrarDatos() {
        console.log(`Nombre: ${info.nombre} - E-Mail: ${info.email} - Puesto: ${info.puesto}`);
    }
});

function Cliente(nombre, email) {
   let info = {
       nombre,
       email
   }

   return Object.assign(
       info,
       obtenerNombre(info),
       guardarEmail(info),
       obtenerEmail(info),
       obtenerDatosCliente(info)
   )
}

function Empleado(nombre, email, puesto) {
    let info = {
        nombre,
        email,
        puesto
    }

    return Object.assign(
        info,
        obtenerNombre(info),
        guardarEmail(info),
        obtenerEmail(info),
        obtenerDatosEmpleado(info)
    )
}

const cliente = Cliente('Emma Ciambrino Baz', null);

console.log('Cliente');
cliente.mostrarNombre();
cliente.insertarEmail('emma.ciambrino@gmail.com');
cliente.mostrarEmail();
cliente.mostrarDatos();

const empleado = Empleado('Razvan Ilies', null, 'Programador');

console.log('Empleado');
empleado.mostrarNombre();
empleado.insertarEmail('razvan.ilies@gmail.com');
empleado.mostrarEmail();
empleado.mostrarDatos();

