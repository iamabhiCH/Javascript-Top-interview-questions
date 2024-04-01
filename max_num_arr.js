// Write a Write a JavaScript program to find the maximum number in an array. 

let arr = [89,70,56,123,45,67,764,77,99,340,651];
let tmp = arr[0];

for(let i = 0; i < arr.length; i++){
    if (arr[i] > tmp){
        tmp = arr[i];
    }
}

console.log("Maximum number of the array is : ", tmp);