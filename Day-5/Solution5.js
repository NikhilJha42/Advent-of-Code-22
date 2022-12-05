import { input5Crates, input5Moves } from "./input5.js";
import { separateStringByNewlines } from "../utilities.js";

const inputArrayCrates = separateStringByNewlines(input5Crates);
const inputArrayMoves = separateStringByNewlines(input5Moves);

// Step 1: Find number of stacks, and the num of characters we need to iterate over on each line.
const stackNumbers = inputArrayCrates[inputArrayCrates.length - 1];
const numOfStacks = parseInt(stackNumbers[stackNumbers.length - 1]);
const numOfChars = (numOfStacks - 1)*4 + 3;

// Step 2: Iterate over all but the last entry in input5Crates, 
//and iterate over every four characters to determine 
// if there is a crate to be added:

