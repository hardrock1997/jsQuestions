 var fn = () => { 

  var print = (i) => { console.log(i); return this; }   

  var print2 = function(i) { console.log(i); return this; }



  return { print:print , print2:print2 }

}

const res = fn()

const secondRes = res.print(5)

secondRes.print2(5);

/*
output is:
5
TypeError:secondRes.print2 is not a function
*/

/*
Reason:
fn forms a closure with { print:print , print2:print2 }. 
So, res has the returned object and res.print(5) works as expected. 
It returns the value of 'this' from its definition: var print = (i) => { console.log(i); return this; } 
Due to the behaviour of arrow functions with the 'this' keyword. secondRes has the value of 'this'.
Since,fn is an arrow function and the (context for 'this' is decided by the enclosing lexical scope which in this case is the globalObject for the function fn)
and there is no print2() defined in the globalObject. Hence we get the error.

To resolve the error, if we define print2 function with a var keyword in the globalObject(window) and not a const/let keyword, we will get the desired output of 5.
let/const will not work because they do not become the properties of the window(globalObject) and only var variables become the properties of the window(globalObject).
*/
