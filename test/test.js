test('increment should increase csecs', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        var result = Timer.displayTime();
        var actual = result[result.length-2] + result[result.length-1];
        assert.ok(actual > 0);
        Timer.reset();
        done();
    }, 85);
});

test('increment should increase secs', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        var result = Timer.displayTime();
        var actual = result[result.length-4];
        assert.ok(actual > 0);
        Timer.reset();
        done();
    }, 2000);
});

test('increment should increase by 5 secs', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        var result = Timer.displayTime();
        var actual = result[result.length-4];
        assert.equal(actual, 5);
        Timer.reset();
        done();
    }, 5010);
});

test('pause timer when stop is clicked', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        var result = Timer.displayTime();
        var actual = parseInt(result[result.length-4] + result[result.length-2]);
        assert.ok(actual);
        Timer.stop();
        done();
    }, 1000);
});

test('clicking the reset button resets timer to 00:00:00:00', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
      Timer.reset();
      var actual = document.getElementById('time').innerHTML;
      assert.equal(actual, '00:00:00:00');
      done();
   }, 2000);
});

test('clicking the reset button after pressing start resets timer to 00:00:00:00', function(assert) {
    Timer.start();
    var done = assert.async();
    setTimeout(function() {
        Timer.reset();
        var actual = Timer.displayTime();
        assert.equal(actual, '00:00:00:00');
        done();
    }, 2000);
});

test('clicking the reset button after pressing start then stop resets timer to 00:00:00:00', function(assert) {
    Timer.start();
    var done = assert.async();
    setTimeout(function() {
        Timer.stop();
        Timer.reset();
        var actual = Timer.displayTime();
        assert.equal(actual, '00:00:00:00');
        done();
    }, 2000);
});

test('clicking the moon should switch to night mode', function(assert) {
    document.getElementById('moon').click();
    var actual = document.body.className;
    var expected = 'night';
    var done = assert.async();
    setTimeout(function() {
        done();
    }, 1500);
    assert.equal(actual, expected);
});

test('clicking the sun should switch to day mode', function(assert) {
    document.getElementById('sun').click();
    var actual = document.body.className;
    var expected = '';
    assert.equal(actual, expected);
});

test('clicking lap logs the elapsed time', function(assert) {
    Timer.start();
    var done = assert.async();
    setTimeout(function() {
        var actual = !!document.getElementsByClassName('lapcount');
        Timer.lap();
        assert.ok(actual);
        done();
        Timer.reset();
    }, 3000);
});

test('clicking lap should reset timer to zero', function(assert) {
    Timer.start();
    var done = assert.async();
    setTimeout(function() {
        Timer.lap();
        var actual = Timer.displayTime();
        assert.equal(actual, '00:00:00:00');
        done();
    }, 2000);
});

test('clicking lap restarts timing after reset', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        Timer.lap();
        setTimeout(function() {
            var result = Timer.displayTime();
            var actual = result[result.length-2] + result[result.length-1];
            assert.ok(actual > 0);
            Timer.reset();
            done();
        }, 80);
    }, 85);
});

test('clicking lap more than once adds more laps', function(assert) {
    Timer.start();
    var done = assert.async();
    setTimeout(function() {
        Timer.lap();
        var actual = document.getElementsByClassName('lapcount');
        assert.ok(actual.length > 1);
        done();
    }, 2000);
});

test('lap button is hidden when timer is stopped', function(assert) {
    Timer.stop();
    var actual = document.getElementById('lap').className === 'btn hide-btn';
    assert.ok(actual);
});

test('lap button is hidden when timer is reset', function(assert) {
    Timer.reset();
    var actual = document.getElementById('lap').className === 'btn hide-btn';
    assert.ok(actual);
});

test('start button is hidden when timer is running', function(assert) {
    Timer.start();
    var actual = document.getElementById('start').className === 'btn hide-btn';
    assert.ok(actual);
});

test('start button should appear when timer is stopped', function(assert) {
    Timer.stop();
    var actual = document.getElementById('start').className === 'btn';
    assert.ok(actual);
});

test('start button should appear when timer is reset', function(assert) {
    Timer.reset();
    var actual = document.getElementById('start').className === 'btn';
    assert.ok(actual);
});

test('lap button should appear when timer is running', function(assert) {
    Timer.start();
    var actual = document.getElementById('lap').className === 'btn';
    assert.ok(actual);
});

test('reset should clear all lap times', function(assert) {
    Timer.start();
    var done = assert.async();
    setTimeout(function() {
        Timer.lap();
        setTimeout(function() {
            Timer.clearLaps();
            var actual = document.getElementsByClassName('lapcount');
            assert.ok(actual.length === 0);
            done();
        }, 500);
    }, 1000);
});

// add lap number?
// lap needs to be hidden by default
