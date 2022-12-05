// Part B: For each move, crates are moved as one and so retain 
// their original order on top of their new stack. 
import { input5Crates, input5Moves } from "./input5.js";
import { separateStringByNewlines } from "../utilities.js";

const inputArrayCrates = separateStringByNewlines(input5Crates);
let inputArrayMoves = separateStringByNewlines(input5Moves);

// Step 1: Find number of stacks, and the num of characters we need to iterate over on each line.
const stackNumbers = inputArrayCrates[inputArrayCrates.length - 1];
const numOfStacks = parseInt(stackNumbers[stackNumbers.length - 1]);
const numOfLayers = inputArrayCrates.length - 1;

// Step 2: Iterate over all but the last entry in input5Crates, 
//and iterate over every four characters to determine 
// if there is a crate to be added:

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

// Step 3: Map the inputMoves into a useful format:
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
    let cratesToBeMoved = [];
    for(let i=0; i < move.numberOfCratesToMove; i++){
        let crateToMove = stacks[move.fromStack - 1].shift();
        cratesToBeMoved.push(crateToMove);
    }
    stacks[move.toStack - 1].unshift(...cratesToBeMoved);
}

for(const move of inputArrayMoves){
    moveCrates(move, inputStacks);
}

// Logging the solution to the console.
let output = '';
for (const stack of inputStacks){
    output = output + stack[0];
}

console.log(output);