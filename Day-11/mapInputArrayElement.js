const mapNameString = (string) => string.split(':')[0].toLowerCase();

const mapStartingItemsString = (string) => {
    const newString = string.replace('Starting items:', '');
    let arr = newString.split(', ');
    arr = arr.map(value => parseInt(value, 10));
    return arr;
    
}

const mapOperationString = (string) => {
    let op = string.split('old ')[1];
    op = op.split(' ');
    if(op[1] === 'old'){
        switch(op[0]){
            case '*':
                return (value) => value * value;
                break;
            case '+':
                return (value) => value + value;
        }
    } else {
        const numInOp = parseInt(op[1], 10);
        switch(op[0]){
            case '*':
                return (value) => value * numInOp;
                break;
            case '+':
                return (value) => value + numInOp;
        }
    }
}

const mapTestString = (string) => {
    return (value) => value/parseInt(string.split('by ')[1], 10);
}

const mapTrueOrFalseString = (string) => string.split('to ')[1];

function mapInputArrayElement(element) {
    const arr = element.split(/\n/);
    const name = mapNameString(arr[0]);
    const startingItems = mapStartingItemsString(arr[1]);
    const operation = mapOperationString(arr[2]);
    const test = mapTestString(arr[3]);
    const trueThrowToMonkey = mapTrueOrFalseString(arr[4]);
    const falseThrowToMonkey = mapTrueOrFalseString(arr[5]);

    return [name, startingItems, operation, test, trueThrowToMonkey, falseThrowToMonkey];
}

export default mapInputArrayElement;