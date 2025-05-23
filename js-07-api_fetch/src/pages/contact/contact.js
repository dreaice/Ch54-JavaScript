/*
 API: Application Programming Interface
   Permite la comunicación entre dos aplicaciones de software
   a travéz de un conjunto de reglas.
 La API Fetch nos ayuda a acceder y manipular 
 peticiones HTTP (DELETE, GET, POST, PUT).
 
 Sintaxis:
    fetch(resource, options)
 Las promesa es un patrón asincrónico que se utiliza
 para manejer operaciones asíncronas.
 Las promesas permite realizar tareas asíncronas y
 manejar los resultados (éxito o error) en un momento posterior.
 Las promesas tiene 3 estados:
 1.- Pending: El estado inicial de una promesa antes de que se resuelva o rechace
 2.- Resolved: La promesa se resuelve con un valor
 3.- Rejected: La promesa se rechaza con un razón
*/

// const irPorElElote = (horaDelDia) => {
//     //const miPromesa = new Promise( fncCallBack );
//     const miPromesa = new Promise((fncCallBackResolve, fncCallBackReject) => {
//         console.log("voy por el elote en la " + horaDelDia); // esta tarea puede demorar mucho o poco
//         if (horaDelDia === "día" || horaDelDia === "tarde") {
//             fncCallBackResolve("Toma tu elote que está dentro de una bolsa");
//         } else {
//             fncCallBackReject({ error: 404, descripcion: "Elote no fue encontrado" });
//         }
//     });
//     return miPromesa;
// };

/**
 *  Realizar un función de tipo Promise que reciba lo siguiente
 *  @param{number} el número de vueltas de amarre de la bolsa
 * 
 *  - La promesa se resuelve si el núm de vueltas es menor o igual a 2
 *    se resuelve con el texto "ñomi ñomi, me como mi elote"
 *  - Si num. de vueltas es mayor a 2, la promesa se rechaza
 *    con el texto "ups, se me cayó tu elote"
 *  
 */


// const numDeVueltas = ( number ) =>{
//    const miPromesa = new Promise( ( fncCallBackResolve, fncCallBackReject )=>{
//     console.log("el numero de vueltas es: "+ number);
//        if( number <= 2 ){
//           fncCallBackResolve({mensaje:"ñomi ñomi, me comi mi elote", vueltas: vueltasAleatorias() });
//        } else {
//           fncCallBackReject( {error: 404, descripcion: "upss se me cayo el elote"}  );
//        }       
//    } );
// return miPromesa;
// }


// //miFuncionPromesa().then( callback )
// // .catch( callback )
// // .finally( callback );
// const vueltasAleatorias = (min=1, max=10)=> Math.floor(Math.random()*( max - min + 1)) + min;
// irPorElElote("tarde")
//     .then((response) => console.log("1eraPromesa", response));

// irPorElElote("noche")
//     .then((response) => console.log("2daPromesa", response))
//     .catch((error) => console.log(`Promesa rechazada`, error))
//     .finally(() => console.log("Se ha terminado tu promesa"));


// /*
// La funcion de llama ponerChilito()
// La funcion NO tiene parámetro de entrada.
// Realizar una promesa que retorne en el estado resolve: "Chilito del que pica".

// La funcion no debe tener Reject
// */

// const ponerChilito = () => {
//     return new Promise((resolve) => {
//         resolve("Chilito del que pica");
//     });
// };

// // Prueba la función
// ponerChilito()
//     .then((respuesta) => console.log(respuesta));


//     // Ya tengo mi elote, pero falta abrir la bolsa

// const tiempo = "tarde";
// irPorElElote(tiempo)
//     .then((response) => {
//         console.log("Promesa", tiempo, response);
//         const vueltas = vueltasAleatorias(); // Genera las vueltas aquí
//         return numDeVueltas(vueltas); // Llama a la promesa con un número válido
//     })
//     .then((response) => console.log(tiempo, response))
//     .catch((error) => console.log(error))
//     .finally(() => console.log("Se ha terminado tu promesa"));

// Nueva funcion: 

const vueltasAleatorias = (min = 1, max = 10) => Math.floor(Math.random() * (max - min + 1)) + min;

