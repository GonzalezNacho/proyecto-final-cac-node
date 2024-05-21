/*prueba*/
document.getElementById('form-buscar').addEventListener('submit', (e) => {
    e.preventDefault();
    const busqueda = document.getElementById('input-buscar').value;
    if (busqueda === '') {
        alert('Por favor, introduce una palabra clave');
    } else {
        window.location.href = `./bilbioteca.html`
        alert(`Buscando por: ${busqueda}`);
        document.getElementById('input-buscar').value = '';
        document.getElementById('form-buscar').reset();
    }
}) 