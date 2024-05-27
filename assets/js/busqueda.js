import {renderizarLista, getParameterByName} from './services.js'
import {paginacion} from './paginacion.js'
import {API_KEY} from './const.js'

const busquedaDePelis =  async (busqueda, pagina) => {
    const queryPagina = pagina == "" ? '': `&page=+${pagina}`;
    const link = `https://www.omdbapi.com/?s=${busqueda}${queryPagina}&apikey=${API_KEY}`;
    document.getElementById('input-buscar').value = '';
    fetch(link)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            if (respuesta.Response == 'True') {
                renderizarLista(respuesta, 'resultados')
                if (respuesta.totalResults > 10){
                    paginacion(respuesta,pagina, busqueda)
                }
            } else {
                document.getElementById('resultados').innerHTML = `<h3>No se encontraron resultados</h3>`
            }
            document.getElementsByClassName('loader')[0].classList.add('loader-none');
        })
        .catch(error => console.error(error));
}

const busqueda = getParameterByName('search');
const pagina = getParameterByName('page');
if (busqueda) {
    busquedaDePelis(busqueda,pagina)
} else {
    window.location.href = 'index.html';
}

