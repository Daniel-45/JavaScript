import { eliminarCita, cargarEdicion } from '../funciones.js';
import { contenedorCitas } from '../selectores.js';


class UI {

     imprimirAlerta(mensaje, tipo) {
          // Crea el div
          const divMensaje = document.createElement('div');
          divMensaje.classList.add('text-center', 'alert', 'd-block', 'col-12', 'font-weight-bold', 'text-uppercase');

          // Si es de tipo error agrega una clase
          if (tipo === 'error') {
               divMensaje.classList.add('alert-danger');
          } else {
               divMensaje.classList.add('alert-success');
          }

          // Mensaje de error
          divMensaje.textContent = mensaje;

          // Insertar en el DOM
          document.querySelector('#contenido').insertBefore(divMensaje, document.querySelector('.agregar-cita'));

          // Quitar el alert despues de 3 segundos
          setTimeout(() => {
               divMensaje.remove();
          }, 3000);
     }

     imprimirCitas({ citas }) { // Se puede aplicar destructuring desde la función...

          this.limpiarHTML();

          citas.forEach(cita => {
               const { mascota, propietario, telefono, fecha, hora, sintomas, id } = cita;

               const divCita = document.createElement('div');
               divCita.classList.add('cita', 'p-3');
               divCita.dataset.id = id;

               // Scripting de los elementos
               const mascotaParrafo = document.createElement('h2');
               mascotaParrafo.classList.add('card-title', 'font-weight-bold');
               mascotaParrafo.innerHTML = `${mascota}`;

               const propietarioParrafo = document.createElement('p');
               propietarioParrafo.innerHTML = `<span class="font-weight-bold">Propietario: </span> ${propietario}`;

               const telefonoParrafo = document.createElement('p');
               telefonoParrafo.innerHTML = `<span class="font-weight-bold">Teléfono: </span> ${telefono}`;

               const fechaParrafo = document.createElement('p');
               fechaParrafo.innerHTML = `<span class="font-weight-bold">Fecha: </span> ${fecha}`;

               const horaParrafo = document.createElement('p');
               horaParrafo.innerHTML = `<span class="font-weight-bold">Hora: </span> ${hora}`;

               const sintomasParrafo = document.createElement('p');
               sintomasParrafo.innerHTML = `<span class="font-weight-bold">Síntomas: </span> ${sintomas}`;

               // Agregar un botón de eliminar
               const btnEliminar = document.createElement('button');
               btnEliminar.onclick = () => eliminarCita(id); // añade la opción de eliminar
               btnEliminar.classList.add('btn', 'btn-danger', 'mr-2');
               btnEliminar.innerHTML = 'Eliminar'

               // Añade un botón de editar
               const btnEditar = document.createElement('button');
               btnEditar.onclick = () => cargarEdicion(cita);

               btnEditar.classList.add('btn', 'btn-primary');
               btnEditar.innerHTML = 'Editar'

               // Agregar al HTML
               divCita.appendChild(mascotaParrafo);
               divCita.appendChild(propietarioParrafo);
               divCita.appendChild(telefonoParrafo);
               divCita.appendChild(fechaParrafo);
               divCita.appendChild(horaParrafo);
               divCita.appendChild(sintomasParrafo);
               divCita.appendChild(btnEliminar)
               divCita.appendChild(btnEditar)

               contenedorCitas.appendChild(divCita);
          });
     }

     limpiarHTML() {
          while (contenedorCitas.firstChild) {
               contenedorCitas.removeChild(contenedorCitas.firstChild);
          }
     }
}

export default UI;