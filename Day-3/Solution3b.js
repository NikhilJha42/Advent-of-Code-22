import { input3 as input } from "./input3.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Array each item:
const inputArray = separateStringByNewlines(input);

// Step 2: For each group of three, find the common item that corresponds to the badge.
const commonItems = [];
for(let i=0; i < inputArray.length; i = i+3){
    const [elf1, elf2, elf3] = [inputArray[i], inputArray[i+1], inputArray[i+2]];
    const commonElf1Elf2Items = [];
    for(const item1 of elf1){
        if(!commonElf1Elf2Items.find((element) => element === item1)) {
            for(const item2 of elf2){
                if(item1 === item2){
                    commonElf1Elf2Items.push(item1);
                }
            }
        }
    }
    for(const elf3Item of elf3){
        if(commonElf1Elf2Items.find((element) => element === elf3Item)){
            commonItems.push(elf3Item);
            break;
        }
    }
}

console.log(commonItems.length); //Expect 100
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