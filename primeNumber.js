function isPrime(num) {
  //TODO
  //initialize primeFlag = true
  //if num is less than 1, return false (prime cannot be negative)
  //for 
  
  
  var primeFlag = true;
  if(num<=1){
    primeFlag =  false;
  }else{
    var count = 0;
    for(i=1; i<10; i++){
      
      if(num%i === 0){
        count += 1;
      }
      if(count>2){
        primeFlag = false
      }
    }
  }
  return primeFlag;
}