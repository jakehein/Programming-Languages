var fp = require('./fp');

if ( ! exports ) {
    var exports = [ ];
}

var weightedSum = function (ns,ws) {

    var helper = function (  /* ??? */ ) {

	/* implement this function */

    };
    
    // hint: call the helper function here before returning
    
};

// a few test cases

console.log("> weightedSum([2,3,4], [5,6,7]) // should return 2*5 + 3*6 + 4*7");
console.log( weightedSum([2,3,4], [5,6,7]) );
console.log("> weightedSum([1,2], [3,4])");
console.log( weightedSum([1,2], [3,4]) );
console.log("> weightedSum([2,3], [1,4])");
console.log( weightedSum([2,3], [1,4]) );
console.log("> weightedSum([1,2,3], [3,0,5])");
console.log( weightedSum([1,2,3], [3,0,5]) );
console.log("> weightedSum([1,2,3], [3,4])");
console.log( weightedSum([1,2,3], [3,4]) );
console.log("> weightedSum([2], [3])");
console.log( weightedSum([2], [3]) );
console.log("> weightedSum([1,2,3,4,5,6,7,8], [8,7,6,5,4,3,2,1])");
console.log( weightedSum([1,2,3,4,5,6,7,8], [8,7,6,5,4,3,2,1] ) );
console.log("> weightedSum([1,2,3,4,5,6,7,8], [0,0,0,0,0,0,0,0])");
console.log( weightedSum([1,2,3,4,5,6,7,8], [0,0,0,0,0,0,0,0]) );
console.log("> weightedSum([1,2,3], [0,1,1])");
console.log( weightedSum([1,2,3], [0,1,1]) );
console.log("> weightedSum([1,2,3], [3,4,-1])");
console.log( weightedSum([1,2,3], [3,4,-1]) );



exports.weightedSum = weightedSum;
