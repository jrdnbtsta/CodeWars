//initialize a count for both open and close parens
//iterate through each char of parens
//if the iteration is an open paren, add one count to 'open'
//if the iteration is a closed paren, add one count to 'closed'
//check that parens opens first
//check that parens closes last
//check that each open paren closes


function validParentheses(parens){
  var open = 0;
  var close = 0;
  parens = parens.split('');
  for(i=0; i<parens.length; i++){
    if(parens[i] === '('){
      open ++
    }
    if(parens[i] === ')'){
      close ++
    }
  }
  if(parens[0] === '(' && parens[parens.length-1] === ')'){
    return open === close
  }else{
    return false;
  }
}