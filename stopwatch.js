var Timer = (function (){

    var lapButton = document.getElementById('lap');
    var startButton = document.getElementById('start');

    var started = false;
    var start = function() {
        if (!started) {
            started = true;
        }
        startButton.className = 'btn hide-btn';
        lapButton.className = 'btn';
    };

    var stop = function() {
        if (started) {
            started = false;
        }
        lapButton.className = 'btn hide-btn';
        startButton.className = 'btn';
    };

    var csecs = 0;
    var secs = 0;
    var mins = 0;
    var hrs = 0;

    var increment = function() {
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

    var timeUnit = function (t) {
        return t < 10 ? '0' + t : t;
    };

    var displayTime = function() {
        return timeUnit(hrs) + ':' + timeUnit(mins) + ':' + timeUnit(secs) + ':' + timeUnit(csecs);
    };

    var reset = function() {
        hrs = 0;
        mins = 0;
        secs = 0;
        csecs = 0;
        display.innerHTML = defaultDisplay;
        started = false;
        lapButton.className = 'btn hide-btn';
        startButton.className = 'btn';
    };

    var lap = function() {
        var newLap = document.createElement('P');
        var lapNumber = document.getElementsByClassName('lapcount').length + 1;
        newLap.className = 'lapcount';
        var lapTime = document.createTextNode('Lap ' + lapNumber + " " + displayTime());
        newLap.insertBefore(lapTime, newLap.firstChild);
        document.getElementById('lap-container').insertBefore(newLap, document.getElementById('lap-container').firstChild);
        reset();
        start();
    };

    var clearLaps = function() {
        var laps = document.getElementById('lap-container');
        while (laps.firstChild) {
            laps.removeChild(laps.firstChild);
        }
    };

    var init = (function() {
        return window.setInterval(increment, 10);
    }());

    return {
        start: start,
        stop: stop,
        increment: increment,
        displayTime: displayTime,
        reset: reset,
        lap: lap,
        clearLaps: clearLaps
    };
}());
