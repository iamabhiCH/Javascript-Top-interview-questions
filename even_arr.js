/* 
    Write a JavaScript function that takes an array of numbers and 
    returns a new array with only the even numbers. 
*/

let numberArr = [12,3456,31,79,56,23451,1190,5678,80,44,77,23,29,404,889,9890,456,91];

let eArr = [];

function findEvenNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            eArr.push(arr[i]);
        }
    }
}

findEvenNumbers(numberArr);
console.log(eArr);
