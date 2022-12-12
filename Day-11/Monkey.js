class Monkey {
    constructor(
        name, 
        startingItems, 
        opFunction, 
        testFunction,
        trueInstruction,
        falseInstruction){
        this._name = name; // String
        this._items = startingItems; // Array
        this._op = opFunction; // function with one parameter
        this._test = testFunction; //function with one parameter
        this._trueThrow = trueInstruction; // string
        this._falseThrow = falseInstruction; // string
        this._numOfInspections = 0;
    }

    get name() {
        return this._name;
    }
    get items() {
        return this._items;
    }
    get trueThrow() {
        return this._trueThrow;
    }
    get falseThrow() {
        return this._falseThrow;
    }
    get numOfInspections() {
        return this._numOfInspections;
    }
    get numOfItems() {
        return this._items.length;
    }
    operation(old) {
        return this._op(old);
    }

    test(value) {
        const testValue = this._test(value);
        return testValue === Math.floor(testValue);
    }

    addInspection() {
        this._numOfInspections++;
    }

    inspect() {
        if(this.numOfItems === 0){
            return 'No items left';
        } else {
            this.addInspection();
            return this._items.shift();
        }
    }

    recieve(item) {
        this._items.push(item);
    }

}

export default Monkey;