const STORAGE_KEY = "nombreUsuario";

export function guardarNombre(nombre) {
  localStorage.setItem(STORAGE_KEY, nombre);
}

export function borrarNombre() {
  localStorage.removeItem(STORAGE_KEY);
}

export function obtenerNombre() {
  return localStorage.getItem(STORAGE_KEY);
}
