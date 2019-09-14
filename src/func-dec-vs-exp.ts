console.log(foo()); // ERROR! foo wasn't loaded yet
var foo = function() { return 5; }
// Anonymous function expression
// will error since foo is used before assignment, 
//  even if we used var to declare foo.

console.log(foo2()); // Alerts 5. Declarations are loaded before any code can run.
function foo2() { return 5; } 
// Function declaration
// here, foo2 is declared and is loaded before console.log(foo2()) is run
//  so, no error

