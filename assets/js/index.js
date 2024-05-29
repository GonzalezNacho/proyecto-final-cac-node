const formsHtml = document.getElementsByClassName('form-buscar');
for (const form of formsHtml) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const busqueda = form.children[0].value ;
        if (busqueda.length < 3) {
            mostrarModal();
            form.children[0].value  = '';
        } else {
            window.location.href = `busqueda.html?search=${busqueda}`;
        }
    })
}

const botonNav = document.getElementById('icono-nav');
const menuResponsive = () => {
    const nav = document.getElementById("nav");
    nav.className==="" ? nav.className = "responsive" : nav.className = "";
}

botonNav.addEventListener('click', menuResponsive);

function mostrarModal() {
    const modal = document.querySelector(".modal");
    let contenidoModal =
    `<div class="modal_container">
        <i id="closeModal" class="fa-solid fa-circle-xmark"></i>
        <h4>La busqueda debe tener 3 o mas caracteres</h4>
    </div>`;
    modal.innerHTML= contenidoModal;
    modal.classList.add("modal--show");
    document.getElementById('closeModal').addEventListener('click', cerrarModal);
}

function cerrarModal() {
    const modal = document.querySelector(".modal");
    modal.classList.remove("modal--show");
}