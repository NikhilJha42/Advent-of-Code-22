import { input4 as input } from "./input4.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Separate the list by newlines into array:
let inputArray = separateStringByNewlines(input);

// Step 2: Separate each pair into a two item array, and then split the chore range into a two item array:
inputArray = inputArray.map((element) => element.split(/,/));
inputArray = inputArray.map((element) => [(element[0].split(/-/)), element[1].split(/-/)]);

// Step 3: Set up conditionals for counting the pairs of intervals where one is contained within the other:

let counter = 0;

for (const item of inputArray){
    const elf1Start = parseInt(item[0][0]);
    const elf1End = parseInt(item[0][1]);
    const elf2Start = parseInt(item[1][0]);
    const elf2End = parseInt(item[1][1]);
    // Two intervals [a,b] and [c,d]. Possible ways for one to be contained within the other:
    // Either a = c or b = d;
    // c < a and b < d;
    // a < c and d < b;
    if(elf1Start === elf2Start || elf2End === elf1End){
        counter++;
    } else if(elf2Start < elf1Start && elf1End < elf2End){
        counter++;
    } else if(elf1Start < elf2Start && elf2End < elf1End){
        counter++;
    }
};

console.log(counter);