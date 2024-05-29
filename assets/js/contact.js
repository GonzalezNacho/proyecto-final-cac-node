const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const comentario = document.getElementById("comentario");
const errores = document.getElementById("warnings");
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (event) {
    let warnings = "";
    let entrar = false;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    event.preventDefault();
    if (nombre.value.length < 6) {
        warnings += `El nombre tiene que ser mayor a 6 caracteres <br>`;
        entrar = true;
    }
    if (!regexEmail.test(email.value)) {
        warnings += `El email no es valido <br>`;
        entrar = true;
    }
    if (comentario.value.length < 20) {
        warnings += `El comentario debe ser mayor a 20 caracteres <br>`;
        entrar = true;  
    }
    if (entrar) {
        errores.innerHTML = warnings;
    } else {
        form.submit();
    }
})