export function paginacion(respuesta,pagina, busqueda) {
    const totalPaginas = Math.ceil(respuesta.totalResults / 10);
    const previa = pagina == 1 ? 'disabled' : `href="busqueda.html?search=${busqueda}&page=${pagina - 1}"`;
    const posterior = pagina == totalPaginas ? 'disabled' : `href="busqueda.html?search=${busqueda}&page=${parseInt(pagina) + 1}"`;
    const paginacion = document.getElementById('paginacion');
    let lista = `<ul><li><a ${previa}><i class="fa-solid fa-angle-left"></i></a></li>`;
    for (let i = 1; i <= totalPaginas; i++) {
        lista += `<li><a href="busqueda.html?search=${busqueda}&page=${i}">${i}</a></li>`;
    }
    lista += `<li><a ${posterior}><i class="fa-solid fa-angle-right"></i></a></li></ul>`;
    paginacion.innerHTML = lista;
}