/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a > 0){
        return "YES";
    }
    else if(a == 0){
        throw new Error("Zero Error");
    }
    else {
        throw new Error("Negative Error");
    }
}


//Example --- no solution
/*
 * Complete the isPositive function.
 * If 'a' is positive, return "YES".
 * If 'a' is 0, throw an Error with the message "Zero Error"
 * If 'a' is negative, throw an Error with the message "Negative Error"
 */
function isPositive(a) {
    if(a > 0){
        return "YES";
    }
    else if(a == 0){
        throw new Error("Zero Error");
    }
    else {
        throw new Error("Negative Error");
    }
}


// Example --- no solution
console.log(isPositive(2));
console.log(isPositive(20));
console.log(isPositive(-1));