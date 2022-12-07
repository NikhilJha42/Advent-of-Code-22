import { input7 } from "./input7.js";
import { separateStringByNewlines } from "../utilities.js";
import makeTree from "./makeTree.js";

// Step 1: Transform input into inputArray:
const inputArray = separateStringByNewlines(input7);

// Step 2: Define functions for making directories (dir), files and trees 
// as objects, then transform inputArray:

const inputTree = makeTree(inputArray);

// Step 3: Find sum of sizes of the directories with a total size of 
// less than 100000 (NB: total size is all files a directory contains, 
// directly or indirectly, and files are to be counted more than once):

function findSumOfDirSizesOfAtMost(x, checkingDirsArray) {
    let output = 0;
    for(let dir of checkingDirsArray){
        if(dir.isAtMost(x)){
            output += dir.totalSize;
        }
        output += findSumOfDirSizesOfAtMost(x, dir.dirs);
    }
    return output;
}

console.log(findSumOfDirSizesOfAtMost(100000, [inputTree]));