import { input9 } from "./input9.js";
import { separateStringByNewlines } from "../utilities.js";
import { End } from "./classes.js";

const inputArray = separateStringByNewlines(input9);

const head = new End([0, 0]);
const tail = new End([0, 0]);
// Step 2: Iterate over the instruction list, split each instruction into [dir, num], and
// iterate over num, moving the head by one and the tail to be adjacent as appropriate.

for(let i=0; i < inputArray.length; i++){
    const dir = inputArray[i].split(' ')[0];
    const num = parseInt(inputArray[i].split(' ')[1], 10);
    for(let j=0; j < num; j++){
        head.moveOne(dir);
        head.updatePrevPositions();
        tail.moveToBeAdjacentWith(head);
    }
}

console.log(head.prevPositions.length, tail.prevPositions.length);