function extractFileSizes(arr) {
    return arr.map(file => file.size);
}

export class File {
    constructor(string) {
        const description = string.split(' ');
        this.name = description[1];
        this.size = parseInt(description[0], 10);
    }
}

export class Dir {
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
    isAtLeast(x) {
        return (this.totalSize >= x ? true : false);
    }   
}