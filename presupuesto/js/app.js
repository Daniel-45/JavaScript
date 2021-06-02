'use strict'

// Variables & Selectores
const formulario = document.querySelector('#formulario');
const listaGastos = document.querySelector('#gastos');

// Eventos
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', preguntaPresupuesto);
    formulario.addEventListener('submit', agregarGasto);
}

// Clases
class Presupuesto {
    constructor(presupuesto) {
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto) {
        this.gastos = [...this.gastos, gasto];
        this.calculaResto();
        // console.log(this.gastos);
    }

    calculaResto() {
        const gastado = this.gastos.reduce((total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
        // console.log(this.restante);
    }

    eliminarGasto(id) {
        this.gastos = this.gastos.filter(gasto => gasto.id !== id);
        this.calculaResto();
    }
}

class UI {
    insertarPresupuesto(cantidad) {
        // Extraer valores
        const { presupuesto, restante } = cantidad;

        // Insertar en el HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    mostrarAlerta(mensaje, tipo) {
        const divAlerta = document.createElement('div');
        divAlerta.classList.add('text-center', 'alert');

        if (tipo === 'error') {
            divAlerta.classList.add('alert-danger');
        } else {
            divAlerta.classList.add('alert-success');
        }

        // Mensaje de la alerta
        divAlerta.textContent = mensaje;

        // Insertar en el HTML
        document.querySelector('.principal').insertBefore(divAlerta, formulario);

        setTimeout(() => {
            divAlerta.remove();
        }, 2000);
    }

    listadoGastos(gastos) {
        // console.log(gastos);

        // Elimina HTML previo
        this.limpiarHTML();

        gastos.forEach(gasto => {
            const { cantidad, nombre, id } = gasto;
            const nuevoGasto = document.createElement('div');
            nuevoGasto.className = 'd-flex justify-content-between align-items-center border rounded p-2 mr-1 mb-1';
            nuevoGasto.dataset.id = id;

            nuevoGasto.innerHTML = `
                ${nombre}
                <span>${cantidad}€</span>
            `;

            const btnEliminar = document.createElement('button');
            btnEliminar.classList = 'btn btn-danger eliminar-gasto';
            btnEliminar.textContent = 'Eliminar';
            btnEliminar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnEliminar);

            // Añadir al HTML
            listaGastos.appendChild(nuevoGasto);
        })
    }

    // Evitar los duplicados de appendChild
    limpiarHTML() {
        while (listaGastos.firstChild) {
            listaGastos.removeChild(listaGastos.firstChild);
        }
    }

    actualizarResto(restante) {
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObject) {
        const { presupuesto, restante } = presupuestoObject;
        const restanteDiv = document.querySelector('.restante');

        // Comprobar 25% y 50%
        if (( presupuesto / 4) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-danger');
        } else if (( presupuesto / 2) > restante) {
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
            restanteDiv.classList.add('alert-success');
        }

        // Si el presupuesto es cero o menor que cero
        if (restante <= 0) {
            ui.mostrarAlerta('El presupuesto se ha agotado', 'error');
            formulario.querySelector('button[type=submit]').disabled = true;
        }
    }
}

const ui = new UI();

// Funciones
let presupuesto;

function preguntaPresupuesto() {
    const presupuestoUsuario = prompt('Introduce tu presupuesto semanal');

    // Validación
    if (presupuestoUsuario === '' ||
        presupuestoUsuario === null || 
        isNaN(presupuestoUsuario) || 
        presupuestoUsuario <= 0) {

        alert('Introduce un presupuesto válido!!');
        window.location.reload();
    }

    // Presupuesto válido
    presupuesto = new Presupuesto(presupuestoUsuario);

    // console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e) {
    e.preventDefault();

    // Leer datos del formulario
    const nombre = document.querySelector('#gasto').value;
    const cantidad = Number(document.querySelector('#cantidad').value);

    if (nombre === '' || cantidad === '') {
        // console.log('Todos los campos son obligatorios');
        ui.mostrarAlerta('Todos los campos son obligatorios', 'error');
        return;

    } else if(cantidad <= 0 || isNaN(cantidad)) {
        ui.mostrarAlerta('La cantidad no es válida', 'error');
        return;
    }

    // Objeto con el gasto
    const gasto = { 
        nombre: nombre, 
        cantidad: cantidad, 
        id: Date.now()
    }

    // Añadir gasto
    presupuesto.nuevoGasto(gasto);

    ui.mostrarAlerta('Gasto añadido correctamente');

    // Mostrar gastos
    const { gastos, restante } = presupuesto;
    ui.listadoGastos(gastos);
    ui.actualizarResto(restante);
    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id) {
    // console.log(id);

    // Elimina gastos del objeto
    presupuesto.eliminarGasto(id);

    // Elimina gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.listadoGastos(gastos);
    ui.actualizarResto(restante);
    ui.comprobarPresupuesto(presupuesto);
}
