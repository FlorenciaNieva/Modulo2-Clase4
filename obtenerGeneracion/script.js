// Consigna:
// Crear una función obtenerGeneracion que tome como argumento un número anioNacimiento y devuelva un string con la generación a la que pertenece, siguientdo estas reglas:
// Generación	     Años de nacimiento
// Baby boomer	     1949-1968
// Generación X	     1969-1980
// Millennials	     1981-1993
// Generación Z	     1994-2010

const obtenerGeneracion = (anioNacimiento) => {
    if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
        return ('Baby boomer');
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
        return ('Generación X');
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
        return ('Millennials');
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
        return ('Generación Z');
    }
    return ('No se encontro la generación a la que pertenece el año')
}
