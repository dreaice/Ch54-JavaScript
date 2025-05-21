// src/js/saludo.js

export function mostrarSaludo(nombre) {
    const saludo = document.getElementById("saludo");
    saludo.textContent = nombre
      ? `Hola ${nombre}`
      : `Hola Persona Invitada`;
  }
  