// Consigna:
// Crear una función esHoraValida que tome como argumento un string hora con el formato HH:mm y determine si es una hora válida del día o no
// Ejemplos:
// esHoraValida('12:23') // true
// esHoraValida('12:65') // false
// esHoraValida('28:05') // false
// esHoraValida('00:00') // true

const esHoraValida = (hora) => {
    const horas = Number(hora.split(':')[0]);
    const minutos = Number(hora.split(':')[1]);
    return horas >= 0 && horas < 24 && minutos >= 0 && minutos < 60;
}

console.log(esHoraValida('12:23'));
console.log(esHoraValida('12:65'));
console.log(esHoraValida('28:05'));
console.log(esHoraValida('00:00'));