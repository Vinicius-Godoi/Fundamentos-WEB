function calcular(){
    let premio = document.getElementById("valorPremio");
    
    let ponto1 = document.getElementById("pt1");
    let ponto2 = document.getElementById("pt2");
    let ponto3 = document.getElementById("pt3");
    
    let resultado = document.querySelector("div");

    let erro = false;

    // Validação da entrada
    if(premio.value <= 0 || premio.value == ""){
        premio.style = "border:1px solid red";
        erro = true;
    }
    if(ponto1.value < 0 || ponto1.value == ""){
        ponto1.style = "border:1px solid red";
        erro = true;
    }
    if(ponto2.value < 0 || ponto2.value == ""){
        ponto2.style = "border:1px solid red";
        erro = true;
    }
    if(ponto3.value < 0 || ponto3.value == ""){
        ponto3.style = "border:1px solid red";
        erro = true;
    }

    if(erro){
        alert("Valor inválido!");
    }

    if(!erro){
        // Processamento
        let soma = parseInt(ponto1.value) + parseInt(ponto2.value) + parseInt(ponto3.value);
        let premio1 = (ponto1.value * premio.value) / soma; 
        let premio2 = (ponto2.value * premio.value) / soma; 
        let premio3 = (ponto3.value * premio.value) / soma; 

        // Saída
        document.querySelector("div").innerHTML = `1º Lugar: R$${premio1.toFixed(2)}<br>
                                                   2º Lugar: R$${premio2.toFixed(2)}<br>
                                                   3º Lugar: R$${premio3.toFixed(2)}`;
    }
}