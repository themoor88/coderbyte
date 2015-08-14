// Reverse a string
function FirstReverse(str) {
  var rev = '';
  for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
}

FirstReverse("Hello world");


// Implementing the factorial operator
function FirstFactorial(num) {
  var fact = 1;
    for (var i = num; i >= 2; i--) {
      fact *= i ;
    }
  return fact;
  // code goes here
}

// Longest Word
function LongestWord(sen) {
  var arr = sen.split(" ");
  var longest = arr[0];
  for (var i = 0; i < arr.length; i++) {

  };
}