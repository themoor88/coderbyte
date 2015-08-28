hh// Reverse a string
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
  var longest = '';
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

function LongestWord(sen) {
  var words = sen.match(/(\w+)/g);
  var longest = '';
  for (var i=0; i < words.length; i+=1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  return longest;
}

// Letter Changes
function LetterChanges(str) {

  // code goes here
  return str;

  // if statement
  // else if statement

}
// Time for some regex

// Medium Problem
function FormattedDivision(num1,num2) {

  // code goes here
  return num1 + num2;

}


// Implementing the each function
Array.prototype.each = function(collection, iterator) {
  if (collection.constructor === Array) {
    for (var i = 0; i < collection.length; i++) {
      var index = i;
      iterator(collection[i], index, collection);
    }
  }
  if (collection.constructor === Object) {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};

var callback = function(value, index, collection) {
  console.log(value, index, collection);
}

// Implementing the filter function
var filter = function(collection, test) {
  var filtered = [];
    each(collection, function(item) {
      if (test(item)) {
        filtered.push(item);
      }
    });
  return filtered;
};