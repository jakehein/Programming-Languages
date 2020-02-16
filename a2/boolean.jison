/* 
    Description: Parses Boolean expressions
*/

// lexical section of the grammar 
// ==============================

// ******* you are NOT allowed to modify the lexical section ************
%lex
%%
\s+                   /* no return statement; so skip whitespace */
"true"                return "TRUE"
"false"               return "FALSE"
"("                   return "LPAREN"
")"                   return "RPAREN"
"&&"                  return "AND"
"||"                  return "OR"
"!|"                  return "NOR"
"!&"                  return "NAND"
"!"                   return "NOT"
"@"                   return "XOR"
<<EOF>>               return "EOF"
.                     return "INVALID"

/lex

%start program

// phrase-structure section of the grammar
// =======================================

%%

program
    : e1 EOF   { return $1; }
    ;

// ********* this is where you must write your grammar ****************





//****************** do NOT modify the code below ********************

%%

// since JavaScript does not have built-in operators for NAND, NOR or XOR,
// you must call these helper functions in your interpreter's code

function NAND(a,b) { return  !(a && b); }
function NOR(a,b)  { return  !(a || b); }
function XOR(a,b)  { return  a && !b || !a && b; }
