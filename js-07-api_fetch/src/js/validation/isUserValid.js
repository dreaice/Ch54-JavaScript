import { validateName } from "./validateName";

/**
 * Valida si un usuario es válido
 * @param {object} user - Objeto que representa al usuario
 * @property {string} user.name - Nombre del usuario
 * @property {string} user.email - Correo electrónico del usuario
 * @property {string} user.password - Contraseña del usuario
 * @returns 
 */

const isUserValid = (user) => {
    const result = {
        isValid: true,
        error: []
    };


    /* 
    Validar todos los atributos del usuario
    */
    const nameValidation = validateName(user.name);    
    if (nameValidation.isValid === false) {
        result.isValid = false;
        result.error.push(nameValidation.errors);
    }

    return 
}

export {isUserValid};