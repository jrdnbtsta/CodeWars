function solution(digits){
  //initialize a result and temp string
  //split digits into array
  //for each digit of the array, take it an the next 4 and join them and parse them into a number
  //if temp is greater than result, result = temp
  //if result is greater than temp, don't make a change
  //return result
  
  var temp = "";
  var res = 0;
  
  for(i=0; i<digits.length-4; i++){
    
    temp = digits.slice(i,i+5)
    
    if(parseInt(temp) > res){
      res = parseInt(temp);
    }
  }
  
  
  return(res);
  
}