import { input7 } from "./input7.js";
import { separateStringByNewlines } from "../utilities.js";
import makeTree from "./makeTree.js";

// Step 1: Transform input into inputArray:
const inputArray = separateStringByNewlines(input7);

// Step 2: Define functions for making directories (dir), files and trees 
// as objects, then transform inputArray:

const inputTree = makeTree(inputArray);

// Step 3: Find smallest directory with a size greater than minSizeNeeded.

function findSmallestDirsWithSizeAtLeast(x, checkingDirsArray) {
    let output = [];
    for(let dir of checkingDirsArray){
        if(dir.isAtLeast(x)){
            output.push(dir.totalSize);
        }
        let subOutput = findSmallestDirsWithSizeAtLeast(x, dir.dirs);
        for(let addition of subOutput){
            output.push(addition);
        }
    }
    return output;
}

const minSizeNeeded = 30000000 - (70000000 - inputTree.totalSize);

const outputArray = findSmallestDirsWithSizeAtLeast(minSizeNeeded, [inputTree]);
let minSizeToDelete = outputArray[0]; //This is the total size of the root directory.

for(let i=0; i < outputArray.length; i++){
    if(outputArray[i] < minSizeToDelete){
        minSizeToDelete = outputArray[i];
    }
}

console.log(minSizeToDelete);