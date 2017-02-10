const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const get = object => object.a;

suite.add('argument', function() {
  get({
    a: 1
  });
})
.add('var', function() {
  var object = {
    a: 1
  };

  get(object);
})
.add('let', function() {
  let object = {
    a: 1
  };

  get(object);
})
.add('const', function() {
  const object = {
    a: 1
  };

  get(object);
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
