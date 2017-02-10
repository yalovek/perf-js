const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite.add('var', function() {
  for (var i = 0; i < 500; i++);
})
.add('let', function() {
  for (let i = 0; i < 500; i++);
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
