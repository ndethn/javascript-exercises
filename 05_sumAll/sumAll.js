// set parameters as min value and max value
const sumAll = function(min, max) {
    // declare total variable
    let totalSum = 0;
    // use a for loop to increment between min and max
    // to grab each number between min and max
    for (let i = min - 1; i <= max; i++){
        totalSum += i;
    }
    // return total
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
