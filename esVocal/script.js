// Consigna:
// Crear una función esVocal que tome como argumento un string letra y devuelva true si letra es una vocal o false si no lo es.
// Ejemplos:
// esVocal('a') // true
// esVocal('n') // false

const esVocal = (letra) => {  
    let vocal = /[aeiou]/;
    if (letra.match(vocal)) {
        return true;
    } else {
        return false;
    }
}

console.log(esVocal('a'));
console.log(esVocal('n'));