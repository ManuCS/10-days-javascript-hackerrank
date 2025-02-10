/*
 * Create the function factorial here
 */

function factorial(n) {
    for(var i = n - 1; i >= 1; i--) {
        n = n*i;
    }
    
    return n;
}

//Example --- no solution
console.log(factorial(4));