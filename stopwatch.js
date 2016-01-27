var startTime = 0;
var centiseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

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
    return displayTime();
}

function interval() {
    setInterval(increment, 10);
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
