// Lab 8 - Anon Functions and Callbacks
// Author: Gabriel Specht
// Date: 5/8/2025

let myArray = [2, 1, 2, 12, 22] 

//takes a number, divides it by 2, then adds 12
function myFunction(param1) {
  let results = ((param1 / 2) + 12);
  return results;
}

console.log("Array: " + myArray);

let mapResults1 = myArray.map(myFunction);
console.log("Non-anon Function: " + mapResults1);

//takes myArray and multiplies each number by 7
console.log("Anon Function: " + myArray.map(function(num){
  return num * 7;
}));