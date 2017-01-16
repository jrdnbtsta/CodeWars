// You are given an array strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Example:

// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// n being the length of the string array, if n = 0 or k > n or k <= 0 return "".




function longestConsec(strarr, k){

    //sort array from largest to smallest
    //check for k<0 or k>length of strarr
    //concatenate first k elements

    var concat = '';
    
    var lenArr = strarr.sort(function(a,b){
    
        return b.length - a.length;
    
    });
    
    if(k>strarr.length){
        k = strarr.length
    }else if (k<0){
      k = 0;
    }
    
    for(i=0; i<k; i++){
    
        concat += lenArr[i];
    
    }
    
    return concat;
}