import { input7 } from "./input7.js";
import { separateStringByNewlines, arrayCumulativeSum } from "../utilities.js";

// Step 1: Transform input into inputArray:
const inputArray = separateStringByNewlines(input7);

// Step 2: Define functions for making directories (dir), files and trees 
// as objects, then transform inputArray:

function extractFileSizes(arr) {
    return arr.map(file => file.size);
}

class File {
    constructor(string) {
        const description = string.split(' ');
        this.name = description[1];
        this.size = parseInt(description[0], 10);
    }
}

class Dir {
    constructor(string) {
        this.name = string.replace('dir ', '');
        this.dirs = [];
        this. files = [];
    }
    addDir(string) {
        this.dirs.push(new Dir(string));
    }
    addFile(string) {
        this.files.push(new File(string));
    }
    findDir(string) {
        return this.dirs.find(dir => dir.name === string);
    }
    get directTotalSize() {
        let fileSizes = extractFileSizes(this.files);
        let accumulatorSize = 0;
        for(let fileSize of fileSizes){
            accumulatorSize += fileSize;
        }
        return accumulatorSize;
    }
    get totalSize() {
        let currentTotalSize = this.directTotalSize;
        for(let dir of this.dirs){
            currentTotalSize = currentTotalSize + dir.totalSize;
        }
        return currentTotalSize;
    }
    isAtMost(x) {
        return (this.totalSize <= x ? true : false);
    }    
}

function makeTree(arr) {
    let tree = new Dir('/');
    let currentDir = tree;
    let prevDirs = [];
    
    for(let i=1; i < arr.length; i++){
        const line = arr[i];
        if(line.match(/\$ cd/)){
            const lineArray = line.split(' ');
            if(lineArray[2] === '..'){
                currentDir = prevDirs.pop();
            } else{
                prevDirs.push(currentDir);

                currentDir = currentDir.findDir(lineArray[2]);
            }
        } else if(line.match(/dir/)){
            currentDir.addDir(line);
        } else if(line.match(/[0-9]/)){
            currentDir.addFile(line);
        }
    }
    return tree;
}

const inputTree = makeTree(inputArray);

// Step 3: Find sum of sizes of the directories with a total size of 
// less than 100000 (NB: total size is all files a directory contains, 
// directly or indirectly, and files are to be counted more than once):

function findSumOfDirSizesOfAtMost(x, checkingDirsArray) {
    let output = 0;
    for(let dir of checkingDirsArray){
        if(dir.isAtMost(x)){
            output += dir.totalSize;
        }
        output += findSumOfDirSizesOfAtMost(x, dir.dirs);
    }
    return output;
}

console.log(findSumOfDirSizesOfAtMost(100000, [inputTree]));