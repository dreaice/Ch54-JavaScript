console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("Jen");


function saludar(nombre){
  console.log("Que te gustaría de regalo de cumpleaños + nombre");
}



/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/


const darRegalo = function (nombre, regalo){
  console.log(`Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen", "Sopa Maruchan con camarón");

/* 
Realizar una funcion declarada que sume dos números y retorne el resultado

Realizar una funcion expresada que reste dos números y retorne el resultado
*/

function sumNum(num1, num2){
  return num1 + num2;
}
const resultadoSuma = sumNum(5,3);
console.log(`El resultado de la Suma es: ${resultadoSuma}`);



const restaNum = function(num1, num2){
  return num1 - num2;
}

const resultadoResta = restaNum(10, 4);
console.log(`El resultado de la resta es: ${resultadoResta}`);

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function ( data ){
  console.log("Configuración inicial de la aplicación");
  console.log(`Valor de data ${data}`)
} )(18);
// setUp();

/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una funcion declara que calcule el área de un triángulo
// la funcion debe retornar el resultafo
// Área = (base * altura) / 2

function areaTriangulo (base, altura){
  return (base * altura) / 2;
}


let area = areaTriangulo(10, 5);

// Realizar una funcion expresada que calcule el área de un triángulo

const calculaArea2 = function (base, altura) {
  return (base*altura)/2;
}
console.log(`Resultado de Function Expresada: ${calculaArea2(12,20)}`);

// Realizar un arrow function para calcular el área de un triángulo

const areaTriangulo3 = (base, altura) => (base * altura) / 2;
console.log(`Resultado usando Arrow Function: ${areaTriangulo3(12,20)}`);

// Que sucede si uso consoloe.log como retorno?
const imprimirArea = (base, altura) => console.log(areaTriangulo3(base, altura));
imprimirArea(12, 20);

console.log(imprimirArea(12,20));

function imprimirEnConsola(mensaje){
  console.log(mensaje);
  //return undefined
}
console.log (imprimirEnConsola ("Hola Mundo")); // udefined

// Realizar una funcion flecha que calcule el área de un circulo
// Área = pi * radio^2
// Usar una funcion flecha para imprimir el resultado en un parrafo

const areaCirculo = (radio) => Math.PI * Math.pow(radio, 2);

const resultadoAreaCirculo = (radio) => {
  const area = areaCirculo(radio);
  document.getElementById("area-circulo").textContent = area.toFixed(2);
}
resultadoAreaCirculo(5);
/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona = (nombre="persona invitada" ) => console.log(`Hola ${nombre}, ya nos vamos a descansar`)

saludarPersona(); // Hola undefined, ya nos vamos a descansar
saludarPersona("Yorch");

console.log(parseInt("5")); // 5 (base 10: 0, 1, 2, 3, 4, 5, ...)
console.log(parseInt("1000")); // 1000 (base 10)
console.log(parseInt("1000", 10)); // 1000 (base 10)
console.log(parseInt("1000", 2)); // 8 (base 10)
console.log(parseInt("D2042D")); // NaN (base 10)
console.log(parseInt("D2042D", 16)); // 13763629


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */ 

const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola CH54");
                                            // 18 ("Hola CH54");
                                            // "Patito"("Hola CH54");
                                            // console.log("Hola CH54");

// imprimirMensaje( 18 ); // fncCallBack is not a function
// // imprimirMensaje( "Patito" ); // fncCallBack is not a function
imprimirMensaje( console.log ); // "Hola CH54"
// imprimirMensaje( console.log("Yorch") ); // fncCallBack is not a function
// imprimirMensaje( undefined ); //  fncCallBack is not a function

const enviarAParrafo = (mensaje) => {
  const saluda = "Hola buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`;
}

 // usando la función imprimirMensaje, enviar un callback para que
 // imprima con alert
imprimirMensaje(alert);

// ==================================================

/* 
Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/

// const sumarDosNumeros = (a, b) => a + b;

// const sumarEImprimir = (a, b, opcion) => {
//   const resultado = sumarDosNumeros(a, b);
//   const mensaje = (`La suma de ${a} + ${b} es: ${resultado}`);

//   // Imprimir en Consola
//   if(opcion === "consola") console.log(mensaje);
//   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje
//   else if (opcion === "h2") document.getElementById("resultado-sumatoria").innerText = mensaje
//   else alert (mensaje);
// }

// sumarEImprimir(10, 14); // se imprime en consola
// sumarEImprimir(50, 50, "parrafo"); // se imprime en el párrafo


const sumarDosNumeros = (a, b) => a + b;

const sumarEImprimir = ( a, b , imprimir = console.log) => {
  const resultado = sumarDosNumeros(a, b);
  const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
  imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
const imprimirEnDOMParagraph = (mensaje) =>{
 const refParagraph = document.getElementById("resultado-sumatoria");
 refParagraph.innerText = mensaje;
}
const imprimirEnDOMH2 = (mensaje) =>{
 const refParagraph = document.getElementById("resultadoH2-sumatoria");
 refParagraph.innerText = mensaje;
}
sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 20, 14, imprimirEnDOMH2); // se imprime en h2
// sumarEImprimir(50, 50, "parrafo"); // se imprime en el párrafo
// Imprimir en alert

sumarEImprimir (33, 34, alert);

// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor(numero){
  let factorial = 1;
  for(let i=0; i < numero; i++){
    factorial *= (numero - i);
    console.log(`ì: ${i}, facotrial: ${factorial}, numero: ${numero - i}`);
  }
  return factorial;
}

console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120

// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
  console.log(`Resolviendo el factorial de ${numero}`);
  if( numero <= 1  ) return 1 ;    
  const result = factorialConRecursividad( numero - 1 ) * numero ;
  console.log(`El factorial de ${numero} es ${result}`);
  return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120
/*
    parámetro   recursividad(n-1)   returnFnc
    1            ----               1
    2          2-1 = 1              2
    3          3-1 = 2              6
    4          4-1 = 3              24
    5          5-1 = 4              120
*/

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoConRecursividad( numeroSaludos){
  if(numeroSaludos <= 0) return numeroSaludos;
  const result = saludoConRecursividad(numeroSaludos - 1 ) ;
  console.log(`Saludo ${numeroSaludos}`);
  return result;
}
console.log(`Numero de saludos ${saludoConRecursividad(10)}`);