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
        var lapNumber = document.getElementsByClassName('lapcount').length + 1;
        newLap.className = 'lapcount';
        var lapTime = document.createTextNode('Lap ' + lapNumber + " " + displayTime());
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

    var init = (function() {
        return window.setInterval(increment, 10);
    }());

    document.getElementById('start').onclick = start;
    document.getElementById('stop').onclick = stop;
    document.getElementById('lap').onclick = lap;
    document.getElementById('reset').addEventListener('click', function() {
        clearLaps();
        reset();
    });

    var starsVisible = false;
    var sunVisible = true;
    document.getElementById('moon').addEventListener('click', function() {
        if (starsVisible === false) {
            document.body.className = 'night';
            starsVisible = true;
            sunVisible = false;
            document.getElementById('star-overlay').style.opacity = 1;
            setTimeout(function() {
                if (sunVisible === false) {
                    document.body.className = 'stars night';
                    document.getElementById('star-overlay').style.opacity = 0;
                }
            }, 1200);
        }
    });
    document.getElementById('sun').addEventListener('click', function() {
        if (starsVisible === true) {
            starsVisible = false;
            sunVisible = true;
            document.body.className = '';
            document.getElementById('star-overlay').style.opacity = 0;
        }
    });
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
