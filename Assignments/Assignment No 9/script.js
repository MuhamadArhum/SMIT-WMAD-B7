// Assignment No 9 (This Assignment is focused on string problems in Javascript)


// a: Return the length of the String.
// function calculateLength(completeName){

//     return completeName.length;
// }

// let firstName = prompt("Enter Your First Name")
// let secondName = prompt("Enter Your Second Name")

// var completeName = (firstName +" "+ secondName);
// console.log(calculateLength(completeName));





// b: Concatenate two Strings together. 
// function concatTwoString(bigString){
//     return bigString;
// }

// let str1 = "Hi there,";
// let str2 = "I'm Arhum Waheed";
// const bigString = (str1 + str2);
// console.log(concatTwoString(bigString));



// c: Determine if a Given String is empty.
// function checkEmptyorNot(str){
//     if(str.length === 0){
//         console.log("String is Empty.");
//     }
//     else{
//         console.log("String is Not Empty.");
//     }

// }

// let str = "abceds";
// checkEmptyorNot(str);



// d: Count the number of vowels in a string.
// function countVowels(fullName){

//     fullName = fullName.toLowerCase();

//     var count = 0;
//     for(var i=0; i<fullName.length; i++){
//         if(fullName[i] == "a" ||fullName[i] == "e"||fullName[i] == "i"||fullName[i] == "o"||fullName[i] == "u"){
//             count ++;

//         }
//     }
//     return count;
// }

// let fullName = prompt("Enter Your Name");
// console.log("The Number of Vowels in given String:",countVowels(fullName));




// e: Reverse a given string.
// function reverseString(str){

//     return str.split('').reverse().join('');

// }

// let str = prompt("Enter Any Text");
// console.log("Reversed string:", reverseString(str));







// f: Check if a string is a palindrome.
// function isPalindrome(str){

//     let start = 0;
//     let end = str.length - 1;

//     str = str.toLowerCase();

//     while(start < end){
//         if(str[start] !== str[end]){
//             return false;
//         }

//         start++;
//         end--;

//     }
//     return true;
// }

// console.log(isPalindrome("DAD"));
// console.log(isPalindrome("Racecar"));
// console.log(isPalindrome("Aple"));





// g: Convert a string to uppercase.
// function converttoUpperCase(str){
//     str = str.toUpperCase();

//     return str;
// }

// const str = "Hi there ,i'm arhum waheed.";
// console.log("The Converted Sting is:" + converttoUpperCase(str));




// h: Find the first occurrence of a given character in a string.
// function checkFirstOccurance(str,char){

//     for(let i=0; i<str.length; i++){
//         if(str[i] === char){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(checkFirstOccurance("Toyota","y"));
// console.log(checkFirstOccurance("Hello", "e"));




// i: Replace all occurrences of a given character in a string with another character.
// function replaceChar(inputString, oldChar, newChar) {

//     var modifiedString = inputString.replace(new RegExp(oldChar, 'g'), newChar);
//     return modifiedString;
// }

// var originalString = "Faisalabad";
// var oldCharacter = "s";
// var newCharacter = "z";
// var modifiedString = replaceChar(originalString, oldCharacter, newCharacter);
// console.log(modifiedString);





// j: Trim leading and trailing whitespace from a string.
// function trimWhiteSpace(str){

//     return str.trim();
// }

// console.log(trimWhiteSpace("      Hello Everyone     "));
// console.log(trimWhiteSpace("      Hi There     "));
// console.log(trimWhiteSpace("    Arhum Waheed    "));



// k: Count the number of words in a string.
// function countWords(str){

//     var words = str.split(/\s+/);

//     return words.length;
// }
// const str = "Hi there,This Function is used to count the words in GIven String"; 
// console.log("The Number of Words in this String is:" + countWords(str));



// l: Check if a string contains only numeric characters.
// function checkNumericChar(str) {

//     for (let i = 0; i < str.length; i++) {
//         if (isNaN(parseInt(str[i]))) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkNumericChar("12345"));
// console.log(checkNumericChar("12345a"));









// m: Check if a string is a valid email address.
// function checkEmailValid(Email){


//     // Pattern Initialized:
//     var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     // Return the Function.
//     return pattern.test(Email);


// }

// let Email = prompt("Enter Your Email Address Here");
// console.log(checkEmailValid(Email));


// n: Extract the domain name from a URL string.









// o: Convert a string into title case (the first letter of each word capitalized).
// function toProperCase(str) {
    
//     var words = str.toLowerCase().split(' ');

    
//     for (var i = 0; i < words.length; i++) {
//         words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
//     }
  
//     var titleCaseStr = words.join(' ');

//     return titleCaseStr;
// }


// var inputString = "hello world";
// var titleCaseString = toProperCase(inputString);

// console.log(titleCaseString);








// p: Remove all non-alphabetic characters from a string.
// function removeNonAlphabetic(str) {
//     let result = '';
//     for (let i = 0; i < str.length; i++) {
//         let charCode = str.charCodeAt(i);

//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//             result += str[i];
//         }
//     }
//     return result;
// }

// let inputString = "Hello! How are you?";
// let result = removeNonAlphabetic(inputString);
// console.log(result);





// q: Check if a string is a valid palindrome permutation (ignoring spaces).
function isValidPalindrmoe(){

}








// r: Check if a string is an anagram of another string.
function isAnagram(){

}









// s: Find the longest word in a string.
function findLongestWord(str) {

    let words = str.split(/\s+/);
    
    let longestWord = '';
    let maxLength = 0;
    
    for (let word of words) {

        let cleanedWord = word.replace(/[^A-Za-z0-9]/g, '');
        
        if (cleanedWord.length > maxLength) {
            longestWord = cleanedWord;
            maxLength = cleanedWord.length;
        }
    }
    
    return longestWord;
}

let inputString = "This is a string containing several words, including 'longest' and 'word'.";
console.log(findLongestWord(inputString));





// t: Perform string compression by replacing repeated characters with the character followed by the count.
