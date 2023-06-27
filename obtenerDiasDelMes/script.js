// Consigna:
// Crear una función obtenerDiasMes que tome como argumento un string mes y devuelva un número dependiendo de la cantidad de días que tenga ese mes
// Ejemplos:
// obtenerDiasMes("diciembre") // 31
// obtenerDiasMes("febrero")   // 29

const obtenerDiasMes = (mes) => {
    if (mes === 'enero' || mes === 'marzo' || mes === 'mayo' || mes === 'julio' || mes === 'agosto' || mes === 'octubre' || mes === 'diciembre') {
        return Number(31);
    } else if (mes === 'febrero') {
        return Number(29);
    }
    return Number(30);
}

console.log(obtenerDiasMes("diciembre"));
console.log(obtenerDiasMes("septiembre"));
console.log(obtenerDiasMes("febrero"));