const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  return arr.reduce((acc, currVal) => acc + currVal, 0);
};

const multiply = function(valuesArr) {
  return valuesArr.reduce((acc, currVal) => acc * currVal, 1);
};

const power = function(a, b) {
	return a ** b;
  // return Math.pow(a,b);
};

const factorial = function(num) {
	let value = 1;
  for (let i = 2; i <= num; i++) {
    value *=  i;
  }
  return value;
};

// This is another implementation of Factorial that uses recursion
// const recursiveFactorial = function(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial (n-1);
// };


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
