// Consigna:
// Crear una función esConsonante que tome como argumento un string letra y devuelva true si letra es una consonante o false si no lo es
// Ejemplos:
// esVocal('a') // false
// esVocal('n') // true

const esVocal = (letra) => { 
    if (letra.match(/[aeiou]/)) {
        return true;
    } else {
        return false;
    }
}

const esConsonante = (letra) => {
    if (!esVocal(letra)) {
        return true;
    } else {
        return false;
    }
}

console.log(esConsonante('a'));
console.log(esConsonante('n'));