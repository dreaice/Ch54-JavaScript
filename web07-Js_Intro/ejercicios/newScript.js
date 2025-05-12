function cambiarNombre(){
    const nuevoNombre = prompt("¿Cúal es tu Nombre?");
    if (nuevoNombre){
        document.getElementById("saludo").textContent = `¡Hola ${nuevoNombre}!`;
    }
}