/* 
    Write a JavaScript function that takes an array of numbers and 
    returns a new array with only the even numbers. 
*/

let numbArr = [12,3456,31,79,56,23451,1190,5678,80,44,77,23,29,404,889,9890,456,91];

let evenArr = [];

function findEvenNumbers(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            evenArr.push(arr[i]);
        }
    }
}

findEvenNumbers(numbArr);
console.log(evenArr);
