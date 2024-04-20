// Assignment No 8
// Code of Assignment No 8 is Given Below.


// Problem No 1
// function increament0to1(i){
//     for(i=1; i<=10; i++){
//         console.log(i)
//     }
// }
// increament0to1(1);


// Problem no 2
// let num = [2,4,2,5,3,7,6,9,10,11,19,22,24];

// for(let i = 0; i<num.length; i += 1){
//     if(num[i] % 2 == 0){
//         console.log(num[i]);
//     }
// };


// Problem No 3
// function removeAllOccurrences(arr, element) {
//     let newArray = [];
//     for (let i=0; i<arr.length; i++) {
//         if (arr[i] !== element) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// const originalArray = [1, 2, 3, 4, 2, 5, 2];
// const elementToRemove = 2;
// const newArray = removeAllOccurrences(originalArray, elementToRemove);
// console.log(newArray);


// Problem No 4
// function power(base, exponent) {
//     let result = 1;
//     for (let i=0; i<exponent; i++) {
//           result *= base;
//     }
//     return result;
// }

// const base = prompt("Enter Base Number");
// const exponent = prompt("Enter Exponent Number");
// const result = power(base, exponent);
// console.log(result);




// Problem No 5
// const rows = 20;

// for (let i=1; i<=rows; i++) {
//     let pattern = '';
//     for (let j = 1; j <= i; j++) {
//         pattern += j + ' ';
//     }
//     console.log(pattern);
// }




// Problem No 6
// let digit = prompt("Enter Any Digits to Get Length Of Digits");

// function countDigits(digit){
//     return digit.length;
// }

// const digitCount =  countDigits(digit);
// console.log("Number of Digits: " + digitCount);


// Problem No 7

// function sumOfDigits(number) {
//     let sum = 0;
//     while (number > 0) {
//         sum += number % 10; // Add the last digit to the sum
//         number = Math.floor(number / 10); // Remove the last digit from the number
//     }
//     return sum;
// }

// const num = 12345111000000000121212;  // Input for Code
// const digitSum = sumOfDigits(num);
// console.log("Sum of digits:", digitSum); // Output: 15 (1 + 2 + 3 + 4 + 5)




// Problem No 8
// function findLargestNumber(arr) {
//     if (arr.length === 0) {
//         return "Array is empty";
//     }

//     let largest = arr[0];

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largest) {
//             largest = arr[i];
//         }
//     }

//     return largest;
// }

// const numbers = [3, 9, 2, 5, 7, 10];
// console.log("The largest number is:", findLargestNumber(numbers));




// Problem No 10
// function findDuplicates(arr) {
//     let duplicates = [];
//     let counts = {};

//     for (let i = 0; i < arr.length; i++) {
//         let num = arr[i];
//         counts[num] = counts[num] ? counts[num] + 1 : 1;
//     }

//     for (let num in counts) {
//         if (counts[num] > 1) {
//             duplicates.push(Number(num));
//         }
//     }

//     return duplicates;
// }

// const array = [1, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 8, 9];
// console.log("Duplicate values in the array:", findDuplicates(array));




// Problem No 11
// function linearSearch(arr, target) {

//     for (let i = 0; i < arr.length; i++) {

//         if (arr[i] === target) {
//             return i;
//         }
//     }
//     return -1;
// }

// const array = [3, 6, 8, 2, 4, 9, 1];
// const target = 4;
// const result = linearSearch(array, target);

// if (result !== -1) {
//     console.log("Target", target, "found at index:", result);
// } else {
//     console.log("Target", target, "not found in the array.");
// }


// Problem No 12
// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;

//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);

//         if (arr[mid] === target) {
//             return mid;
//         }

//         if (arr[mid] < target) {
//             left = mid + 1;
//         } 
//         else {
//             right = mid - 1;
//         }
//     }

//     return -1;
// }

// const array = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
// const target = 15;
// const result = binarySearch(array, target);

// if (result !== -1) {
//     console.log("Target", target, "found at index:", result);
// } else {
//     console.log("Target", target, "not found in the array.");
// }
