//Create a function that returns the hash of names into a string with all names seperated by a comma 
//besides the last two, which are seperated by an ampersand

//Steps
//initiate results array to hold names
//if there are two or less names, join with '&'
//if there are more than two names, join names with ', ', besides the last, which should be joined wit '&'



function list(names){
  
  var res = [];
  var temp3 = "";
  
  for(i=0; i<names.length; i++){
    res.push(names[i].name);
  }
  
  if(res.length>=3){
    
    temp3 = res[res.length-1];
    
    res.pop()
    
    res = res.join(', ')
    
    return(res + " & " + temp3);
    
  }else{
    
    res = res.join(' & ');
    
    return(res);
    
  }
  
  
}