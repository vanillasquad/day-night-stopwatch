test('increment should increase csecs', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        var result = Timer.displayTime();
        var actual = result[result.length-2];
        assert.ok(actual, actual > 0);
        Timer.reset();
        done();
    }, 100);
});

test('increment should increase secs', function(assert) {
    var done = assert.async();
    Timer.start();
    setTimeout(function() {
        var result = Timer.displayTime();
        var actual = result[result.length-4];
        assert.ok(actual, actual > 0);
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
        var actual = result[result.length-4] + result[result.length-2];
        assert.equal(actual, '10');
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
