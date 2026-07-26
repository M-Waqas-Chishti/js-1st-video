// Program to add first n numbers

let sum = 0
let n = prompt("Enter the value of N")
n = Number(n);

for(let i = 1; i <= n; i++)
{
    sum = i + sum;
    
}
console.log("Sum of first "+ n + " natural numbers is " + sum);

// for in lop

let obj ={
    harry:90,
    waqas:80,
    ali:70,
    zain:60
}
for(let a in obj){
    console.log("Marks of " + a + " are " + obj[a]);
    
}

// for of lop

for(let b of "Waqas")
{
    console.log(b);
    
}