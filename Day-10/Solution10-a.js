import { input10 } from "./input10.js";
import { separateStringByNewlines } from "../utilities.js";

const inputArray = separateStringByNewlines(input10);

let X = 1;

let i = 0;
let j = 0;

let cycleToCheckSignalStrengthAt = 20;

const signalStrengths = [];

while(i < 220) {
    const line = inputArray[j];
    j++;
    if(!line){
        console.log(i, line);
        break;
    }
    if(line === 'noop'){
        i += 1;
        if(i === cycleToCheckSignalStrengthAt){
            signalStrengths.push(X*i);
            cycleToCheckSignalStrengthAt+=40;
        }
    } else {
        const numToAdd = parseInt(line.split(' ')[1]);
        i += 1;
        if(i === cycleToCheckSignalStrengthAt){
            signalStrengths.push(X*i);
            cycleToCheckSignalStrengthAt+=40;
        }
        i += 1;
        if(i === cycleToCheckSignalStrengthAt){
            signalStrengths.push(X*i);
            cycleToCheckSignalStrengthAt+=40;
        }
        X += numToAdd;
    }

}

console.log(signalStrengths.reduce((prev, current) => prev + current));