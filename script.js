let timer;
let running = false;
let hours = 0;
let minutes = 0;
let seconds = 0;
let centiseconds = 0;

function startStop() {
    if (running) {
        clearInterval(timer);
        document.getElementById('startStopBtn').textContent = 'Start';
    } else {
        timer = setInterval(updateTime, 10); // update every 10 milliseconds
        document.getElementById('startStopBtn').textContent = 'Stop';
    }
    running = !running;
}

function updateTime() {
    centiseconds++;
    if (centiseconds === 100) {
        centiseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes === 60) {
        minutes = 0;
        hours++;
    }

    document.getElementById('display').textContent = 
        (hours < 10 ? '0' + hours : hours) + ':' + 
        (minutes < 10 ? '0' + minutes : minutes) + ':' + 
        (seconds < 10 ? '0' + seconds : seconds) + ':' + 
        (centiseconds < 10 ? '0' + centiseconds : centiseconds);
}

function reset() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    centiseconds = 0;
    document.getElementById('display').textContent = '00:00:00:00';
    document.getElementById('startStopBtn').textContent = 'Start';
}
