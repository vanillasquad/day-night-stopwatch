// test('start should return current time', function(assert) {
//     var actual = start();
//     var now = Date.now();
//     assert.equal(actual, now);
// });
//
// test('increment should increase centiseconds', function(assert) {
//     var done = assert.async();
//     interval();
//     setTimeout(function() {
//         var actual = centiseconds;
//         assert.ok(actual, actual > 0);
//         done();
//     }, 100);
// });
//
// test('increment should increase seconds', function(assert) {
//     var done = assert.async();
//     interval();
//     setTimeout(function() {
//         var actual = seconds;
//         assert.ok(actual, actual > 0);
//         done();
//     }, 2000);
// });
//
// test('increment should increase by 5 seconds', function(assert) {
//     var done = assert.async();
//     interval();
//     setTimeout(function() {
//         var actual = seconds;
//         assert.equal(actual, 5);
//         done();
//     }, 5010);
// });
//
//
//
// test('pause timer when stop is clicked', function(assert) {
//     var done = assert.async();
//     start();
//     setTimeout(function() {
//         var actual = displayTime();
//         assert.equal(actual, '00:00:01:00');
//     }, 1001);
// });
//
// test('clicking the reset button resets timer to 00:00:00:00', function(assert) {
//     var actual = reset();
//     assert.equal(actual, '00:00:00:00');
// });
//
// test('clicking the reset button after pressing start resets timer to 00:00:00:00', function(assert) {
//     start();
//     var done = assert.async();
//     setTimeout(function() {
//         reset();
//         var actual = displayTime();
//         assert.equal(actual, '00:00:00:00');
//         done();
//     }, 2000);
// });
//
// test('clicking the reset button after pressing start then stop resets timer to 00:00:00:00', function(assert) {
//     start();
//     var done = assert.async();
//     setTimeout(function() {
//         stop();
//         reset();
//         var actual = displayTime();
//         assert.equal(actual, '00:00:00:00');
//         done();
//     }, 2000);
// });
