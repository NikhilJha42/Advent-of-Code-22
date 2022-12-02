export const arrayCumulativeSum = (acc, currentVal) => acc + currentVal;
// sort function for small data sets - returns new array.
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