import { input8 } from "./input8.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Transform input into a matrix.
const inputArray = separateStringByNewlines(input8);

const inputMatrix = [];
for(let element of inputArray){
    inputMatrix.push(element.split('')); // NB: since heights are single digits,
                                         // we can leave them as strings.
}

// Step 2: Create a functions that takes co-ordinates 
// (i,j) and checks whether tree is visible:

function checkVisibilityToTheLeft(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    if(i === 0 || j === 0 || i === (colLen - 1) || j === (rowLen - 1)){
        return true;
    } else {
        const value = coordinatesMatrix[i][j];
        let greaterValue;
        // Checking left of entry:
        for(let k=0; k < j; k++){
            if(coordinatesMatrix[i][k] >= value){
                greaterValue = value;
            } 
        }
        return !greaterValue ? true : false;
    }
}

function checkVisibilityToTheRight(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    if(i === 0 || j === 0 || i === (colLen - 1) || j === (rowLen - 1)){
        return true;
    } else {
        const value = coordinatesMatrix[i][j];
        let greaterValue;
        // Checking left of entry:
        for(let k=j+1; k < rowLen; k++){
            if(coordinatesMatrix[i][k] >= value){
                greaterValue = value;
            } 
        }
        return !greaterValue ? true : false;
    }
}

function checkVisibilityAbove(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    if(i === 0 || j === 0 || i === (colLen - 1) || j === (rowLen - 1)){
        return true;
    } else {
        const value = coordinatesMatrix[i][j];
        let greaterValue;
        // Checking left of entry:
        for(let k=0; k < i; k++){
            if(coordinatesMatrix[k][j] >= value){
                greaterValue = value;
            } 
        }
        return !greaterValue ? true : false;
    }
}

function checkVisibilityBelow(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    if(i === 0 || j === 0 || i === (colLen - 1) || j === (rowLen - 1)){
        return true;
    } else {
        const value = coordinatesMatrix[i][j];
        let greaterValue;
        // Checking left of entry:
        for(let k=i+1; k < colLen; k++){
            if(coordinatesMatrix[k][j] >= value){
                greaterValue = value;
            } 
        }
        return !greaterValue ? true : false;
    }
}

function checkVisibility(i, j, coordinatesMatrix){ // i: rows, j: cols.
    if(checkVisibilityToTheLeft(i, j, coordinatesMatrix) 
        || checkVisibilityToTheRight(i, j, coordinatesMatrix)
        || checkVisibilityAbove(i, j, coordinatesMatrix)
        || checkVisibilityBelow(i, j, coordinatesMatrix)) {
            return true;
    } else {return false};
}

// Step 3: Iterate over each pair of coordinates 
// (i, j) and count the number which are visible:

let visibleCounter = 0;

for(let i=0; i < inputMatrix.length; i++){
    for(let j=0; j < inputMatrix[i].length; j++){
        if(checkVisibility(i, j, inputMatrix)){
            visibleCounter++;
        }
    }
}

console.log(visibleCounter);