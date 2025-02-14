// set parameters as val1 value and max value
const sumAll = function (val1, val2) {
    // condition for non numbers
    if (!Number.isInteger(val1) || !Number.isInteger(val2)) return "ERROR";
    // condition for negative numbers
    if (val1 < 0 || val2 < 0) {
        return "ERROR";
    }
    // declare total variable
    let totalSum = 0;
    // condition if val2 is greater
    if (val1 < val2) {
        // use a for loop to increment between val1 and val2
        // to grab each number between val1 and val2
        for (let i = val1; i < val2 + 1; i++) {
            totalSum += i;
        }
        // condition if val1 is greater
    } else {
        for (let i = val2; i < val1 + 1; i++) {
            totalSum += i;
        }
    }
    // return total
    return totalSum;
};

// Do not edit below this line
module.exports = sumAll;
