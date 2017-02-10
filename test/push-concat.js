const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;

suite.add('push', function() {
  const array = [];

  array.push(1);
})
.add('concat', function() {
  const array = [];

  array.concat(1);
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
