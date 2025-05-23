
const myArray = [1,2,3,4];
const unionArray = myArray.join(" - ") // 1 - 2 - 3 - 4
myArray.push(5,6,7,8);
const arrayData = myArray[3]; // 4

for (let i = 0; i < myArray.length; i++) {
    const e = myArray[i];
}


const myObj = { 
    "atributo con espacio" : true,
    key : "valor",
    name : "Yorchpheus",
    firstName : "Aragon",
    email : "yorchpheus@matrix.com",
    password : "DespertarRojo&",
    birthdate : "1991-09-08",
    isActive : true,
    hobbies : ["F1, NFL, Cine, Nadar"],
    favoritos : {
        bebidas : ["cerveza", "agua", "ron", "tequila", "coca-cola"],
        comidas : ["tacos de tripa", "birria", "tortas ahogas"],
    },
    saludar : function myFunction ( persona ){
        return `Hola ${persona}`;
    }
};

const ejecutarObjetos = () => {

// Leer datos del Objeto
const nombrePersona = myObj.name // Yorchpheus
const favoritos = myObj.favoritos.bebidas // ["cerveza", "agua", "ron", "tequila", "coca-cola"]
const segundaBebida = favoritos[1]; // "agua"
const terceraBebida = myObj.favoritos.bebidas[2]; // "ron"

// Acceder al atributo first name: 
/* 
    - Mas legible y corta
    - Usada comunmente y preferida cuando conoces el nombre de la propiedad
*/
const nombre = myObj.firstName; // Aragon

/* 
    - Soporta nombres con espacio, simbolo o dinamicos.
*/
const primerNombre = myObj["firstName"]; // Aragon

// Ejecutar funciones de mi objeto
const mensaje = myObj.saludar("Naty");
console.log(mensaje); 

// ================== Optional HCaining
// Sirve para acceder  a propiedades de objetos de forma segura evitando,
// errores si una propiedad intermedia no existe
// const primeraComida = myObj.favoritos.alimentos; // undefined por que no existe el atributo alimentos
// const primeraComida = myObj.favoritos.alimentos[0]; // Cannot read properties of undefined
// const primeraComida = myObj?.favoritos?.alimentos[0] // undefined

// Iterar un objeto
// for in itera sobre los atributos de un objeto
for ( let clave in myObj){
    console.log(clave, myObj[clave]); // myObj.name , myObj.firstName
}
}
export {ejecutarObjetos};