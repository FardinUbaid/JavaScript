const min = 1;
const max = 6;
let randomNum;
let randomNum2;
let randomNum3;

const rollonce=document.getElementById("btn1");
const rolltwice=document.getElementById("btn2");
const rollthrice=document.getElementById("btn3");

const result1=document.getElementById("once");

const result2=document.getElementById("twice1");
const result3=document.getElementById("twice2");

const result4=document.getElementById("thrice1");
const result5=document.getElementById("thrice2");
const result6=document.getElementById("thrice3");

rollonce.onclick=function(){
    randomNum= Math.floor(Math.random()*max)+min;
    result1.textContent=randomNum;
}

rolltwice.onclick=function(){
    randomNum= Math.floor(Math.random()*max)+min;
    randomNum2= Math.floor(Math.random()*max)+min;
    result2.textContent=randomNum;
    result3.textContent=randomNum2;
}

rollthrice.onclick=function(){
    randomNum= Math.floor(Math.random()*max)+min;
    randomNum2= Math.floor(Math.random()*max)+min;
    randomNum3= Math.floor(Math.random()*max)+min;
    result4.textContent=randomNum;
    result5.textContent=randomNum2;
    result6.textContent=randomNum2;
}