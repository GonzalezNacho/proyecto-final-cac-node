async function generarListaDePeliculas(lista)  {
    const url = './assets/mocks/results.json';
    const respuesta = await fetch(url);
    const peliculas = await respuesta.json();
    renderizarLista(peliculas.Search, lista);
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

const listas =['listaTop10','listaParaVos','listaSeries']
listas.forEach(element => {
    generarListaDePeliculas(element);
})