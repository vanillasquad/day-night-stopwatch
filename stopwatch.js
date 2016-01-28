var started = false;
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

var csecs = 0;
var secs = 0;
var mins = 0;
var hrs = 0;

setInterval(increment, 10);
function increment() {
    if (started) {
        csecs++;
        if (csecs > 99) {
            csecs = 0;
            secs++;
        }
        if (secs > 59) {
            secs = 0;
            mins++;
        }
        if (mins > 59) {
            mins = 0;
            hrs++;
        }
        display.innerHTML = displayTime();
        return displayTime();
    }
}

var display = document.getElementById('time');
var defaultDisplay = '00:00:00:00';
display.innerHTML = defaultDisplay;
function displayTime() {
    var displayhours = hrs < 10 ? '0' + hrs : hrs;
    var displaymins = mins < 10 ? '0' + mins : mins;
    var displaysecs = secs < 10 ? '0' + secs : secs;
    var displaycsecs = csecs < 10 ? '0' + csecs : csecs;
    return displayhours + ':' + displaymins + ':' + displaysecs + ':' + displaycsecs;
}

document.getElementById('reset').onclick = reset;
function reset() {
    hrs = 0;
    mins = 0;
    secs = 0;
    csecs = 0;
    display.innerHTML = defaultDisplay;
    started = false;
}
