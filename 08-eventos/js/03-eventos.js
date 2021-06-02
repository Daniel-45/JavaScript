'use strict'

/* 
1. Formulario campos: Nombre, Apellidos, Fecha Nacimiento, teléfono, Email, Género, Descripción
2. Botón de enviar Formulario: Evento submit 
3. Botón que al hacel click muestra los datos actuales del formulario
4. Validar el formulario
*/

document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM cargado");

    let datos = document.getElementById('mostrar');
    datos.style.display = "none";

    let formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function () {
        console.log("Evento submit capturado");

        let nombre = document.getElementById('nombre').value;
        let apellidos = document.getElementById('apellidos').value;
        let edad = document.getElementById('edad').value;
        let telefono = document.getElementById('telefono').value;
        let email = document.getElementById('email').value;
        let descripcion = document.getElementById('texto').value;

        console.log(nombre, apellidos, edad, telefono, descripcion);

        datos.style.display = "block";

        let pNombre = document.querySelector("#pNombre span");
        let pApellidos = document.querySelector("#pApellidos span");
        let pEdad = document.querySelector("#pEdad span");
        let pTelefono = document.querySelector("#pTelefono span");
        let pEmail = document.querySelector("#pEmail span");

        pNombre.innerHTML = nombre;
        pApellidos.innerHTML = apellidos;
        pEdad.innerHTML = edad;
        pTelefono.innerHTML = telefono;
        pEmail.innerHTML = email;
    });
});