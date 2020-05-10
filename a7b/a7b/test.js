var a7b = require('./a7b');
var is = require('./is');

console.log(is.take(a7b.makeSqrtSeq(2,1),5));
console.log(is.take(a7b.makeSqrtSeq(10000,1),10));
console.log(a7b.sqrt(a7b.makeSqrtSeq(2,1),1));
console.log(a7b.sqrt(a7b.makeSqrtSeq(2,1),0.1));
console.log(a7b.sqrt(a7b.makeSqrtSeq(2,1),1e-2));
console.log(is.take(a7b.cumulate(is.from(1)),10));
console.log(is.take(a7b.cumulate(is.iterates(function(n){return n * 2;}, 1)), 10));
