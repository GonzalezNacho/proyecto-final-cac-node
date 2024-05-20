function generarListaDePeliculas(lista)  {
    const url = './assets/mocks/results.json';
    fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            renderizarLista(respuesta.Search, lista);
        })
        .catch(error => console.error(error));
}

function renderizarLista(peliculas, lista) {
    let pelicula = '';
    const galeria = document.getElementById(lista);
    peliculas.forEach(element => {
        pelicula += ` 
            <li>
                <div>
                    <img src="${element.Poster}" alt="imagen de pelicula ${element.Title}">
                </div>
                    <div class="info-peli">
                    <h5>${element.Title}</h5>
                    <p>${element.Year}</p>
                </div>
            </li>`
    });
    galeria.innerHTML = pelicula;
}

const listas = ['listaTop10','listaParaVos','listaSeries'];
listas.forEach(element => {
    generarListaDePeliculas(element);
});