const resultLbl = document.getElementById("resultLbl");
const statLbl = document.getElementById("statusLbl");
let result;

const fvalueInput = document.getElementById("Fvalue");
const svalueInput = document.getElementById("Svalue");

const addBtn = document.getElementById("addition");
const subBtn = document.getElementById("subtracttion");
const mulBtn = document.getElementById("multiplication");
const divBtn = document.getElementById("division");

function valueCheck(result){

    if(result==0){
        statLbl.textContent=`the result seems to be Zero`;
    }
    else if(result>0){
        statLbl.textContent=`the result seems to be Positive Number`;
    }
    else if(result<0){
        statLbl.textContent=`the result seems to be negative Number`;
    }
    else{
        statLbl.textContent=`Please Instert the values`;
    }
}


addBtn.onclick = function () {
    let fvalue = Number(fvalueInput.value);
    let svalue = Number(svalueInput.value);

    result = fvalue + svalue;
    valueCheck(result);
    //console.log(result);
    resultLbl.textContent = result;
}

subBtn.onclick = function () {
    let fvalue = Number(fvalueInput.value);
    let svalue = Number(svalueInput.value);

    result = fvalue - svalue;
    valueCheck(result);
    //console.log(result);
    resultLbl.textContent = result;
}

mulBtn.onclick = function () {
    let fvalue = Number(fvalueInput.value);
    let svalue = Number(svalueInput.value);

    result = fvalue * svalue;
    valueCheck(result);
    //console.log(result);
    resultLbl.textContent = result;
}

divBtn.onclick = function () {
    let fvalue = Number(fvalueInput.value);
    let svalue = Number(svalueInput.value);

    result = fvalue / svalue;
    valueCheck(result);
    //console.log(result);
    resultLbl.textContent = result;
}
