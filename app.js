// to count B in a string 
function countBs(s){
  let counter = 0; 
  for(let c=0; c < s.length; c++){
    if(s[c] === "B"){
      counter++; 
    }
  }
  return counter; 
}

// to count any char 
function countChar(s, c){
  let counter = 0; 
  for(let a=0; a<=s.length; a++){
    if(s[a] === c){
      counter++; 
    }
  }
  return counter; 
}



console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
