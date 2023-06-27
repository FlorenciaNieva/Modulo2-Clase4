// Consigan:
// Crear una función avanzarSemaforo que acepte como argumento un string colorActual y devuelva un string con el siguiente color del semáforo, siguiendo el orden: verde -> amarillo -> rojo -> verde
// Ejemplos:
// avanzarSemaforo('verde')     // 'amarillo'
// avanzarSemaforo('amarillo')  // 'rojo'
// avanzarSemaforo('rojo')      // 'verde'

const avanzarSemaforo = (colorActual) => {
    if (colorActual === 'verde') {
    return ('amarillo');
    } else if (colorActual === 'amarillo') {
    return ('rojo');
    }
    return ('verde');
}

console.log(avanzarSemaforo('verde'));
console.log(avanzarSemaforo('amarillo'));
console.log(avanzarSemaforo('rojo'));