function processar(){
    let inputNum1 = document.getElementById("n1");
    let inputNum2 = document.getElementById("n2");
    let inputNum3 = document.getElementById("n3");

    let num1 = parseInt(inputNum1.value);
    let num2 = parseInt(inputNum2.value);
    let num3 = parseInt(inputNum3.value);

    if(isNaN(num1) || isNaN(num2) || isNaN(num3)){
        alert("Informe um valor!");
        return;
    }

    let maior = Math.max(num1, num2, num3);
    let menor = Math.min(num1, num2, num3);

    document.getElementById("maior").textContent = maior;
    document.getElementById("menor").textContent = menor;
}   