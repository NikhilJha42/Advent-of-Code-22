import { arrayCumulativeSum, smallDataSort } from "../utilities.js";
import { input1 as input } from "./input1.js";

const inputArray = input.split(/\n\n/);

const foodItems = {};

for(let i=0; i < inputArray.length; i++) {
    const items = inputArray[i].split(/\n/);
    foodItems[`elf${i+1}`] = items.map((item) => Number(item));
}

let highestCalories = [0, 0, 0];

for(const elf in foodItems) {
    const elfTotalCalories = foodItems[elf].reduce(arrayCumulativeSum);

    if(elfTotalCalories > highestCalories[0]){
        highestCalories[0] = elfTotalCalories;
        highestCalories = smallDataSort(highestCalories);
    }
}

console.log(highestCalories.reduce(arrayCumulativeSum));