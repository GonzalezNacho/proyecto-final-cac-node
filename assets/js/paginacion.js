export function paginacion(respuesta, pagina, busqueda) {
    const paginaNum = pagina == "" ? 1 : parseInt(pagina);
    const totalPaginas = Math.ceil(respuesta.totalResults / 10);
    const previa = paginaNum == 1 ? 'disabled' : `href="busqueda.html?search=${busqueda}&page=${paginaNum - 1}"`;
    const posterior = paginaNum == totalPaginas ? 'disabled' : `href="busqueda.html?search=${busqueda}&page=${paginaNum + 1}"`;
    const ultimaPagina = `<li><a href="busqueda.html?search=${busqueda}&page=${totalPaginas}">${totalPaginas}</a></li>`;
    const primeraPagina = `<li><a href="busqueda.html?search=${busqueda}&page=1">1</a></li>`;
    const tresPuntitos = '<li>...</li>';
    const paginacionHTML = document.getElementById('paginacion');
    let lista = `<ul><li><a ${previa}><i class="fa-solid fa-angle-left"></i></a></li>`;
    if (totalPaginas < 10) {
        for (let i = 1; i <= totalPaginas; i++) {
            lista += `<li><a ${i == paginaNum ? 'class="active"' : ''} href="busqueda.html?search=${busqueda}&page=${i}">${i}</a></li>`;
        }
    } 
    else {
        if (paginaNum <= 5) {
            for (let i = 1; i <= 7; i++) {
                lista += `<li><a ${i == paginaNum ? 'class="active"' : ''} href="busqueda.html?search=${busqueda}&page=${i}">${i}</a></li>`;
            }
            lista += tresPuntitos + ultimaPagina;
        }
        else if (paginaNum > 5 && paginaNum < totalPaginas - 4) {
            lista += primeraPagina + tresPuntitos;
            for (let i = paginaNum - 2; i <= paginaNum + 2; i++) {
                lista += `<li><a ${i == paginaNum ? 'class="active"' : ''} href="busqueda.html?search=${busqueda}&page=${i}">${i}</a></li>`;
            }
            lista += tresPuntitos +ultimaPagina;
        }
        else if(paginaNum >= totalPaginas - 4) {
            lista += primeraPagina + tresPuntitos;
            for (let i = totalPaginas - 6; i <= totalPaginas; i++) {
                lista += `<li><a ${i == paginaNum ? 'class="active"' : ''} href="busqueda.html?search=${busqueda}&page=${i}">${i}</a></li>`;
            }
        }
    }
    lista += `<li><a ${posterior}><i class="fa-solid fa-angle-right"></i></a></li></ul>`;
    paginacionHTML.innerHTML = lista;
}