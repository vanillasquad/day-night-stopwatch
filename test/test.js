test('start should return current time', function(assert) {
    var actual = start();
    var now = Date.now();
    assert.equal(actual, now);
});

test('increment should increase centiseconds', function(assert) {
    var done = assert.async();
    interval();
    setTimeout(function() {
        var actual = centiseconds;
        assert.ok(actual, actual > 0);
        done();
    }, 100);
});

test('increment should increase seconds', function(assert) {
    var done = assert.async();
    interval();
    setTimeout(function() {
        var actual = seconds;
        assert.ok(actual, actual > 0);
        done();
    }, 2000);
});

test('pause timer when stop is clicked', function(assert) {
    var done = assert.async();
    start();
    setTimeout(function() {
        var actual = displayTime();
        assert.equal(actual, '00:00:01:00');
    }, 1001);
});

test('clicking the reset button resets timer to 00:00:00:00', function(assert) {
    var actual = reset()
    assert.equal(actual, '00:00:00:00');
});
