// This is work on broser not node..

let a = prompt("Hey whats you age?");
a = Number(a) // Convertiong the string to a number
//console.log(typeof a );
if(a < 0){
    alert("This is a invalid age");
}
else if(a<9){
    alert("You are a kid and you cnanot even think of driving");

}
else if(a<18 && a>=9 ){
    alert("You are a kid and you can think of driving after 18");
}
else{
    alert("You can now drive as you are above 18");
}
console.log("Done");

console.log("You can ", (a<18? "not drive": "drive"));


// Explore witch statement and write a basic program in the comments 
// 1. Get input from the user and convert it to a number
let dayNumber = Number(prompt("Enter a number from 1 to 7 for the day of the week:"));

// 2. Evaluate the number using switch
switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid input! Please enter a number between 1 and 7.");
}
