const removeFromArray = function (arr, value, ...theArgs) {
    // declare the rest parameter into a variable
    let argsValue = theArgs;
    // declare for loop to iterate through each index of arr
    for (let i = 0; i < arr.length; i++) {
        // if value matches the element index -> remove it
        if (arr[i] === value) {
            arr.splice(i, 1);
            i--;
        // loop through the rest param array...
        } else if (arr[i] === argsValue) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
