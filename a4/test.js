var fileName = 'a4';
var selection = process.argv[2];
var solution;    // student's solution code
var problem;     // problem number
var first, last; // range of test numbers for selected problem

/////////////////////// define the test suite /////////////////////////
var tests = [
    /*  0 */ "prune( [] )",
    /*  1 */ "prune( [1] )",
    /*  2 */ "prune( [1,2,3] )",
    /*  3 */ "prune( [1,2,[3]] )",
    /*  4 */ "prune( [[1,2],[2,3],[3,4]] )",
    /*  5 */ "prune( [[1,[2,[3,[4,5]]]],[[2],3],[[[[[1],2],3],4],[5],6],7] )",
    /*  6 */ "hasMoreEvens( [] )",
    /*  7 */ "hasMoreEvens( [1,2] )",
    /*  8 */ "hasMoreEvens( [1,3,5] )",
    /*  9 */ "hasMoreEvens( [[1],[3],[5]] )",
    /* 10 */ "hasMoreEvens( [[[[1]]],[[[[2]]]]] )",
    /* 11 */ "hasMoreEvens( [2] )",        
    /* 12 */ "hasMoreEvens( [2,4] )",
    /* 13 */ "hasMoreEvens( [2,3,4] )",
    /* 14 */ "hasMoreEvens( [[2],[3],4] )",
    /* 15 */ "hasMoreEvens( [[[[2]]],[[[[2]]]]] )",
    /* 16 */ "hasMoreEvens( [[],24,[[13],6],[3,[[1]],8],12]  )",
    /* 17 */ "max( [1] )",
    /* 18 */ "max( [1,2,3] )",
    /* 19 */ "max( [3,2,1] )",
    /* 20 */ "max( [-12,24,3,17,24,-101,0,11] )",            
    /* 21 */ "countEvens( [] )",    
    /* 22 */ "countEvens( [1,3,5] )",
    /* 23 */ "countEvens( [1,2,3,4,5,6,7,8] )",
    /* 24 */ "countEvens( [2,4,6] )",
    /* 25 */ "getHeaviest( [2,4,6] )",
    /* 26 */ "getHeaviest( [[2],[4],[6]] )",
    /* 27 */ "getHeaviest( [2,[4],[1,2,3]] )",
    /* 28 */ "getHeaviest( [12,[4],[1,2,3]] )",
    /* 29 */ "getHeaviest( [[12],[1,2,3,4],[1,1,1,1,1]] )"
];

////////////////// load the student's solution  //////////////////////
process.stdout.write("\nLoading student code... ");
try {
    solution = require('./' + fileName);
    console.log(" done\n");
} catch (e) {
    console.log("\nError loading the student's solution code from " 
		+ fileName + ".js\n");
    process.exit(1);
}

///////////////////////// run the test(s) /////////////////////////////
if (selection) {
    if ( (/^[0-9]+$/.test(selection)) &&
	 (Number(selection) < tests.length) ) {
	runTest(selection)
    } else if (/^P[0-9]+$/.test(selection)) {
	problem = Number(selection.substring(1));
	switch (problem) {
	case 1: first = 0; last = 5; break;
	case 2: first = 6; last = 16; break;
	case 3: first = 17; last = 20; break;
	case 4: first = 21; last = 24; break;
	case 5: first = 25; last = 29; break;
	default:
	    console.log("Error: The problem number is out of range");
	    process.exit(1);
	}
	for(var i = first; i <= last; i++) runTest(i);
    } else {
	console.log("Error: The selection is invalid or out of range");
	process.exit(1);
    }
} else { 
    console.log("===========================");
    console.log("Test suite for", fileName +".js");
    console.log("===========================");
    for(var i=0; i<tests.length; i++) {
	runTest(i);
    }
}

/////////////// helper function to run one test //////////////////
function runTest(testNumber) {
    var test = tests[testNumber];
    var output;
    var fname = "addIfNew";
    var fn = solution[fname];
    try {
	console.log("Test #",testNumber);
	output = eval( "solution." + test );
	console.log( test + " ==> " + JSON.stringify(output) );
    } catch (e) {
	console.log(e.message);
    }
    console.log("----------------------------------------------------");
}
