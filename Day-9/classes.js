import { checkTwoArraysAreEqual } from "../utilities.js";

// Step 1: Define class End with properties/methods:
//              _currentPosition (as an array), _prevPosition
//              getters for the properties
//              setter for _currentPosition
//              updatePrevPositions() - if currentPosition is not in _prevPosition, 
//              add them in.
//              moveOne(dir) - set new _currentPosition to be shifted one
//              displacementOf(end) - find displacement from end
//              moveToBeAdjacentWith(end) - find displacement of end, 
//              moveOne zero, once or twice as appropriate, and then updatePrevPositions

// See solution files for Step 2
export class End {
    constructor(start) {
        this._currentPosition = start;
        this._prevPositions = [start];
    }
    get currentPosition() {
        return this._currentPosition;
    }
    get prevPositions() {
        return this._prevPositions;
    }

    updatePrevPositions() {
        if(!this.prevPositions.find(element => checkTwoArraysAreEqual(element, this._currentPosition))){
            this._prevPositions.push(this._currentPosition);
        }
    }

    moveOne(dir) {
        const [i, j] = this.currentPosition;
        switch(dir){
            case 'R':
                this._currentPosition = [i+1, j];
                break;
            case 'L':
                this._currentPosition = [i-1, j];
                break;
            case 'U':
                this._currentPosition = [i, j+1];
                break;
            case 'D':
                this._currentPosition = [i, j-1];
        }
    }

    move(dir) {
        this.moveOne(dir);
        this.updatePrevPositions();
    }

    displacementOf(end) {
        const [i1, j1] = this.currentPosition;
        const [i2, j2] = end.currentPosition;
        return [i2 - i1, j2 - j1];
    }

    moveToBeAdjacentWith(end) {
        const [i, j] = this.displacementOf(end);
        switch(i) {
            case 0:
                switch(j) {
                    case 2:
                        this.moveOne('U');
                        break;
                    case -2:
                        this.moveOne('D');
                        break;
                }
                break;
            case 1:
                switch(j) {
                    case 2:
                        this.moveOne('R');
                        this.moveOne('U');
                        break;
                    case -2:
                        this.moveOne('R');
                        this.moveOne('D');
                        break;
                }
                break;
            case -1:
                switch(j) {
                    case 2:
                        this.moveOne('L');
                        this.moveOne('U');
                        break;
                    case -2:
                        this.moveOne('L');
                        this.moveOne('D');
                        break;
                }
                break;
            case 2:
                switch(j){
                    case 0:
                        this.moveOne('R');
                        break;
                    case 1:
                    case 2:
                        this.moveOne('R');
                        this.moveOne('U');
                        break;
                    case -1:
                    case -2:
                        this.moveOne('R');
                        this.moveOne('D');
                        break;
                }
                break;
            case -2:
                switch(j){
                    case 0:
                        this.moveOne('L');
                        break;
                    case 1:
                    case 2:
                        this.moveOne('L');
                        this.moveOne('U');
                        break;
                    case -1:
                    case -2:
                        this.moveOne('L');
                        this.moveOne('D');
                        break;
                }
                break;
        }
        this.updatePrevPositions();
    }
}