/*
 * Complete the reverseString function
 * Use console.log() to print to stdout.
 */
function reverseString(s) {
    try{
        let stringSplit = s.split("");
        let arrayReverse = stringSplit.reverse();
        let stringReverse = arrayReverse.join("");
        console.log(stringReverse);
    }
    catch(error){
        console.log(error.message);
        console.log(s);
    }
}


reverseString("1234");