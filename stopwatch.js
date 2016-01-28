var Timer = (function (){
    var started = false;
    var start = function() {
        if (!started) {
            started = true;
        }
    };

    var stop = function() {
        if (started) {
            started = false;
        }
    };

    var csecs = 0;
    var secs = 0;
    var mins = 0;
    var hrs = 0;

    var startClock = function() {
        return window.setInterval(Timer.increment, 10);
    };
    var increment = function() {
        console.log('started');
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
    };

    var display = document.getElementById('time');
    var defaultDisplay = '00:00:00:00';
    display.innerHTML = defaultDisplay;
    var displayTime = function() {
        var displayhours = hrs < 10 ? '0' + hrs : hrs;
        var displaymins = mins < 10 ? '0' + mins : mins;
        var displaysecs = secs < 10 ? '0' + secs : secs;
        var displaycsecs = csecs < 10 ? '0' + csecs : csecs;
        return displayhours + ':' + displaymins + ':' + displaysecs + ':' + displaycsecs;
    };

    var reset = function() {
        hrs = 0;
        mins = 0;
        secs = 0;
        csecs = 0;
        display.innerHTML = defaultDisplay;
        started = false;
    };
    return {
        startClock: startClock,
        start: start,
        stop: stop,
        increment: increment,
        displayTime: displayTime,
        started: started,
        reset: reset,
        csecs: csecs,
        secs: secs,
        mins: mins,
        hrs: hrs
    };
}());

Timer.startClock();
document.getElementById('start').onclick = Timer.start;
document.getElementById('stop').onclick = Timer.stop;
document.getElementById('reset').onclick = Timer.reset;
