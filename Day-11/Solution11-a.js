import input11 from "./input11.js";
import mapInputArrayElement from "./mapInputArrayElement.js";
import Monkey from "./Monkey.js";
import { smallDataSort } from '../utilities.js';

let inputArray = input11.split(/\n\n/);
inputArray = inputArray.map(element => mapInputArrayElement(element));
inputArray = inputArray.map(element => new Monkey(...element));

const monkeys = {};
for(let i=0; i < inputArray.length; i++){
    monkeys[inputArray[i].name] = inputArray[i];
}

function inspection(monkey){
    let item = monkey.inspect();
    item = monkey.operation(item);
    return item;
}

function oneThrow(monkey){
    if(monkey.numOfItems){
        const item = inspection(monkey);
        if(monkey.test(item)){
            const passTo = monkeys[monkey.trueThrow];
            monkeys[monkey.trueThrow].recieve(item);
        } else {
            const passTo = monkeys[monkey.falseThrow];
            monkeys[monkey.falseThrow].recieve(item);
        }
        return true;
    } else{
        return false;
    }
}

function round(obj){
    for(const name in obj){
        const monkey = obj[name];
        let done = false;
        while(!done){
            if(!oneThrow(monkey)){
                done = true;
            }
        }
    }
}

for(let i=0; i < 10000; i++){
    round(monkeys);
}

let inspections = [];

for (let name in monkeys){
    inspections.push(monkeys[name].numOfInspections);
}


inspections = smallDataSort(inspections);

// Part B is not 14409351320.
// Part B is not 129556803584.
// Part B is not 14409472054.
// Part B is not 14410919314.
const highestNumOfInspections = inspections[inspections.length - 1];
const secondHighestNumOfInspections = inspections[inspections.length - 2];
console.log(highestNumOfInspections*secondHighestNumOfInspections);