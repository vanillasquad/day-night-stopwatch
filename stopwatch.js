var startTime = 0;
var centiseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var defaultDisplay = '00:00:00:00';
var started = false;
setInterval(increment, 10);

var display = document.getElementById('time');
display.innerHTML = defaultDisplay;

function displayTime() {
    var displayhours = hours < 10 ? '0' + hours : hours;
    var displaymins = minutes < 10 ? '0' + minutes : minutes;
    var displaysecs = seconds < 10 ? '0' + seconds : seconds;
    var displaycsecs = centiseconds < 10 ? '0' + centiseconds : centiseconds;
    return displayhours + ':' + displaymins + ':' + displaysecs + ':' + displaycsecs;
}

document.getElementById('start').onclick = start;

function start() {
    if (!started) {
        started = true;
    }
}

document.getElementById('stop').onclick = stop;

function stop() {
    if (started) {
        started = false;
    }
}

function increment(start, stop) {
    if (started) {
        centiseconds++;
        if (centiseconds > 99) {
            centiseconds = 0;
            seconds++;
        }
        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }
        if (minutes > 59) {
            minutes = 0;
            hours++;
        }
        display.innerHTML = displayTime();
        return displayTime();
    }
}

document.getElementById('reset').onclick = reset;

function reset() {
    hours = 0,
    minutes = 0,
    seconds = 0,
    centiseconds = 0;
    display.innerHTML = defaultDisplay;
    started = false;
}

// var Stopwatch = {
//     function: increment() {
//         function add() {
//
//         };
//     },
//     function: clearTimeout() {
//
//     },
//     function: start() {
//         return Date.now();
//     },
//     function: stop() {
//
//     }
// };
