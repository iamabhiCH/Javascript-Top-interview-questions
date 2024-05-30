// Write a JavaScript program to find the largest element in a nested array. 

const nestedArray = [1, [3, 4], [5, 6, [7, 8, 9]], 2];

function  findLargest(arr) {
    let arrVal = -Infinity;

    for(let i = 0; i<arr.length;i++){
        if (Array.isArray(arr[i])){
            const val = findLargest(arr[i]);
            if(val > arrVal){
                arrVal = val;
            }
        } else {
            if(arr[i] > arrVal){
                arrVal = arr[i];
            }
        }
    }
    return arrVal;
}

console.log("largest element of the array is : ", findLargest(nestedArray));
