let botao = document.getElementById("b1");
function calcular()
{
    let numero1 = document.getElementById("i1");
    //alert(numero1.value)
    let numero2 = document.getElementById("i2");
    let resultado = document.querySelector("div");
    let erro = false;
    if(numero1.value == "")
    {
        numero1.style = "border:1px solid red";
        erro = true;
    }
    if(numero2.value == "")
    {
        numero2.style = "border:1px solid red";
        erro = true;
    }
    //erro é falso
    if(!erro)
    {
        let soma = parseInt(numero1.value) + Number(numero2.value);
        //concatenação
        resultado.innerHTML = "A soma dos dois números = " + soma;
        //interpolação
        resultado.innerHTML = `A soma dos dois números =  ${soma}`;
    }

}//fim função
botao.addEventListener("click", calcular);
