//create var for flag set to false
//create two for loops
//create res array
// one to iterate through entire loop
// another that compares the current iteration to the values after it
// if the sum of the two iterations = s, push both into res array
// set flag to true
// return res array
// if at the end of the for loop, flag is still false, return undefined




var sum_pairs=function(ints, s){
  var sumFlag = false;
  var res = [];
  var index = [];
  
  for(i=0; i<ints.length; i++){
    for(j=i+1; j<ints.length; j++){
      
      if(ints[i] + ints[j] === s){
        sumFlag = true; 
        if(index.length === 0 || j<index[1]){
          index[0] = i;
          index[1] = j;
          console.log(index);
        }
      }
      return sumFlag;
    }
    res.push(ints[index[0]],ints[index[1]]);
    
  }
  if(sumFlag === false){
    
    return undefined;
  }   
}


var result = sum_pairs([10, 5, 2, 3, 7, 5],         10);

console.log(result);