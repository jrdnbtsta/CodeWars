//create two arrays, 1 for roman numerals, one for corresponding deci number, from highest to lowest
//create output array
//iterate through deci number array
//if index is less than number, subtract it, then add roman numeral to output array
//return output array


function solution(number){
  var romNum = ['M','CM','D','CD','C','XC','L','XL','X','IX','V','IV','I']
  var deciNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  var output = '';
  for(i=0; i<deciNum.length; i++){
    while(number>=deciNum[i]){
      number -= deciNum[i];
      output += romNum[i];
    }
  }
  return output;
}



var test = solution(3423);

console.log(test)