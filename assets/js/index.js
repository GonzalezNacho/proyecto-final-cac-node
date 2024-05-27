document.getElementById('form-buscar').addEventListener('submit', (e) => {
    e.preventDefault();
    const busqueda = document.getElementById('input-buscar').value;
    if (busqueda.length < 3) {
        alert(`Por favor, introduce una palabra clave de 3 o más caracteres ${busqueda} `);
        document.getElementById('input-buscar').value = '';
        document.getElementById('form-buscar').reset();
    } else {
        window.location.href = `busqueda.html?search=${busqueda}`;
    }
})

const botonNav = document.getElementById('icono-nav');
const menuResponsive = () => {
    const nav = document.getElementById("nav");
    nav.className==="" ? nav.className = "responsive" : nav.className = "";
}

botonNav.addEventListener('click', menuResponsive);