async function generarListaDePeliculas(lista)  {
    const url = './assets/mocks/results.json';
    const respuesta = await fetch(url);
    const peliculas = await respuesta.json()
    renderizarLista(peliculas.Search, lista);
}

function renderizarLista(peliculas, lista) {
    let pelicula = '';
    const gallery = document.getElementById(lista);
    peliculas.forEach(element => {
        pelicula += ` 
            <li>
                <div>
                    <img src="${element.Poster}" alt="">
                </div>
                    <div class="info-peli">
                    <h4>${element.Title}</h4>
                    <p>${element.Year}</p>
                </div>
            </li>`
    });
    gallery.innerHTML = pelicula;
}

const listas =['listaTop10','listaParaVos','listaSeries']
listas.forEach(element => {
    generarListaDePeliculas(element);
})