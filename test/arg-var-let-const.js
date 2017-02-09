const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const f = (o) => o.d;

suite.add('argument', function() {
  f({
    d: 10
  });
})
.add('var', function() {
  var o = {
    d: 10
  };

  f(o);
})
.add('let', function() {
  let o = {
    d: 10
  };

  f(o);
})
.add('const', function() {
  const o = {
    d: 10
  };

  f(o);
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

