import { input9 } from "./input9.js";
import { separateStringByNewlines, checkTwoArraysAreEqual } from "../utilities.js";
import { End } from "./classes.js";

const inputArray = separateStringByNewlines(input9);

const rope = [];
for(let i=0; i < 10; i++){
    rope.push(new End([0, 0]));
}
// Step 2: Iterate over the instruction list, split each instruction into [dir, num], and
// iterate over num, moving the head by one and the tail to be adjacent as appropriate.
let reached = false;
for(let i=0; i < inputArray.length; i++){
    const dir = inputArray[i].split(' ')[0];
    const num = parseInt(inputArray[i].split(' ')[1], 10);
    for(let j=0; j < num; j++){
        rope[0].moveOne(dir);
        rope[0].updatePrevPositions();
        for(let k=1; k < 10; k++){
            rope[k].moveToBeAdjacentWith(rope[k-1]);
        }
    }
    if(i > 295 && i < 305){
        reached = true;
        console.log(i);
        console.log(rope[9].currentPosition);
    }
}// Need to update moveToBeAdjacentTo method to update to correct place for knot ahead.

console.log('Final Positions')
for(let i=0; i < 10; i++){
    console.log(rope[i].currentPosition);
}

console.log('Answer = ', rope[9].prevPositions.length);