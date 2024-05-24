export function generarListaDePeliculas(lista, url) {
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
    document.getElementsByClassName('loader')[0].classList.add('loader-none');
    const galeria = document.getElementById(lista);
    const peliculas = respuesta.Search;
    peliculas.forEach(element => {
        const imagen = element.Poster== 'N/A' ? './assets/img/no-image.png' : element.Poster
        pelicula += `
            <li>
                <div>
                    <img src="${imagen}" alt="imagen de pelicula ${element.Title}">
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