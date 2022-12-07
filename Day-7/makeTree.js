import { Dir } from "./classes.js"
export default function makeTree(arr) {
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