function registrarUsuario() {
    let nombre;
    let dni = '';
    
    nombre = prompt('Introduce tú nombre');
    
    while (!(/^\d{8}[a-zA-Z]$/.test(dni))) {
        dni = prompt("Introduce un número de DNI: 8 números y una letra");
    }
    
    // Se separan los números de la letra
    var letraDNI = dni.substring(8, 9).toUpperCase();
    var numeroDNI = parseInt(dni.substring(0, 8));
    
    // Se calcula la letra correspondiente al número
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var letraCorrecta = letras[numeroDNI % 23];
    
    if (letraDNI != letraCorrecta) {
        alert("Has introducido una letra incorrecta\nTu letra debería ser: " + letraCorrecta);
    } else {
        alert("DNI válido");
        console.log('Usuario registrado correctamente');
        console.log(`DNI: ${dni}\nNombre: ${nombre}`);
    }
}

registrarUsuario();