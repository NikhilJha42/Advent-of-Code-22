import { input9 } from "./input9.js";
import { separateStringByNewlines, checkTwoArraysAreEqual } from "../utilities.js";
import { End } from "./classes.js";

const inputArray = separateStringByNewlines(input9);

const rope = [];
let ropeLength = 10;
for(let i=0; i < ropeLength; i++){
    rope.push(new End([0, 0]));
}
// Step 2: Iterate over the instruction list, split each instruction into [dir, num], and
// iterate over num, moving the head by one and the following knots to be adjacent.

for(let i=0; i < inputArray.length; i++){
    const dir = inputArray[i].split(' ')[0];
    const num = parseInt(inputArray[i].split(' ')[1], 10);
    for(let j=0; j < num; j++){
        rope[0].move(dir);
        for(let k=1; k < ropeLength; k++){
            rope[k].moveToBeAdjacentWith(rope[k-1]);
        }
    }
}

console.log('Answer = ', rope[9].prevPositions.length);