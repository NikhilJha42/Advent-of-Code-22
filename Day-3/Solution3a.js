import { input3 as input } from "./input3.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Array each item:
const inputArray = separateStringByNewlines(input);

// Step 2: Compare first half of each string element to second half for a common element, and put these in an array:
const commonItems = [];
for (const rucksack of inputArray) {
    const rucksackLength = rucksack.length;
    const rucksackHalfLength = (rucksack.length)/2;
    let done = false;
    let i = 0;
    while(!done){
        for(let j=rucksackHalfLength; j < rucksackLength; j++){
            if(rucksack[i] === rucksack[j]){
                commonItems.push(rucksack[i]);
                done = true;
                break;
                } 
            }
        i++;
        }
    }

console.log(inputArray.length, commonItems.length);
// Step 3: Find cumulative sum of the priorities of the common element (a - z:1 - 26, A - Z:27 - 52):

const alphabetString = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

let totalPriority = 0;

for (const letter of commonItems){
    let done = false;
    let i = 0;
    while(!done){
        if(letter === alphabetString[i]){
            totalPriority = totalPriority + i + 1;
            done = true;
        } else {
            i++;
        }
        if(i === alphabetString.length){
            done = true;
            console.log(`Error: no matches found for ${letter} in commonItems`);
        }
    }
}

console.log(totalPriority);