// Exercise No 1 
// This Program is Display an Output in the form of message.
// This Program check the multiple of numbers.

let num = prompt("Enter a Number:");

if(num %5 === 0){
    console.log(num,"is a Multiple of 5.")
}
else{
    console.log("Sorry. Try Another Number.")
}


// Exercise No 2:
// This Program is used to check grade for students.

let score  = prompt("Enter Your Score:");
let grade
if(score>=90 && score<=100)
{
    grade = "A";
}
else if( score>=70 && score<=89)
{
    grade = "B";
}
else if(score>=50 && score<=69)
{
    grade = "C";
}

console.log(grade);