let marks = { harry: 90, Waqas: 9, Ali: 56 };
let keys = Object.keys(marks); // Get the keys once outside the loop

// Problem No 1:

for (let i = 0; i < keys.length; i++) 
{
    let name = keys[i];
    let score = marks[name];
    console.log(`The marks of ${name} are ${score}`);
}

// Problem No 2:

let mark = { harry: 90, Waqas: 9, Ali: 56 };
// let key = Object.keys(mark); // Get the keys once outside the loop

for(let key in marks)
{

 let scor = mark[key]
 console.log(key + " are " + scor);
 
}

// Problem No 3

let cn = 4;
let i = prompt("Enter a number")
while(i != cn)
{
    i = prompt("Try again! ")
}
console.log("You have entered a correct number");

// Problem No 4

const mean = (a,b,c,d)=>{
    return(a + b + c + d)/4;
}
console.log(mean(4,5,6,7));
