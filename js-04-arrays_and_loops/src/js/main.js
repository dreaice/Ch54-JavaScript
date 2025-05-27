
// =============== Declarar un arreglo ===============
const myArray = []; // []
const myArray2 = new Array(); // []

const myArray3 = [5]; // [5]
const myArray4 = new Array(5); // [undefined, undefined, undefined, undefined, undefined]

const myArray5 = [5,6]; // [5,6]
const myArray6 = new Array(5,6); // [5,6]

// ============ Iterar un  arreglo con for loop ============
/*
 Sintaxis:
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

*/
const nombres = ["Juan", "Pedro", "María", "Ana"];
for ( let index = 0; index < nombres.length; index++ ){
    console.log( nombres[index] ); // Juan, Pedro, María, Ana
}



// Simplificaciones en la iteración de un arreglo
// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/

const colores = ["Rojo", "Azul", "Verde", "Amarillo"];

for (let i = 0; i < colores.length; i++) {
    const element = colores[i];
    console.log(element);    
}

for ( const color of colores ) {
    console.log( color );
}

// ---------------------- Ejercicio con for of ---------------------
/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 */
const cantantes2 = ["Juan Gabriel", "José José", "Rocío Dúrcal", "Ana Gabriel"];
const refListaCantantes = document.getElementById("cantantes-lista");

// Imprimir en consola cada uno de los cantantes, usando for-of
// usar un arrow function.
// La salida debe de ser com "Juan Gabriel" - "José José" - "Rocío Dúrcal" - "Ana Gabriel"

const imprimirCantantes = ( listaCantantes ) => {
    let cantantesConcatenados = "";
    for (const cantante of listaCantantes) {
        // cantantesConcatenados = cantantesConcatenados + cantante + " - ";
        cantantesConcatenados += cantante + " - ";
    }
    return cantantesConcatenados;
}
console.log(imprimirCantantes(cantantes2) );

// imprimirCantantes3(arrayCantantes) {
//     console.log(arrayCantantes.join(" - "));
// }
// imprimirCantantes3(cantantes);

/**
 *  Del siguiente arreglo de cantantes, mostrar en el DOM, el listado como unorder list.
 *  const cantantes = ["Joan Manuel Serrat", "Silvio Rodriguez", "Alberto Cortés", "Ana Belén", "Joaquín Sabina", "Victor Manuel"];
 *  - Usar for of
 *  - De preferencia usar una función 
 *  <li>Joaquín Sabina</li> 
 */
const cantantesTrova = [
    "Joan Manuel Serrat", 
    "Silvio Rodriguez", 
    "Alberto Cortés", 
    "Ana Belén", 
    "Joaquín Sabina", 
    "Victor Manuel"];
function cantantesEnLista(lista){
    const ul = document.getElementById("cantantes-lista");

    for (const cantante of lista ){
        const li = document.createElement("li");
        li.textContent = cantante;
        ul.appendChild(li);
    }
}

cantantesEnLista(cantantesTrova);

// ------------------- Uso de break en ciclos ----------------------------
// break detiene la ejecución de la iteración en curso y termina el ciclo.

let iteracion = 0;

for ( ;   ;  ){
    console.log( `Núm de iteración: ${iteracion}` ); // 0, 1, 2, 3, 4
    iteracion++;
    if ( iteracion === 5 ){
        break;
    }
}

// ------------------- Uso de break y label en ciclos anidados ----------------------------
multiplicando:
for (let i = 1; i <= 7; i++ ){
    multiplicador:
    for (let j = 1; j <= 10 ; j++){        
        console.log(`${i} x ${j} = ${i * j}`);             
        if( i >= 4 ) break multiplicando;
    }

}





// ------------------- Uso de continue en ciclos ----------------------------
// break: Termina completamente un bucle (for, while, switch, etc.).
// continue: Salta la iteración actual y pasa a la siguiente sin salir del bucle.

console.log(   NaN === NaN );  // false
for (let i = 0 ; i <= 5; i++ ){
    if ( i === 3) continue;
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
}

for (let i = 0 ; i <= 5; i++ ){
    if ( i !== 3){ 
    console.log("Estoy dentro del ciclo for"); 
    console.log("Valor de i ", i ); // 0, 1, 2,  4 , 5
    }
}



// ============== Ciclo While ======================
//                (while loop)
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla.

 Sintaxis:
    while( condición) sentencia;

    while ( condición ){
        sentencias;
    }

*/
 /*
Pregunta al usuario si quiere que se genere su número de la suerte
Si la respuesta es "si", genera de forma aleatoria un número
En caso contrario, despedirse. 
 */

// while( confirm ("Quieres tu número de la suerte?") ){
//     const numeroSuerte = Math.random();
//     console.log("Tu número de suerte es: " + numeroSuerte);
// }

/*
Uso de Math.Randon();

Generar 5 números aleatorios.
Los números deben estar entre el 0.0 y el 10.0 (sin incluir el 10.0)
*/

const generarNumerosAleatorios = (cantidad) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio = Math.random(); // 0.999...
        const escalarNumero = numeroAleatorio * 10; // 9.999...
        const numerosEnteros = Math.floor(escalarNumero); //
        console.log("Número aleatorio: ", numerosEnteros); // 0.0...10.0
    }
    return numerosAleatorios;
};
generarNumerosAleatorios(5);