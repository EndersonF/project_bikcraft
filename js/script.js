//Ativar links menu
const links = document.querySelectorAll('.header-menu a');


ativarLink = (link) => {
    const url = location.href;
    const href = link.href;
    if (url.includes(href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);

//Ativar items do orçamento

const parametros = new URLSearchParams(location.search);

ativarProduto = (parametro) => {
    const elemento = document.getElementById(parametro);
    if (elemento) {
        elemento.checked = true;
    }
}

parametros.forEach(ativarProduto);