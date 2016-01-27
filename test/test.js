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
