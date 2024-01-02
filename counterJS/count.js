const increBtn= document.getElementById("incremetnBtn");
const decreBtn= document.getElementById("decremetnBtn");
const resetBtn= document.getElementById("resetBtn");
const result= document.getElementById("resultLbl");

let count=0;

increBtn.onclick=function(){
    count++
    result.textContent=count;
}
decreBtn.onclick=function(){
    count--
    result.textContent=count;
}
resetBtn.onclick=function(){
    count=0
    result.textContent=count;
}