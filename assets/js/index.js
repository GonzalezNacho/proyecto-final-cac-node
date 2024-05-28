const formsHtml = document.getElementsByClassName('form-buscar');
for (const form of formsHtml) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const busqueda = form.children[0].value ;
        if (busqueda.length < 3) {
            alert(`Por favor, introduce una palabra clave de 3 o más caracteres ${busqueda} `);
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