let Minlim, Maxlim, randNum_result;
let attempts = 0;

const limBtn = document.getElementById("setlimit");
const guessBtn = document.getElementById("guessBtn");
const instruction = document.getElementById("instruction");
const result = document.getElementById("result");
const atmptStatus = document.getElementById("attempts");

limBtn.onclick = function () {
    Maxlim = Number(document.getElementById("MaxVal").value);
    Minlim = Number(document.getElementById("MinVal").value);

    if (isNaN(Maxlim)) {
        instruction.textContent = `Please enter a number in MAXIMUM`;
    } else if (isNaN(Minlim)) {
        instruction.textContent = `Please enter a number in MINIMUM`;
    } else if (Maxlim <= Minlim) {
        instruction.textContent = `MAXIMUM must be higher`;
        if (Maxlim == 0) {
            instruction.textContent = `MAXIMUM can not be Zero/Empty`;
        }
    } else if (Minlim == 0) {
        instruction.textContent = `MINIMUM can not be Zero/Empty`;
    } else {
        instruction.textContent = `Guess Between ${Minlim} & ${Maxlim}`;
        randNum_result = Math.floor(Math.random() * (Maxlim - Minlim + 1)) + Minlim;
    }
}

guessBtn.onclick = function () {

    let isRunning = true;

    while (isRunning) {
        let guess = Number(document.getElementById("guess").value);

        if (isNaN(guess)) {
            result.textContent = `Your guess must be a number`;
            break; 
        } else if (guess < Minlim || guess > Maxlim) {
            result.textContent = `Guess Between ${Minlim} & ${Maxlim}`;
            break; 
        } else {
            attempts++;

            if (guess < randNum_result) {
                result.textContent = `Too Low! Try again.`;
                break;
            } else if (guess > randNum_result) {
                result.textContent = `Too High! Try again.`;
                break;
            } else {
                result.textContent = `Correct! The answer was ${randNum_result}.`;

                if(attempts==1){
                    atmptStatus.textContent=`Really Good! You got it at your ${attempts}st attempt.`;
                    break;
                }
                else if(attempts>1 && attempts<=3){
                    atmptStatus.textContent=`you are Pretty Good! at this game. It took you ${attempts} attempts.`;
                    break;
                }
                else if(attempts>3&& attempts<=5){
                    atmptStatus.textContent=`It took you ${attempts} attempts.`;
                    break;
                }
                else{
                    atmptStatus.textContent=`You suck! It took you ${attempts} attempts.`;
                    break;
                }
                isRunning = false; 
            }
        }
    }
}

