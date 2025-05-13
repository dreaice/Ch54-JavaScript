/*
Objetivo:_ 
Crear un formilario simple donde el usuario
ingrese su edad en años y, al hacer clic en un
botón, se muestre su edad en meses.

Requisitos:
  - Crear un input para que el usuario ingrese su edad (en años).
  - Crear un botón "Calcular".
  - Al hacer click, mostrar un mensaje con la edad en meses
  - Usar conversion explícita de string a número (parseInt o Number).

  Resultado esperado:
  Si el usuario ingresa 25 y presiona el botón, se muestra:
  Tu edad en meses es: 300

consr edad = document.getElementById('birthdate').value;

  */

document.addEventListener('DOMContentLoaded', function (){
    const boton = document.getElementById('calculate');
    
    boton.addEventListener('click', function() {
        const edadStr = document.getElementById('birthdate').value;
        const edad = parseInt(edadStr);

        if (isNaN(edad) || edad <= 0){
            document.getElementById('result').innerText = `Ingrese una edad válida!`;
            return;
        }

        const edadEnMeses = edad * 12;
        document.getElementById('result').innerText = `Tu edad en Meses es: ${edadEnMeses}`;
    });
} );