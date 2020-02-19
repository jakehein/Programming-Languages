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
e1
    : e2
      { $$ = $1; }
    | e1 "XOR" e2
      { $$ = XOR ( $1, $3 ); } // fix
    ;
e2
    : e3
      { $$ = $1; }
    | e2 "OR" e3
      { $$ = $1 || $3; }
    | e2 "NOR" e3
      { $$ = NOR ( $1, $3 ); } // fix
    ;
e3
    : e4
      { $$ = $1; }
    | e3 "AND" e4
      { $$ = $1 && $3; }
    | e3 "NAND" e4
      { $$ = NAND ( $1, $3 ); } // fix
    ;
e4
    : e5
      { $$ = $1; }
    | "NOT" e4
      { $$ = ! $2; }
    ;
e5
    : "TRUE"
      { $$ = true; }
    | "FALSE"
      { $$ = false; }
    | "LPAREN" e1 "RPAREN"
      { $$ = $2; }
    ;
//****************** do NOT modify the code below ********************

%%

// since JavaScript does not have built-in operators for NAND, NOR or XOR,
// you must call these helper functions in your interpreter's code

function NAND(a,b) { return  !(a && b); }
function NOR(a,b)  { return  !(a || b); }
function XOR(a,b)  { return  a && !b || !a && b; }
