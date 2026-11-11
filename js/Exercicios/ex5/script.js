function convertTemp(){
    let rawValue = document.getElementById("c_in").value;
    
    // Valida se o campo está vazio ou não é um número válido
    if (rawValue.trim() === "" || isNaN(rawValue)) {
        alert("Informe um valor numérico válido!");
        return;
    }

    let tempIn = parseFloat(rawValue);
    
    if(document.getElementById("temp1").textContent == "°C"){
        document.getElementById("temp2").textContent = `${toFahrenheit(tempIn).toFixed(1)} °F`;
    }
    else{
        document.getElementById("temp2").textContent = `${toCelsius(tempIn).toFixed(1)} °C`;
    }
}

function invertMode(){
    let temp1 = document.getElementById("temp1");
    let spnTemp1 = document.getElementById("spn_temp1");
    let spnTemp2 = document.getElementById("spn_temp2");
    let inputField = document.getElementById("c_in");

    if(temp1.textContent == "°C"){
        spnTemp1.textContent = "Fahrenheit";
        spnTemp2.textContent = "Celsius";
        temp1.textContent = "°F";
    }
    else{
        spnTemp1.textContent = "Celsius";
        spnTemp2.textContent = "Fahrenheit";
        temp1.textContent = "°C";
    }

    inputField.value = "";
    document.getElementById("temp2").textContent = "";
}

function toCelsius(tempIn){
    return (tempIn - 32) / 1.8;
}

function toFahrenheit(tempIn){
    return (tempIn * 1.8) + 32;
}