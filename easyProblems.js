// Reverse a string
function FirstReverse(str) {
  var rev = '';
  for (var i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
}

FirstReverse("Hello world");
