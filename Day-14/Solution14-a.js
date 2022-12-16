import { input14 } from "./input14.js";
import { smallDataSort } from "../utilities.js";
// Step 1: Split into inputArray; then split each element into an array of [y,x] coordinates 
// (y, x) corresponds to (col, row):
let inputArray = input14.split(/\n/);
inputArray = inputArray.map(str => str.split(' -> '));
for(let i=0; i < inputArray.length; i++){
    inputArray[i] = inputArray[i].map(str => str.split(',')); 
    for(let j=0; j < inputArray[i].length; j++){
        inputArray[i][j] = inputArray[i][j].map(elem => parseInt(elem, 10));
        inputArray[i][j].reverse();
    }   
}

// Step 2: Find y_max and x_max; 
// Create a matrix with elements of '.' of dimensions y_max + 1, x_max + 1;
// Store in an object with method for getting and setting matrix elements:
let y_max = 0;
let x_max = 0;
for(let i=0; i < inputArray.length; i++){
    for(let j=0; j < inputArray[i].length; j++){
        if(inputArray[i][j][1] > y_max){
            y_max = inputArray[i][j][1];
        }
        if(inputArray[i][j][0] > x_max){
            x_max = inputArray[i][j][0];
        }
    }
}
//console.log(y_max, x_max); // 552, 157

const inputMatrix = [];
for(let i=0; i < x_max + 1; i++){
    inputMatrix.push([]);
    for(let j=0; j < y_max + 1; j++){
        inputMatrix[i].push('.');
    }
}

class Cave {
    constructor(matrix){
        this.matrix = matrix.slice();
    }

    row(i) {
        return this.matrix[i];
    }

    valueAt(i,j) {
        return this.matrix[i][j];
    }

    setValueAt(value, row, col) {
        this.matrix[row][col] = value;
    }
}

const cave = new Cave(inputMatrix);

// Step 3: For each element in inputArray, find the set of coordinates making up the rock;
// For each [y, x], set matrix[x][y] = '#':

for(let k=0; k < inputArray.length; k++){
    const test = inputArray[k];

//let rows = [];

    for(let i=0; i < test.length-1; i++){
        const x1 = test[i][0];
        const x2 = test[i+1][0];
        const y1 = test[i][1];
        const y2 = test[i+1][1];
        //rows.push(x1, x2);
        if(x1 < x2){
        for(let j=x1; j <= x2; j++){
            cave.setValueAt('#', j, y1);
        }
        }
        if(y1 < y2){
        for(let j=y1; j <= y2; j++){
            cave.setValueAt('#', x1, j);
        }
        }
        if(x2 < x1){
        for(let j=x2; j <= x1; j++){
            cave.setValueAt('#', j, y1);
        }
        }
        if(y2 < y1){
        for(let j=y2; j <= y1; j++){
            cave.setValueAt('#', x1, j);
        }
        }
    }
}

// Step 4: Write function for attempting to execute a move - 
// (one down, one diagonally left, one diagonally right) in that order:

function moveDown(i, j){
    if(i < x_max){
        if(cave.valueAt(i+1,j) === '.'){
            return [i+1, j];
        } else if(cave.valueAt(i+1,j-1) === '.'){
            return [i+1, j-1];
        } else if(cave.valueAt(i+1, j+1) === '.'){
            return [i+1, j+1];
        } else {
            return false;
        }
    } else{
        return null;
    }
}

function sandGrainFall(rowStart, colStart){
    let i = rowStart;
    let j = colStart;
    let atEnd = false;
    let done = false;
    while(!done){
        const nextPos = moveDown(i, j);
        if(nextPos){
            i = nextPos[0];
            j = nextPos[1];
        } else {
            if(nextPos === false){
                cave.setValueAt('S', i, j);
            }
            if(nextPos === null){
                atEnd = true;
            }
            done = true;
        }
    }
    return atEnd;
}

// Step 5: Call sandGrainFall(0, 500) until it returns false,
// and so the previous grain of sand was the last to come to rest
let finished = false;
let counter = -1;
while(!finished){
    counter++;
    finished = sandGrainFall(0, 500);
}
console.log(counter);
// Answer was 719.