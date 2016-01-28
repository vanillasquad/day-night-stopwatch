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

    var startClock = function() {
        return window.setInterval(Timer.increment, 10);
    };
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
        lapButton.className = 'btn hide-btn';
        startButton.className = 'btn';
    };

    var lap = function() {
        var newLap = document.createElement('P');
        newLap.className = 'lapcount';
        var lapTime = document.createTextNode(displayTime());
        newLap.appendChild(lapTime);
        document.getElementById('lap-container').appendChild(newLap);
        reset();
        start();
    };

    var clearLaps = function() {
        var laps = document.getElementById('lap-container');
        while (laps.firstChild) {
            laps.removeChild(laps.firstChild);
        }
    };

    return {
        startClock: startClock,
        start: start,
        stop: stop,
        increment: increment,
        displayTime: displayTime,
        started: started,
        reset: reset,
        lap: lap,
        clearLaps: clearLaps
    };
}());

Timer.startClock();
document.getElementById('start').onclick = Timer.start;
document.getElementById('stop').onclick = Timer.stop;
document.getElementById('reset').addEventListener('click', function() {
    Timer.clearLaps();
    Timer.reset();
});
document.getElementById('lap').onclick = Timer.lap;
document.getElementById('moon').addEventListener('click', function() {
    document.body.className = 'night';
});
document.getElementById('sun').addEventListener('click', function() {
    document.body.className = '';
});
