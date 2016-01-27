var startTime = 0;
var centiseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var defaultDisplay = '00:00:00:00';
var startCalled = false;

var display = document.getElementById('time');
display.innerHTML = defaultDisplay;

function displayTime() {
    var displayhours = hours < 10 ? '0' + hours : hours;
    var displaymins = minutes < 10 ? '0' + minutes : minutes;
    var displaysecs = seconds < 10 ? '0' + seconds: seconds;
    var displaycsecs = centiseconds < 10 ? '0' + centiseconds : centiseconds;
    console.log(displayhours + ':' + displaymins + ':' + displaysecs + ':' + displaycsecs);
    return displayhours + ':' + displaymins + ':' + displaysecs + ':' + displaycsecs;
}

document.getElementById('start').onclick = start;

function start() {
    interval();
    return Date.now();
}

document.getElementById('stop').onclick = stop;

function stop() {
    clearInterval(inc);
}

function increment(start, stop) {
    centiseconds ++;
    if (centiseconds > 99) {
        centiseconds = 0;
        seconds ++;
        if (seconds > 59) {
            seconds = 0;
            minutes ++;
            if (minutes > 59) {
                minutes = 0;
                hours ++;
            }
        }
    }
    display.innerHTML = displayTime();
    return displayTime();
}

function interval() {
    inc = setInterval(increment, 10);
}

document.getElementById('reset').onclick = reset;

function reset() {
    clearInterval(inc);
    hours = 0, minutes = 0, seconds = 0, centiseconds = 0;
    display.innerHTML = defaultDisplay;
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
