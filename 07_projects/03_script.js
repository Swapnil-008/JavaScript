const clock = document.getElementById('clock')

setInterval(function () {
    let date = new Date();
    clock.innerText = date.toLocaleTimeString()
}, 1000)

const Timer = document.getElementById('Timer');
let interval = null;
let seconds = 0;
let minutes = 0;
let hours = 0;
let flag = false;

function resetTimer()
{
    clearInterval(interval);
    interval = null;
    seconds = 0
    minutes = 0
    hours = 0
    flag = false
    Timer.innerText = "00 : 00 : 00";
}

Timer.addEventListener("click", () => {
    if (flag)
    {
        clearInterval(interval);
        interval = null;
        flag = false;
    }
    else {
        flag = true;
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60)
            {
                minutes++;
                seconds = 0;
            }
            if (minutes === 60)
            {
                hours++;
                minutes = 0;
            }
            const tm = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(seconds).padStart(2, '0')}`;
            Timer.innerText = tm;
        }, 1000);
    }
});

const reset = document.getElementById('restartTimer')
reset.addEventListener("click", resetTimer)
