import {renderizarLista, getParameterByName} from './services.js'
import {API_KEY} from './const.js'

const busquedaDePelis =  async (busqueda, pagina) => {
    const queryPagina = pagina == "" ? '': `&page=+${pagina}`;
    const link = `https://www.omdbapi.com/?s=${busqueda}${queryPagina}&apikey=${API_KEY}`;
    document.getElementById('input-buscar').value = '';
    fetch(link)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            renderizarLista(respuesta, 'resultados-pelis')
            paginacion(respuesta)
        })
        .catch(error => console.error(error));
    sessionStorage.removeItem('busqueda')
}

const busqueda = getParameterByName('search');
const pagina = getParameterByName('page');
console.log(pagina)
if (busqueda) {
    busquedaDePelis(busqueda,pagina)
} else {
    window.location.href = 'index.html';
}

function paginacion(respuesta) {
    const paginacion = document.getElementById('paginacion');
    const totalPaginas = Math.ceil(respuesta.totalResults / 10);
    for (let i = 1; i <= totalPaginas; i++) {
        const li = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = i;
        link.href = `busqueda.html?search=${busqueda}&page=${i}`;
        li.appendChild(link);
        paginacion.appendChild(li);
    }
}