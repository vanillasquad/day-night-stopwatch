document.getElementById('start').onclick = Timer.start;
document.getElementById('stop').onclick = Timer.stop;
document.getElementById('lap').onclick = Timer.lap;
document.getElementById('reset').addEventListener('click', function() {
    Timer.clearLaps();
    Timer.reset();
});

var starsVisible = false;
var sunVisible = true;
// clicking on the moon and then the sun too quickly means the overlay of stars appear in day mode
// the true and false switches above somewhat combat this
document.getElementById('moon').addEventListener('click', function() {
    if (starsVisible === false) {
        document.body.className = 'night';
        starsVisible = true;
        sunVisible = false;
        document.getElementById('star-overlay').style.opacity = 1;
        // setTimeout is so stars don't immediately appear in night mode
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
