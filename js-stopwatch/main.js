const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
let intervalRef;
let seconds = 00;
let tens = 00;
let minutes = 00;
const tensDisplay = document.getElementById('ms')
const secondsDisplay = document.getElementById
('seconds')
const minutesDisplay = document.getElementById('minutes')


startBtn.onclick = function () {
    clearInterval(intervalRef)
    intervalRef = setInterval(startTimer, 100);

}

stopBtn.onclick = function () {
    clearInterval(intervalRef)
}

resetBtn.onclick = function () {
    clearInterval(intervalRef);
    reset= "00";
    seconds = "00";
    tens = "00";
    minutes = "00";
    minutesDisplay.innerHTML = reset;
    secondsDisplay.innerHTML = reset;
    tensDisplay.innerHTML = reset;

}

function startTimer () {
    tens ++;

    if(tens <= 9){
        tensDisplay.innerHTML = "0" + tens;
    } else if(tens > 9){
        tensDisplay.innerHTML = tens;
    } 
    if(tens > 99){
        seconds ++;
        secondsDisplay.innerHTML = "0" + seconds;
        tens = 0;
        tensDisplay.innerHTML = "0" + 0;
    }
    if (seconds >= 10) {
        secondsDisplay.innerHTML = seconds;
    } 
    if(seconds > 59){
        seconds = 0;
        secondsDisplay.innerHTML = "0" + 0;
        minutes ++;
        minutesDisplay.innerHTML = "0" + minutes
    }
    if (minutes >= 10) {
        minutesDisplay.innerHTML = minutes;
    }
}