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
            paginacion(respuesta,pagina)
        })
        .catch(error => console.error(error));
    sessionStorage.removeItem('busqueda')
}

const busqueda = getParameterByName('search');
const pagina = getParameterByName('page');
if (busqueda) {
    busquedaDePelis(busqueda,pagina)
} else {
    window.location.href = 'index.html';
}

function paginacion(respuesta,pagina) {
    console.log(pagina)
    const totalPaginas = Math.ceil(respuesta.totalResults / 10);
    const previa = pagina == 1 ? 'disabled' : `href="busqueda.html?search=${busqueda}&page=${pagina - 1}"`;
    const posterior = pagina == totalPaginas ? 'disabled' : `href="busqueda.html?search=${busqueda}&page=${parseInt(pagina) + 1}"`;
    const paginacion = document.getElementById('paginacion');
    let lista = `<li><a ${previa}><i class="fa-solid fa-angle-left"></i></a></li>`;
    for (let i = 1; i <= totalPaginas; i++) {
        lista += `<li><a href="busqueda.html?search=${busqueda}&page=${i}">${i}</a></li>`;
    }
    lista += `<li><a ${posterior}><i class="fa-solid fa-angle-right"></i></a></li>`;
    paginacion.innerHTML = lista;
}