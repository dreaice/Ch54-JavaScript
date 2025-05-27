/*
 El control flow (flujo de control) en JavaScript describe cómo 
 se ejecutan las instrucciones de un programa, desde el inicio 
 hasta el final. Se basa en estructuras como secuencias, 
 condiciones y bucles que determinan qué parte del código se ejecuta y cuándo.

*/

// ----------------- Condicional if-else --------------------
/*
 Ejecuta una sentencia si una condición específica es
 evaluada como verdadera.

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    } else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

/* 
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18, la función debe
 retornar el mensaje "Eres mayor de edad".
 En caso contrario, retornar el mensaje "Eres menor de edad".
 - Realizar la versión de if-else sin usar el bloque de código {}
*/

const verificarEdad = edad => {
    if (edad >= 18) return "Eres mayor de edad";
    else return "Eres menor de edad";
}
const resultado1 = verificarEdad(19);
console.log(resultado1);

/*
 Crear un arrow function que reciba el valor de edad.
 Si la edad es mayor o igual a 18 y menos o igual a 30,
 la función debe retornar el mensaje "Tu luchador era Místico".

 Si eres mayor o igual a 31, el mensaje "Tu luchador es el Blue Demon"

 Si es menor a 18 el mensaje "Tu luchador es Penta"

*/

const verificarEdad2 = edad => {
    if (edad >= 18 && edad <= 30) return "Tu luchador es Místico";
    else if (edad >= 31) return "Tu luchador es el Blue Demon";
    else return "Tu luchador es Penta";
}
console.log(verificarEdad2(33));  // Imprime: Tu luchador es el Blue Demon

// Bloque de código
{
let myVarLet = 30;
const myVarConst = 40;
var myVarVar = 50;
console.log(myVarLet, myVarConst, myVarVar); // 30, 40, 50
    {
    let myVarLet = 100;
    const myVarConst = 110;
    var myVarVar = 120;
    console.log(myVarLet, myVarConst, myVarVar); // 100, 110, 120
    }
    console.log(myVarLet, myVarConst, myVarVar); // 30, 40, 120
}

// Ejercicios Mentales: 
let active = false;
if( active === true); {
    console.log("Esta activo");
}
console.log("Fin del Programa");

// --------------------------
active = false;
if( active === true )
    console.log("Está Activo");
    console.log("Tiene Autorización");

console.log("Fin del Programa")

// -------------------------- Ejercicio 3
active = false;
if( active ); console.log("Está activo");
// else console.log("No está activo"); // Unexpected token 'else'
// console.log("Fin del Programa");

//--------------- Condicional Switch --------------------------
/*
 La condicional Switch evalua una expresión y se compara
 con el valor de cada instancia en 'case' y se ejecuta las
 sentencias asociadas a ese 'case' hasta encontrar
 la sentencia 'break' o se finalicen todas las sentencias
 de la condicional switch.

 Para comparar la condicional switch usa el operador estricto ===

 Sintaxis:
  switch (expresión) {
    case valor1:
        sentencia;
        break;
    case valor 2:
        sentencias;
        break;
    case valor n:
        sentencias;
        break
    default:
        sentencias;
        break;
  }

*/

const evaluarNombre = ( nombre ) => {
    let resultado;
    switch ( nombre ){
        case "Lua":
            resultado = "Es de Abril"
        case "T'Challa": case "Smooky":
            resultado = "Es de Naty"; 
            break;
        case "Shuri":
            resultado = "Es de Yorch";
            break
        case "Eros":
            resultado = "Es de Chagua";
            break
        default:
            resultado = "No se sabe de quien es.";
    }
    return resultado;
}
console.log(evaluarNombre("T'Challa") ); // Es de Naty
console.log(evaluarNombre("Shuri") ); // Es de Yorch
console.log(evaluarNombre("Eros") ); // Es de Chagua

const nombreMascota = "T'Challa";


/**
 * Función que reciba la velocidad de un ventilador y devuelva el mensaje
 * de la velocidad del ventilador en:
 * Velocidad 0: Apagado
 * Velocidad 1: Baja
 * Velocidad 2: Media
 * Velocidad 3: Alta
 * Cualquier otro valor: Velocidad desconocida
 * @param {number} velocidad
 * @returns {string} mensaje
 */




// ------------------------ Operador ternario --------------------------
/*
 Es el único operador de JavaScript que tiene 3 operandos.
 Generalmente se utiliza como opción a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/




/**
 *  Función que reciba la edad de una persona y devuelva el mensaje:
 *  Si la edad es mayor o igual a 18 años: Eres mayor de edad
 *  En caso contraio: Eres menor de edad
 *  @param {number} edad
 *  @returns {string} mensaje
 */




// ------------------- Ejercicio Estaciones del año --------------------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/


