function redirecionarPagina(elemento){
    let link = elemento.value;

    if(link != ""){
        window.location.href = link;
    }
}