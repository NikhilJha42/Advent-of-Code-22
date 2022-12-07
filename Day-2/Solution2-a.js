import { input2 as input } from "./input2.js";

// Nine options: use switch case:

const inputArray = input.split(/\n/);

let totalScore = 0;

for (let i=0; i < inputArray.length; i++) {
    const game = inputArray[i];
    switch(game) {
        case 'A X':
            totalScore += 4;
            break;
        case 'A Y':
            totalScore += 8;
            break;
        case 'A Z':
            totalScore += 3;
            break;
        case 'B X':
            totalScore += 1;
            break;
        case 'B Y':
            totalScore += 5;
            break;
        case 'B Z':
            totalScore += 9;
            break;
        case 'C X':
            totalScore += 7;
            break;
        case 'C Y':
            totalScore += 2;
            break;
        case 'C Z':
            totalScore += 6;
            break;
    };
}

console.log(totalScore);