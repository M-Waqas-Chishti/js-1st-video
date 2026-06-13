// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 < 1);
// console.log( 2 == 1);
// console.log( 2 != 1);


console.log("2" > 1); // data type must be same ..if not then output maybe rong ..
console.log("02" > 1);
// avoid these methods 

console.log(null > 0);
console.log(null == 0 );
//The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a number, treating it as 0.That’s why (3) null >= 0 is true and (1) null > 0 is false.
console.log(null >= 0);


console.log(undefined == 0);
console.log(undefined >= 0);

// ===
// it will also check datatype 
console.log("2" === 2);




