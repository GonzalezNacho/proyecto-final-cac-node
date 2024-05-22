export function generarListaDePeliculas(lista, url) {
    console.log(url)
    const peticion = fetch(url)
        .then(respuesta => respuesta.json())
        .then(respuesta => {
            renderizarLista(respuesta, lista)
        })
        .catch(error => console.error(error));

    return peticion;
}

export function renderizarLista(respuesta, lista) {
    let pelicula = '';
    const galeria = document.getElementById(lista);
    const peliculas = respuesta.Search;
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

export function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    let regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}