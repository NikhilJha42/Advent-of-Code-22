import { input8 } from "./input8.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Transform input into a matrix.
const inputArray = separateStringByNewlines(input8);

const inputMatrix = [];
for(let element of inputArray){
    inputMatrix.push(element.split('')); // NB: since heights are single digits,
                                         // we can leave them as strings.
}

// Step 2: Create functions that takes co-ordinates 
// (i,j) and returns distance to nearest tree in given direction:

function totalVisibilityToTheLeft(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    const value = coordinatesMatrix[i][j];
    let totalVisibility = 0;
    if(j === 0){
        return totalVisibility;
    } else{
        for(let k = j-1; k >= 0; k--){
            totalVisibility++;
            if(coordinatesMatrix[i][k] >= value){
                break;
            }
        }
        return totalVisibility;
    }
}

function totalVisibilityToTheRight(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    const value = coordinatesMatrix[i][j];
    let totalVisibility = 0;
    if(j === (rowLen - 1)){
        return totalVisibility;
    } else{
        for(let k = j+1; k < rowLen; k++){
            totalVisibility++;
            if(coordinatesMatrix[i][k] >= value){
                break;
            }
        }
        return totalVisibility;
    }
}

function totalVisibilityAbove(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    const value = coordinatesMatrix[i][j];
    let totalVisibility = 0;
    if(i === 0){
        return totalVisibility;
    } else{
        for(let k = i-1; k >= 0; k--){
            totalVisibility++;
            if(coordinatesMatrix[k][j] >= value){
                break;
            }
        }
        return totalVisibility;
    }
}

function totalVisibilityBelow(i, j, coordinatesMatrix){ // i: rows, j: cols.
    const rowLen = coordinatesMatrix[i].length;
    const colLen = coordinatesMatrix.length;
    const value = coordinatesMatrix[i][j];
    let totalVisibility = 0;
    if(i === (colLen - 1)){
        return totalVisibility;
    } else{
        for(let k = i+1; k < colLen; k++){
            totalVisibility++;
            if(coordinatesMatrix[k][j] >= value){
                break;
            }
        }
        return totalVisibility;
    }
}

function findScenicScore(i, j, coordinatesMatrix){
    const [v1, v2, v3, v4] = [
        totalVisibilityToTheLeft(i, j, coordinatesMatrix),
        totalVisibilityToTheRight(i, j, coordinatesMatrix),
        totalVisibilityAbove(i, j, coordinatesMatrix),
        totalVisibilityBelow(i, j, coordinatesMatrix)
    ];
    return v1*v2*v3*v4;
}

// Step 3: Iterate over each pair of coordinates 
// (i, j) and find the scenic score, updating the 
// greatest scenic score:

let greatestScenicScore = 0;

for(let i=0; i < inputMatrix.length; i++){
    for(let j=0; j < inputMatrix[i].length; j++){
        let newScenicScore = findScenicScore(i, j, inputMatrix);
        if(newScenicScore > greatestScenicScore){
            greatestScenicScore = newScenicScore;
        }
    }
}

console.log(greatestScenicScore);

// Testing:
// const testInput = `30373
// 25512
// 65332
// 33549
// 35390`;
// const testArray = separateStringByNewlines(testInput);
// const testMatrix = [];
// for(let i=0; i < testArray.length; i++){
//     testMatrix.push(testArray[i].split(''));
// }

//console.log(testMatrix);
//console.log(treeScenicScore(3, 2, testMatrix));