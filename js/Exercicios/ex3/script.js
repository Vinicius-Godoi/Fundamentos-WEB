function converter(){
    let inputBrl = document.getElementById("brl");
    let valorBrl = parseFloat(inputBrl.value.replace(",", "."));

    if(isNaN(valorBrl) || valorBrl <= 0){
        alert("Informe um valor maior que zero.");
        return;
    }

    let cotacaoUsd = 0.18;
    let conversao = valorBrl * cotacaoUsd;

    document.getElementById("final").textContent = `$ ${conversao.toFixed(2)}`;
}