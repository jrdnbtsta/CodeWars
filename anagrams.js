function anagrams(word, words) {
  
  //alphabetize each character in the word
  //alphabetize each character of each word in words temp array
  //if the word matches the iteration in the temp array, push the corresponding element in words array
  
  var alphaWord = word.split('').sort().join('');
  var res = [];
  var tempArr = words.map(function(val){
    
    return val;
    
  });
  
  for(i=0; i<tempArr.length; i++){
    
    tempArr[i] = tempArr[i].split('').sort().join('');
    
    if(tempArr[i] === alphaWord){
      
      res.push(words[i]);
    }
  }
  

  console.log(res);
  
}




anagrams('laser', ['lazing', 'lazy',  'lacer']);