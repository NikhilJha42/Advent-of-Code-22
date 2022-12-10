import { input10 } from "./input10.js";
import { separateStringByNewlines } from "../utilities.js";

const inputArray = separateStringByNewlines(input10);

// Set initial position of sprite
let X = 1;
let sprite;
function updateSprite(){
    sprite = [X-1, X, X+1];
}
updateSprite();

let output = [];
for(let i=0; i < 6; i++){
    output.push('');
}

let j = 0;
let k = 0;
for(let line of inputArray){
    if(line === 'noop'){
        let charToAdd = sprite.includes(j) ? '#' : ' ';
        output[k] = output[k] + charToAdd;
        j++;
        if(j === 40){
            k++;
            j = 0;
        }
    } else{
        let charToAdd = sprite.includes(j) ? '#' : ' ';
        output[k] = output[k] + charToAdd;
        j++;
        if(j === 40){
            k++;
            j = 0;
        }

        charToAdd = sprite.includes(j) ? '#' : ' ';
        output[k] = output[k] + charToAdd;
        j++;
        if(j === 40){
            k++;
            j = 0;
        }

        const numToAdd = parseInt(line.split(' ')[1], 10);
        X += numToAdd;
        updateSprite();
    }
}

for(let i=0; i < output.length; i++){
    console.log(output[i]);
}