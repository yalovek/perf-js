const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const addShort = function(x, y) {
  return x + y;
};
const addBig = function(x, y) {
  //96eyMuceajGwkjaN8O7sHJ0pbdeFV0htE2izIrJuPf9dq6vmR82aAZOJPvIWOb41PYQM8lgKoRIj54Aky9Qe6mAxUYX4KTN4O3Jz2LNDSGapCpCywPOzjqGKUF1x8nlE8xzf2LkBzMAlOiESnzrW6n9LW5ji42mL4dgBLN8twOxSHJLMgrfrN4TF3GluGdlhQpn16V914wb7LxUd0kUtd9Wwwyt4KCKs1z82ozPmIj6Z9iD283xgt7kBeT1DhDXgTjRWTkUYFngIbqyELEdBkgzQuYTrrvZtiaUlXglBDj2qS6QQRwZF08u7n5xWwEliVfhreFRkIMre5tPAL34a8vVlEHLAC2uiqPq5uRW54IpySiGlPxjoC2i75Mx2b3DWQQ8JDlxXyv5MaEGWhble1yZtYBwNkO9CqjGmXfpoj1MNeeEgXnZCmVaQPpivEdinHKjei3g7LAtryMz9BrV1y60DniqTW5v3DN05yPrUDLTXR5zl1GKzlzwSICOK3HIfyzMMVJKvwPCzoQ2WCb45gYqcxtuIFpkPzgoBGQLrfGLP32mrkNXXS8d2PnhOxscXa38jVPbyFm5p00HzqryCtzeh
  return x + y;
};

suite.add('short', function() {
  for (let i = 0; i < 500; i++) {
    addShort(1, i);
  }
})
.add('big', function() {
  for (let i = 0; i < 500; i++) {
    addBig(1, i);
  }
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
