
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
        const escalarNumero = numeroAleatorio * 10; // 0.0 ... 10.999...
        // const numerosEnteros = Math.floor(escalarNumero); // 0 ... 10
        console.log("Número aleatorio: "); // 0.0...10.0
    }
    
};
generarNumerosAleatorios(5);

const generarNumerosAleatorios2 = (cantidad, minNum = 0, maxNum = 10) => {
   
    for (let i = 0; i <= cantidad; i++) {
        const numeroAleatorio2 = Math.random(); // 0.999...
        const escalarNumero2 = numeroAleatorio2 * (maxNum); // 0.0 ... 10.999...
        const numerosEnteros2 = Math.floor(escalarNumero2); // 0 ... 10
        console.log("Número aleatorio2: ", numerosEnteros2); // 0.0...10.0
    }
    
};
generarNumerosAleatorios2(5);

const generarNumerosAleatorios3 = (cantidad, minNum = 50, maxNum = 60) => {
   
    for (let i = 0; i < cantidad; i++) {
        const numeroAleatorio3 = Math.random(); // 0.999...
        const escalarNumero3 = numeroAleatorio3 * ((maxNum - minNum) + 1); // 0.0 ... 10.999...
        const numerosEnteros3 = Math.floor(escalarNumero3 + minNum); // 0 ... 10
        console.log(`Número aleatorio3 entre ${minNum} y ${maxNum}: `, numerosEnteros3); // 0.0...10.0
    }
    
};
generarNumerosAleatorios3(10, 50, 60);

/*
    Melate Chocolate
    - Al pulsar el boton Generar mis números de la suerte
    1. Generar 6 nunmeros entre el 1 y el 54. 
    2. Mostrar el resultado en el DOM
    
*/
/**
 * Generar un numero aleatorio entre un ranfo de números
 * @param {*} minNum
 * @param {*} maxNum
 */
const generarNumeroRandom = (minNum, maxNum) => {
    const numeroRandom = Math.random();
    const escalarNumero = numeroRandom * ((maxNum - minNum) + 1);
    const numeroEntero = Math.floor(escalarNumero + minNum);
    return numeroEntero;
};

const elNumeroExisteEnArreglo = (arreglo, numero) => {
    for (const elemento of arreglo) {
        if (elemento === numero) return true;
    }
    return false;
};

const melateChocolate = (numeros) => {
    const referencia = document.getElementById("melate-chocolate");
    referencia.innerHTML = `${numeros.join(' - ')}`;
};

const generarNumerosDeLaSuerte = (size = 6, minNum = 1, maxNum = 54) => {
    const numeros = [];
    let iteracion = 1;

    while (numeros.length < size) {
        const numRandom = generarNumeroRandom(minNum, maxNum);
        if (!elNumeroExisteEnArreglo(numeros, numRandom)) {
            numeros.push(numRandom);
        }
        console.log(`Iteración ${iteracion}:`, numeros, `Nuevo número: ${numRandom}`);
        iteracion++;
    }

    // Ordenar los números de menor a mayor
    numeros.sort((a, b) => a - b);

    melateChocolate(numeros);
};

document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("btn-generar");
    boton.addEventListener("click", () => {
        generarNumerosDeLaSuerte();
    });
});

// ------------------- Uso del método sort() ----------------------------
const numerosIniciales = [5, 33, 8, 100, 4, 2, 7, 6];
                      // [5, 33, 8, 100, 4, 2, 7, 6] iteracion 0
                      // [5, 8, 33, 100, 4, 2, 7, 6] iteracion 1
                      // [5, 33, 8, 100, 4, 2, 7, 6] iteracion 2
                      // [5, 33, 8, 4, 100, 2, 7, 6] iteracion 3
                      // [5, 33, 8, 4, 2, 100, 7, 6] iteracion 4
                      // [5, 33, 8, 4, 2, 7, 100, 6] iteracion 5
                      // [5, 33, 8, 4, 2, 7, 6, 100] iteracion 6
                      

const comparaNumeros = (a, b) => {
    if ( a < b) return -1;
    if ( a > b) return 1;
    return 0;
}

const ordenarNumeros = ( numerosDesordenados, fncCallBack )=>{
    const numerosOrdenados = numerosDesordenados;
    numerosOrdenados.sort(fncCallBack);
    return numerosOrdenados;
}

console.log(numerosIniciales); // [5, 33, 8, 100, 4, 2, 7, 6]
console.log(ordenarNumeros(numerosIniciales, comparaNumeros)); // [2, 4, 5, 6, 7, 8, 33, 100]
console.log(ordenarNumeros([28, 37, 99, 52, 5], comparaNumeros)); // [5, 28, 37, 52, 99]

// Descendente
const numerosInicialesDes = [12, 33, 24, 100, 4, 1, 69, 6];
const numerosInicialesDes2 = [12, 33, 12, 24, 68, 100, 3, 4, 21, 1, 71, 69, 19, 6, 28, 33, 15, 12, 18];

const comparaNumerosDes = (a, b) => {
    if ( a < b) return 1;
    if ( a > b) return -1;
    return 0;
}

const ordenarNumerosDes = ( numerosDesordenadosDes, fncCallBack )=>{
    const numerosOrdenadosDes = numerosDesordenadosDes;
    numerosOrdenadosDes.sort(fncCallBack);
    return numerosOrdenadosDes;
}

console.log(numerosInicialesDes); // [12, 33, 24, 100, 4, 1, 69, 6]
console.log(ordenarNumerosDes(numerosInicialesDes, comparaNumerosDes)); // [100, 69, 33, 24, 12, 6, 4, 1]
console.log(ordenarNumerosDes(numerosInicialesDes2, comparaNumerosDes)); // [100, 69, 33, 24, 12, 6, 4, 1]