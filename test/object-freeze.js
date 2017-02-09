const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const o = {
  d: 10
};
const f = Object.freeze(o);

suite.add('object', function() {
  for (var k in o);
})
.add('freeze', function() {
  for (var k in f);
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

