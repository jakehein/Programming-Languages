/* global SLang : true */

(function () {

"use strict";


var samples = [

    /* 0 */   "",
    /* 1 */   [ "Empty string",
		'""',
		'["String",""]' ],
    /* 2 */   [ "Non-empty string",
		'"cs331"',
		'["String","cs331"]' ],
    
    /* 3 */   [ "Simple length",
		'length("")',
		'["Num",0]' ],

    /* 4 */   [ "Length in papp",
		'+(1,length("cs"))',
		'["Num",3]' ],

    /* 5 */   [ "Length in function call",
		'(fn (x,y) => +(length(x),length(y)) "cs" "331")',
		'["Num",5]' ],


    /* 6 */   [ "Concatenation",
		'+("cs","331")',
		'["String","cs331"]' ],


    /* 7 */   [ "Concat. + cast",
		'+("cs",331)',
		'["String","cs331"]' ],


    /* 8 */   [ "Cast + concat.",
		'+(2,"much")',
		'["String","2much"]' ],


    /* 9 */   [ "If-then",
		'if 3 > 2 then "True" else 0',
		'["String","True"]' ],

    /* 10 */  [ "If-else",
		'if 2 > 3 then "True" else 0',
		'["Num",0]' ],


    /* 11 */  [ "If in fn call",
		'(fn (x) => if x > 4 then "OK" else "KO" length("cs331"))',
		'["String","OK"]' ],


    /* 12 */  [ "If in fn call",
		'(fn (x) => +(x,5) if length("cs") > length("331") then "10" else 20)',
		'["Num",25]' ],


    /* 13 */  [ "If in papp",
		'*( if 5 > 4 then length("331") else 3, 6)',
		'["Num",18]' ],


    /* 14 */  [ "If in closure",
		'fn (x,y,z) => if x > y then 5 else z',
		'["Clo",["x","y","z"],["IfExp",["VarExp","x"],["VarExp","y"],["IntExp",5],["VarExp","z"]],["Env",[["x",["Num",5]],["y",["Num",6]]],["EmptyEnv"]]]' ],


    /* 15 */  [ "If with vars",
		'(fn (x,y,z) => if x > y then 5 else z 4 3 2)',
		'["Num",5]' ],


    /* 16 */  [ "String error",
		'+(1,"2",fn (x) => x)',
		'No output [Runtime error]' ],

    /* 17 */  [ "+ error",
		'+("no")',
		'No output [Runtime error]' ],

    /* 18 */  [ "length error",
		'(fn (x,y) => +(length(x),length(y)) "cs" 331)',
		'No output [Runtime error]' ],

    /* 19 */  [ "Comparison error",
		'if 331 > "cs" then "oops" else 10',
		'No output [Runtime error]' ],

    /* 20 */  [ "* type error",
		'*( 10, (fn (x,y,z) => if x > y then 5 else z 2 3 "4") )',
		'No output [Runtime error]' ]
];
    
    window.SLang.samples = samples;
    console.log("done loading samples");
})();
