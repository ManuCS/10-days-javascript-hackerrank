/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    
    let numsAscending = nums.sort();
    let largestNum = 0;
    let secondLargest = 0;
    
    for(let i = 0; i < numsAscending.length; i++){
        if(numsAscending[i] > largestNum){
            secondLargest = largestNum;
            largestNum = numsAscending[i];
        }
        else if(numsAscending[i] != largestNum && numsAscending[i] > secondLargest){
            secondLargest = numsAscending[i];
        }
    }
    
    return secondLargest;
}


// Example --- no solution
console.log(getSecondLargest([2,3,6,6,5]));