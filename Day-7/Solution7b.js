import { input7 } from "./input7.js";
import { separateStringByNewlines } from "../utilities.js";

// Step 1: Transform input into inputArray:
const inputArray = separateStringByNewlines(input7);

// Step 2: Define functions for making directories (dir), files and trees 
// as objects, then transform inputArray:

function extractFileSizes(arr) {
    return arr.map(file => file.size);
}

function makeDir(string) {
    return { 
        name: string.replace('dir ', ''), 
        dirs: [], 
        files: [],
        findDir(string) {
            return this.dirs.find(dir => dir.name === string);
        },
        addDir(string) {
            this.dirs.push(makeDir(string));
        },
        addFile(string) {
            this.files.push(makeFile(string));
        },
        get directTotalSize() {
            let fileSizes = extractFileSizes(this.files);
            let accumulatorSize = 0;
            for(let fileSize of fileSizes){
                accumulatorSize += fileSize;
            }
            return accumulatorSize;
        },
        get totalSize() {
            let currentTotalSize = this.directTotalSize;
            for(let dir of this.dirs){
                currentTotalSize = currentTotalSize + dir.totalSize;
            }
            return currentTotalSize;
        },
        isAtMost(x) {
            return (this.totalSize <= x ? true : false);
        },
        isAtLeast(x) {
            return (this.totalSize >= x ? true : false);
        }     
    }
}

function makeFile(string) {
    const description = string.split(' ');
    return { name: description[1], size: parseInt(description[0], 10) }
}

function makeTree(arr) {
    let tree = makeDir('/');
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

// Step 3: Find smallest directory with a size greater than minSizeNeeded.

function findSmallestDirsWithSizeAtLeast(x, checkingDirsArray) {
    let output = [];
    for(let dir of checkingDirsArray){
        if(dir.isAtLeast(x)){
            output.push(dir.totalSize);
        }
        let subOutput = findSmallestDirsWithSizeAtLeast(x, dir.dirs);
        for(let addition of subOutput){
            output.push(addition);
        }
    }
    return output;
}

const minSizeNeeded = 30000000 - (70000000 - inputTree.totalSize);

const outputArray = findSmallestDirsWithSizeAtLeast(minSizeNeeded, [inputTree]);
let minSizeToDelete = outputArray[0]; //This is the total size of the root directory.

for(let i=0; i < outputArray.length; i++){
    if(outputArray[i] < minSizeToDelete){
        minSizeToDelete = outputArray[i];
    }
}

console.log(minSizeToDelete);