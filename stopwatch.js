// function start() {
//     // maybe use setinterval to refresh page
//     // need to return date as string?
       // var beginning = Date.now();
//     setTimeout(function() {
//         var end = Date.now();
//         var diff = (end - beginning);
//         console.log(diff);
//     }, 1000);
//
//     return 0;
// }

var startTime = 0;
var centiseconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;

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
    //add centiseconds first
    //increase seconds after centisecond limit
    // increase minutes after 59 seconds
    // increase hours after 59 minutes
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
