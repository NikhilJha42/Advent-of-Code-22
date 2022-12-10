// Return cumulative Sum of an Array
export const arrayCumulativeSum = (acc, currentVal) => acc + currentVal;
// Sort function for small data sets - returns new array.
export const smallDataSort = (arr) => {
    const sorted = [arr[0]]
    for(let i=1; i < arr.length; i++){
        for(let j=i-1; j >= 0; j--){
            if(arr[i] > sorted[j]) {
                if(j === i-1){
                    sorted.push(arr[i]);
                } else {
                    sorted.splice(j+1, 0, arr[i])
                }
                break;
            }
            if(j === 0){
                sorted.unshift(arr[i]);
            }
        }
    }
    return sorted;
}
// Split a multiline string into an array of strings separated y a newline.
export const separateStringByNewlines = (str) => str.split(/\n/);
// Check if two arrays are index and value equal:
export const checkTwoArraysAreEqual = (arr1, arr2) => {
    let output = true;
    if(arr1.length === arr2.length){
        for(let i=0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]){
                output = false;
                break;
            }
        }
    } else{
        output = false;
    }
    return(output);
}