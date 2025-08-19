#!/usr/bin/node

//Access Array Data with Indexes
const myArray = [50, 60, 70];

const myData = myArray[0];

//Modify Array Data With Indexes
//const ourArray = [50, 40, 30];
//ourArray[0] = 15;
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0] = 45;

//Access Multi-Dimensional Arrays With Indexes
/* Example

const arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14]
];

const subarray = arr[3];
const nestedSubarray = arr[3][0];
const element = arr[3][0][1]; 

In this example, subarray has the value [[10, 11, 12], 13, 14], 
nestedSubarray has the value [10, 11, 12], 
and element has the value 11 .
*/

const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];