const timer = 1;
let AmountTime =  timer * 60;

function calculateTime() {
    const countdown = document.querySelector("#countdown");
    let minutes = Math.floor(AmountTime/60);
    let seconds = AmountTime%60;

    if (seconds < 10){
        seconds = "0" + seconds;
    }
    countdown.textContent = `${minutes} : ${seconds}`
    AmountTime--;

    if(AmountTime < 0){
        stopTimer();
        AmountTime = 0;

    }

    function stopTimer(){
        clearInterval(timerId);
    }
}

let timerId = setInterval(calculateTime,1000)