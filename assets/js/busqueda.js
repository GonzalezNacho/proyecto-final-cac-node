import {renderizarLista} from './services.js'
import {API_KEY} from './const.js'

const busquedaDePelis =  async (busqueda) => {
    const link = `https://www.omdbapi.com/?s=${busqueda}&apikey=${API_KEY}`;
    document.getElementById('input-buscar').value = '';
    fetch(link)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            renderizarLista(respuesta, 'resultados-pelis')
        })
        .catch(error => console.error(error));
    sessionStorage.removeItem('busqueda')
}

const busqueda = sessionStorage.getItem('busqueda');
if (busqueda) {
    busquedaDePelis(busqueda)
} else {
    window.location.href = 'index.html';
}