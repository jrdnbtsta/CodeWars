function likes(names) {
  //if the length of names is 0, return 'no one likes this'
  //if the length of names is 1, return 'names likes this'
  //if the length of names is 2, return 'first name and second name like this'
  //if the length of names is 3, return 'first name, second name and third name like this'
  //if the length of names is 4 or higher, return 'first name and names.length -1 others like this'

  if(names.length === 0){
    return 'no one likes this';
  }else if(names.length ===1){
    return names + ' likes this'
  }else if(names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this' 
  }else if(names.length === 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }else{
    var friends = names.length-2
    return names[0] + ', ' + names[1] + ' and ' + friends + ' others like this'
  
  }
  
}