import { insertMainHeader as menu } from "../../modules/header/header.js";
import { insertMainFooter as pie} from "../../modules/footer/footer.js";
import { leerInputsFormulario } from "./leerInputsFormulario.js";
import { ejecutarObjetos } from "./objetos.js";
import { isUserValid } from "../../js/validation/isUserValid.js";

ejecutarObjetos();

// Insertar header
menu (document.getElementById("header") );

// Insertar footer
pie (document.getElementById("footer") );

const registerForm = document.getElementById("contactForm")

// registerForm.addEventListener("evento", () => {});
registerForm.addEventListener("submit", ( e ) => {
    e.preventDefault(); // Evita que se envíe el formulario
    document.getElementById("alert-message").style.display = "none";
    document.getElementById("error-message").style.display = "none";

    console.log("Manejo del Formulario");

    // Obtener los datos del Formulario
    // Obtener los datos del formulario
    const newUser = leerInputsFormulario(registerForm);
    const aceptaTerminos = document.getElementById("terminos-condiciones").checked;
    const validatedUser = isUserValid(newUser);
    // Validar los datos del Formulario
    

    
    // Si los datos son válidos enviar el formulario.
        // - Usando api fetch al servidor con el método POST enviar el formulario
            // = Enviar un mensaje al usuario "Felicidades, ya fuiste Registrado" y redirigit la página.

            // = Enviar al usuario un alert  del error del servidor.

    // Si los datos no son válidos, enviar un mensaje al usuario. 

});