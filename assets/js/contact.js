const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const comentario = document.getElementById("comentario");
const sexo = document.getElementById("sexo");
const terminos = document.getElementById("cbox");
const errores = document.getElementById("warnings");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    let warnings = "";
    let tieneErrores = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    event.preventDefault();
    if (nombre.value.length < 6) {
        warnings += `El nombre tiene que ser mayor a 6 caracteres <br>`;
        tieneErrores = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        tieneErrores = true;
    }
    if (comentario.value.length < 20) {
        warnings += `El comentario debe ser mayor a 20 caracteres <br>`;
        tieneErrores = true;  
    }
    if (!terminos.checked) {
        warnings += `Debes aceptar los terminos y condiciones <br>`;
        tieneErrores = true;
    }
    if(sexo.value == 0) {
        warnings += `Debes seleccionar un sexo <br>`;
        tieneErrores = true;
    }
    
    if (tieneErrores) {
        errores.innerHTML = warnings;
    } else {
        form.submit();
    }
})