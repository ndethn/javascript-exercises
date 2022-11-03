// set parameters as val1 value and max value
const sumAll = function (val1, val2) {
    // declare total variable
    let totalSum = 0;
    // use a for loop to increment between val1 and val2
    // to grab each number between val1 and val2
    // condition for negative numbers
    if (val1 < 0 || val2 < 0){
        return "ERROR";
    }
    // condition if val2 is greater
    if (val1 < val2) {
        for (let i = val1 - 1; i <= val2; i++) {
            totalSum += i;
        }
        // condition if val1 is greater
    } else {
        for (let i = val2 - 1; i <= val1; i++) {
            totalSum += i;
        }
    }
    // return total
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
