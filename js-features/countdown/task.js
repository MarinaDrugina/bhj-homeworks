let timerTime = document.getElementById('timer');

let updateTimer = setInterval(() => {  

    if(timerTime.textContent <= 0) {
        clearInterval(updateTimer);
        alert('Вы победили в конкурсе!');
    } else {
        timerTime.textContent--;
    }
}, 1000);