const irPorElElote = (horaDelDia) => {
    return new Promise((resolve, reject) => {
        console.log("Voy por el elote en la " + horaDelDia);
        if (horaDelDia === "día" || horaDelDia === "tarde") {
            resolve("Toma tu elote que está dentro de una bolsa");
        } else {
            reject({ error: 404, descripcion: "Elote no fue encontrado" });
        }
    });
};

const numDeVueltas = (number) => {
    return new Promise((resolve, reject) => {
        console.log("El número de vueltas es: " + number);
        if (number <= 2) {
            resolve("ñomi ñomi, me comí mi elote");
        } else {
            reject({ error: 404, descripcion: "Ups, se me cayó el elote" });
        }
    });
};

const ponerChilito = () => {
    return new Promise((resolve) => {
        resolve("Chilito del que pica");
    });
};

// Lógica completa
const tiempo = "tarde"; // cambia a "noche" si quieres ver el rechazo

irPorElElote(tiempo)
    .then((respuestaElote) => {
        console.log("✅ Elote listo:", respuestaElote);
        const vueltas = vueltasAleatorias();
        return numDeVueltas(vueltas);
    })
    .then((mensajeElote) => {
        console.log("✅", mensajeElote);
        return ponerChilito();
    })
    .then((chilito) => {
        console.log("🌶️", chilito);
        console.log("🎉 ¡Listo! Tienes tu elote con chilito.");
    })
    .catch((error) => {
        console.log("❌", error.descripcion);
    })
    .finally(() => {
        console.log("🍴 Proceso del elote terminado.");
    });

/*    const tiempo2 = "tarde"; 
    irPorElElote( tiempo2 )
        .then( ( response )=> {
            console.log("Promesa", tiempo2, response);   
            return numDeVueltas(response.vueltas);
        })
        .then( (response)=>  console.log( "Promesa n.Vueltas", response ))
        .catch( ( error )=> console.log(`Promesa rechazada`, error) )
        .finally( ()=> console.log("Se ha terminado tu promesa")  );
*/

// =================== Uso de Async / Await
const crisQuiereElote = async () => {
    const tiempo = "tarde";
    try {
        const response = await irPorElElote(tiempo);
        console.log("✅ Elote listo:", response);
        
        const vueltas = vueltasAleatorias();
        const respuestaBolsa = await numDeVueltas(vueltas);
        console.log("✅", respuestaBolsa);
        
        const mensajeFinal = await ponerChilito();
        console.log("🌶️", mensajeFinal);
        
        console.log("🎉 ¡Cris tiene su elote con chilito!");
    } catch (error) {
        console.log("❌", error.descripcion);
    } finally {
        console.log("🍴 Proceso del elote terminado.");
    }
};

crisQuiereElote();

 // ============== Uso de la api fetch ====================
 async function myfunction(){}

let currentPage = 1;
let loading = false; // Para evitar múltiples llamadas

// Obtener personajes de una página específica
const leerProductos = async (page = 1) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
  const data = await response.json();
  console.log = (data);
  return data.results;
  
};

// Construir tarjetas
const contruirTarjetasDeRickAndMorty = (personajes) => {
  return personajes.map((personaje) => (
    `<div class="col-12 col-md-4 col-lg-3 mb-4">
      <div class="card h-100">
        <img src="${personaje.image}" class="card-img-top" alt="${personaje.name}">
        <div class="card-body">
          <h5 class="card-title">${personaje.name}</h5>
          <p class="card-text">Some quick example text.</p>
          <a href="#" class="btn btn-primary">${personaje.species}</a>
        </div>
      </div>
    </div>`
  ));
};

// Insertar al DOM (agrega, no reemplaza)
const insertarTarjetasAlDom = (tarjetas, idDOM = "cards") => {
  const refDom = document.getElementById(idDOM);
  refDom.insertAdjacentHTML("beforeend", tarjetas.join(""));
};

// Cargar nueva página
const cargarMasPersonajes = async () => {
  if (loading) return;
  loading = true;
  const personajes = await leerProductos(currentPage);
  const tarjetas = contruirTarjetasDeRickAndMorty(personajes);
  insertarTarjetasAlDom(tarjetas);
  currentPage++;
  loading = false;
};

// Scroll infinito
window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 300) {
    cargarMasPersonajes();
  }
});

// Cargar los primeros personajes
cargarMasPersonajes();
