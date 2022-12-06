// Part A: For each move, the crates are transfered one by one,
// and so their order on the new stack is reversed.
import { input5Crates, input5Moves } from "./input5.js";
import { separateStringByNewlines } from "../utilities.js";

const inputArrayCrates = separateStringByNewlines(input5Crates);
let inputArrayMoves = separateStringByNewlines(input5Moves);

// Step 1: Find number of stacks, and the number of characters 
//we need to iterate over on each line.
const stackNumbers = inputArrayCrates[inputArrayCrates.length - 1];
const numOfStacks = parseInt(stackNumbers[stackNumbers.length - 1]);
const numOfLayers = inputArrayCrates.length - 1;

// Step 2: Iterate over each layer of inputArrayCrates to add crates to each
// stack:

const inputStacks = [];
for(let i=0; i < numOfStacks; i++){
    inputStacks.push([]);
}

for(let i=0; i < numOfLayers; i++){
    const layer = inputArrayCrates[i];
    for(let j=0; j < numOfStacks; j++){
        if(layer[4*j] === '['){
            inputStacks[j].push(layer[4*j + 1]);
        }
    }
}

// Step 3: Map the inputMoves into an object format:
inputArrayMoves = inputArrayMoves.map((move) => move.split(/\s/));
inputArrayMoves = inputArrayMoves.map((move) => move.filter(word => parseInt(word)));
inputArrayMoves = inputArrayMoves.map((move) => {
    return {
        numberOfCratesToMove: parseInt(move[0], 10),
        fromStack: parseInt(move[1], 10),
        toStack: parseInt(move[2], 10)
    }
});

// Step 4: Define a function that takes an object and an array as parameters, 
// and modifies the array based on object instructions:

function moveCrates(move, stacks){
    for(let i=0; i < move.numberOfCratesToMove; i++){
        let crateToMove = stacks[move.fromStack - 1].shift();
        stacks[move.toStack - 1].unshift(crateToMove);
    }
}

for(const move of inputArrayMoves){
    moveCrates(move, inputStacks);
}

// Step 5: Log the solution to the console.

let output = '';
for (const stack of inputStacks){
    output = output + stack[0];
}

console.log(output);