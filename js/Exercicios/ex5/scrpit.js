function convertTemp(){
    let tempIn = document.getElementById("c_in");
    
    if(isNaN(tempIn)){
        alert("Informe um valor válido!");
        return;
    }
    
    let convertMode = document.querySelector("spn_temp1");
    
    if(convertMode.textContent == "Celsius"){
        document.getElementById("temp2").textContent = `${toFahrenheit.toFixed(1)} °F`;
    }
    else{
        document.getElementById("temp2").textContent = `${toCelsius.toFixed(1)} °C`;
    }
}

function toCelsius(tempIn){
    return (tempIn - 32) / 1.8;
}

function toFahrenheit(tempIn){
    return (tempIn * 1.8) + 32;
}