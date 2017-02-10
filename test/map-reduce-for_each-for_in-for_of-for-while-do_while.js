const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const array = new Array(100);

suite.add('map', function() {
  array.map((item, key) => key);
})
.add('reduce', function() {
  array.reduce((result, item, key) => key, []);
})
.add('forEach', function() {
  const newArray = [];

  array.forEach((item, key) => newArray.push(key));
})
.add('for in', function() {
  const newArray = [];

  for (var i in array) {
    newArray.push(i);
  }
})
.add('for of', function() {
  const newArray = [];

  for (var i of array) {
    newArray.push(i);
  }
})
.add('for', function() {
  const newArray = [];
  const length = array.length;

  for (var i = 0; i < length; ++i) {
    newArray.push(i);
  }
})
.add('while', function() {
  const newArray = [];
  const length = array.length;
  var i = 0;

  while (i < length) {
    newArray.push(i);
    ++i;
  }
})
.add('do while', function() {
  const newArray = [];
  const length = array.length;
  var i = 0;

  do {
    newArray.push(i);
    ++i;
  } while (i < length)
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
