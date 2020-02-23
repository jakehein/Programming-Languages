var fileName = 'a3';
var selectedTest = process.argv[2];
var solution; // student's solution code

/////////////////////// define the test suite /////////////////////////
var tests = [
    /*  0 */ "removeLast( [1] )",
    /*  1 */ "removeLast( [1, 2] )",
    /*  2 */ "removeLast( [1, 2, 3] )",
    /*  3 */ "middle( [1] )",
    /*  4 */ "middle( [1,2] )",
    /*  5 */ "middle( [1,2,3] )",
    /*  6 */ "middle( [1,2,3,4] )",
    /*  7 */ "middle( [1,2,3,4,5,6] )",        
    /*  8 */ "closest( [10,20,30], 22 )",
    /*  9 */ "closest( [10,20,30], 29 )",
    /* 10 */ "closest( [10,20,30], 15 )",
    /* 11 */ "closest( [10,20,30], 12 )",
    /* 12 */ "closest( [0], 15 )",
    /* 13 */ "closest( [15], 0 )",    
    /* 14 */ "closest( [20, 30, 40, 30, 20, 10], 15 )",
    /* 15 */ "splitList( [] )",
    /* 16 */ "splitList( [1] )",
    /* 17 */ "splitList( [1,2,3,4] )",
    /* 18 */ "splitList( [1,2,10,3,5,4] )",
    /* 19 */ "splitList( [5,4,3,2,1] )",
    /* 20 */ "splitList( [3,3,3,2,2,1] )",
    /* 21 */ "addDigits( 5 )",
    /* 22 */ "addDigits( 123 )",
    /* 23 */ "addDigits( 999 )",
    /* 24 */ "persistence( 0 )",
    /* 25 */ "persistence( 10 )",
    /* 26 */ "persistence( 19 )",
    /* 27 */ "persistence( 123456789 )",        
    /* 28 */ "persistence( 199 )",
    /* 29 */ "persistence( 1999999999999999 )",    

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
if (selectedTest) {
    if ( (/^[0-9]+$/.test(selectedTest)) &&
	 (Number(selectedTest) < tests.length) ) {
	runTest(selectedTest)
    } else {
	console.log("Error: Test number is invalid or out of range");
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
    var args = [[1,2,3],4];
    
    var fn = solution[fname];
    try {
	console.log("Test #",testNumber);
	output = eval( "solution." + test );
	console.log( "", test )
	process.stdout.write(" ==> ");
	console.log( JSON.stringify(output) );
    } catch (e) {
	console.log(e.message);
    }
    console.log("----------------------------------------------------");
}
