const input=document.getElementById("input");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelcious=document.getElementById("toCelcious");
const result=document.getElementById("result");
let temperature;


function convertion(){

    if(toFahrenheit.checked){

        temperature= Number(input.value);
        temperature= temperature * 9 / 5 + 32;
        result.textContent= temperature.toFixed(1)+`°F`;

    }
    else if(toCelcious.checked){

        temperature= Number(input.value);
        temperature= (temperature - 32)*(5 / 9);
        result.textContent= temperature.toFixed(1)+`°C`;

    }
    else{
        result.textContent=`Select a Unit`;
    }

}