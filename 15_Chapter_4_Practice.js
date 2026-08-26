 //Question 1:
 let str = "Har\""
 console.log(str.length);
 
 // Question 2:

 const sentence = "The quick brown fox jumps over the lazy dog.";
 const word = 'fos2'
 //console.log(sentence.includes(word));
 
 console.log(`The word "${word}" ${sentence.includes(word)? ` is ` : ` is not `} in the sentence`);
 
 // Problem 3:
 let name = "WAQAS"
 console.log(name.toLowerCase());
 
 // Problem 4:

 let str2 = " Please give Rs 1000"
 let amount = Number(str2.slice(15))
  console.log(amount)
  console.log(typeof(amount));
  
  // Problem 5:

  let friend = "Kirat"
  friend[3] = "R"
  console.log(friend); // Friend is not changed, becouse string is immutable
  