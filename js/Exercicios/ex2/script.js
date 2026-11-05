function situacaoFinal(media){
    if(media >= 6){
        return "APROVADO!";
    }
    else if(media < 6 && media >= 3){
        return "Deve fazer P3.";
    }
    else{
        return "REPROVADO!"
    }
}

function calcular(){
    let erro = false;

    let aluno = document.getElementById("nome").value;
    if(aluno == ""){
        alert("Informe o nome do aluno");
    }
    let nota1 = document.getElementById("p1").value;
    if(nota1 == "" || nota1 < 0 || nota1 > 10){
        alert("Informe uma nota válida");
    }
    let nota2 = document.getElementById("p2").value;
    if(nota1 == "" || nota1 < 0 || nota1 > 10){
        alert("Informe uma nota válida");
    }

    if(!erro){
        let media = (Number(nota1) + Number(nota2)) / 2;
    
        document.getElementById("situacao").innerHTML = `Aluno: ${aluno}<br>
                                                           Média: ${media}<br>
                                                           Situação: <b>${situacaoFinal(media)}<b>`; 
    }
    

    
}

