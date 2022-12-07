import { input4 as input } from "./input4.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Separate the list by newlines into array:
let inputArray = separateStringByNewlines(input);

// Step 2: Separate each pair into a two item array, and then split the chore range into a two item array:
inputArray = inputArray.map((element) => element.split(/,/));
inputArray = inputArray.map((element) => [(element[0].split(/-/)), element[1].split(/-/)]);

// Step 3: Set up conditionals for non-overlapping pairs, and then deduct from total to find answer:

let counter = 0;

for (const item of inputArray){
    let elf1Start = parseInt(item[0][0]);
    let elf1End = parseInt(item[0][1]);
    let elf2Start = parseInt(item[1][0]);
    let elf2End = parseInt(item[1][1]);
    // Non-overlap options: [a,b] and [c,d] where either b < c or d < a
    if(elf1End < elf2Start || elf2End < elf1Start){
        counter++;
    }
};

console.log(inputArray.length - counter);