import { input6 } from "./input6.js";

// Step 1: Set-up the relevant variables:
// - numOfCharsInSeq, the number of characters in the subsequence;
// - i, the ending index of the subsequence for use with the slice method 
//      (see below) initially set to the number of characters in the sequence;
// - seq, the subsequence of the input to be tested, initially set 
//        to the first numOfCharsInSeq entries in input6;
//        (Note: the slice function takes a subarray from an array, 
//        with indexes from and including the first argument, and 
//        up to but NOT including the second argument.)
// - done, initially set to false;

const numOfCharsInSeq = 14;
let i = numOfCharsInSeq;
let seq = input6.slice(i-numOfCharsInSeq, i);
let done = false;

// Step 2: Use a while loop to check if there are any matches in 
// the current seq; if there are not, then log the variable i. 
while(!done){
    for(let j=0; j < numOfCharsInSeq - 1; j++){
        const letterToMatch = new RegExp(seq[j]);
        const restOfSeq = seq.slice(j+1);
        if(restOfSeq.match(letterToMatch)){
            break;
        }
        if(j === numOfCharsInSeq - 2){
            done = true;
            console.log(i);
        } 
    }
    i++;
    seq = input6.slice(i-numOfCharsInSeq, i);
}