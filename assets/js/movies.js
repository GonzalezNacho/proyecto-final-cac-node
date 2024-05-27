import {renderizarLista} from './services.js';

const listas = ['listaTop10','listaParaVos','listaSeries'];
function iniciar() {
    for (const element of listas) {
        fetch('./assets/mocks/results.json')
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            renderizarLista(respuesta, element)
        })
        .catch(error => console.error(error));
    }
    document.getElementsByClassName('loader')[0].classList.add('loader-none');
}

iniciar()