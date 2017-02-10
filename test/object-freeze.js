const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const object = {
  a: 1
};
const freeze = Object.freeze(object);

suite.add('object', function() {
  for (var key in object);
})
.add('freeze', function() {
  for (var key in freeze);
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
