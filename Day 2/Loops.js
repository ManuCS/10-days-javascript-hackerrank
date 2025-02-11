/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    var vowels = s.match(/[aeiou]/gi);
    
    for(var i = 0; i < vowels.length; i++) {
        console.log(vowels[i]);
    }
    
    var consonants = s.replace(/[aeiou]/gi, '');
    
    for(var i = 0; i < consonants.length; i++){
        console.log(consonants[i]);
    }
}


//Example --- no solution
vowelsAndConsonants("javascriptloops");