// Assignment No 7


// Problem No 1
// JS program to find the maximum between two numbers
// let num1 = 100;
// let num2 = 79;
// let maxNumber = findmaxNumber(num1,num2);
// function findmaxNumber(num1,num2){
//     if(num1>num2){
//         return num1;
//     }
//     else{
//         return num2;
//     }
// }
// console.log("The Max Number is: " + maxNumber);



// Problem NO 2
// let number1 = 1000;
// let number2 = 1001;
// let number3 = 1921;
// let result = checkMaxNumber(number1,number2,number3);
// function checkMaxNumber(number1,number2,number3){
//     if(number1 > number2 && number3){
//         return number1;
//     }
//     else if(number2 > number1 && number3){
//         return number2;
//     }
//     else{
//         return number3;
//     }
// }
// console.log("The Max Number Between 3 numbers is : " + result)





// Problem No 3
// let num = prompt("Enter a Number");
// if(num > 0){
//     console.log("Positive");
// }
// else if(num < 0){
//     console.log("Negative");
// }
// else{
//     console.log("Zero");
// }
// console.log("The Given number is:" , num)




// Problem 4
// function checkDivisibility(num){
//     if(num % 5 === 0 && num % 11 === 0){
//         return "Yes,This Number is Divisible by 5 and 11";
//     }
//     else{
//         return "Sorry,This Number is Not Divisible by 5 and 11";
//     }
// }
// let num = prompt("Please Enter Your Number");
// let result = checkDivisibility(num);
// console.log(result);



// Problem No 5
// let numBer = prompt("Enter a Number");
// let result = checkEVENorODD(numBer);
// function checkEVENorODD(numBer){
//     if(numBer % 2 === 0 ){
//         return "The Number is Even";
//     }
//     else{
//         return "The Number is Odd";
//     }
// }
// console.log(result);




// Problem No 6
// function isLeapYear(year) {
//     if (year % 4 === 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// // Test the function
// let  year = prompt("Enter Any Year");
// if (isLeapYear(year)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not a leap year.");
// }




// Problem No 7
// function checkVowelorConsonant(char) {
//     char = char.toLowerCase();

//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         return char + " is a vowel.";
//     }

//     else if ((char >= 'a' && char <= 'z') && !(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u')) {
//         return char + " is a consonant.";
//     }

//     else {
//         return "Please enter a valid alphabet character.";
//     }
// }

// let alphabet = prompt("Enter any alphabet: ");

// if (alphabet.length === 1) {

//     console.log(checkVowelorConsonant(alphabet));
// } 
// else {
//     console.log("Please enter only a single character.");
// }




// Problem No 8
// function checkUpperCaseorLowerCase(char) {

//     if (char >= 'A' && char <= 'Z') {
//         return char + " is an uppercase alphabet.";
//     }
//     else if (char >= 'a' && char <= 'z') {
//         return char + " is a lowercase alphabet.";
//     }
//     else {
//         return "Please enter an alphabet character.";
//     }
// }

// let character = prompt("Enter any character: ");

// if (character.length === 1) {
//     console.log(checkUpperCaseorLowerCase(character));
// } else {
//     console.log("Please enter only a single character.");
// }




// Problem No 11
function countNotes(amount) {
    var denominations = [1000, 500, 200, 100, 50, 20, 10, 5, 1];
    
    var count = {};
    for (var i = 0; i < denominations.length; i++) {
        var noteCount = Math.floor(amount / denominations[i]);
        count[denominations[i]] = noteCount;
        
        amount %= denominations[i];
    }

    console.log("Minimum number of notes:");
    for (var denomination in count) {
        if (count.hasOwnProperty(denomination) && count[denomination] !== 0) {
            console.log(denomination + " : " + count[denomination]);
        }
    }
}

var amount = parseInt(prompt("Enter the amount:"));
if (!isNaN(amount)) {
    countNotes(amount);
} else {
    console.log("Invalid input. Please enter a valid amount.");
}




// Problem No 12
// let Physics = parseFloat(prompt("Enter Physics Marks"));
// let Chemistry = parseFloat(prompt("Enter Chemistry Marks"));
// let Biology = parseFloat(prompt("Enter Biology Marks"));
// let Mathematics = parseFloat(prompt("Enter Mathematics Marks"));
// let Computer = parseFloat(prompt("Enter Computer Marks"));
// let result = gradeDivisor(Physics, Chemistry, Biology, Mathematics, Computer);

// function gradeDivisor(Physics, Chemistry, Biology, Mathematics, Computer) {
//     let totalMarks = Physics + Chemistry + Biology + Mathematics + Computer;
//     let percentage = (totalMarks / 500) * 100;
//     let grade;

//     if (percentage >= 90) {
//         grade = "A";
//     } else if (percentage >= 80) {
//         grade = "B";
//     } else if (percentage >= 70) {
//         grade = "C";
//     } else if (percentage >= 60) {
//         grade = "D";
//     } else if (percentage >= 40) {
//         grade = "E";
//     } else {
//         grade = "F";
//     }

//     return { percentage: percentage, grade: grade };
// }

// console.log("Here Your Result. Percentage: " + result.percentage + "%. Grade: " + result.grade);



// Problem No 13
// function calculateGrossSalary(basicSalary){

//     var HRA, DA;

//     if(basicSalary <= 10000){
//         HRA = 0.20 * basicSalary;
//         DA = 0.80 * basicSalary;
//     }
//     else if(basicSalary <= 20000){
//         HRA = 0.25 * basicSalary;
//         DA = 0.90 * basicSalary;
//     }
//     else{
//         HRA = 0.30 * basicSalary;
//         DA = 0.95 * basicSalary;
//     }

//     var grossSalary = basicSalary + HRA + DA;
//     return grossSalary;
// }


// let basicSalary = parseInt(prompt("Enter Your Basic Salary"));
// let result = calculateGrossSalary(basicSalary);

// console.log("Here Your Gross Salary: " + result );





// Problem No 14
// function calculateElectricityBill(units){
//     var totalBill = 0;

//     if (units <= 50) {
//         totalBill = units * 5;
//     } else if (units <= 150) {
//         totalBill = (50 * 5) + ((units - 50) * 5);
//     } else if (units <= 250) {
//         totalBill = (50 * 5) + (100 * 7) + ((units - 150) * 10);
//     } else {
//         totalBill = (50 * 5) + (100 * 7) + (100 * 10) + ((units - 250) * 15);
//     }

// // Add 20% surcharge
//     totalBill *= 1.20;

//     return totalBill;
// }

// let units = prompt("Enter Consumed Units");
// let result = calculateElectricityBill(units);

// console.log("Here Your total Bill: " + result);


