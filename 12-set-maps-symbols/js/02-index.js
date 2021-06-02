// WeakSet
// A un WeakSet solo se le pueden pasar objetos
const weakset = new WeakSet();

const persona = {
    nombre: 'Daniel',
    apellidos: 'Pompa Pareja',
    email: 'daniel.pompa@gmail.com'
}

weakset.add(persona);
console.log(weakset);