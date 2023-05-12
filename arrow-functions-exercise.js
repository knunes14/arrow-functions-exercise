// Refactoring from ES5 to ES2015 
// ES5 Map Callback 
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}

// ES2015 Arrow Functions Shorthand
const double = arr.map(val => val * 2);

// Replace ALL functions with arrow functions: 
// Original: 
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
}

// ES2015 
const squareAndFindEvens = numbers =>numbers.map(val => val ** 2).filter(square => square % 2 ===0)