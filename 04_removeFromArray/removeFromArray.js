const removeFromArray = function (...theArgs) {
    // declare the rest parameter into an array
    const argsValue = theArgs;
    // declare for loop to iterate through each index of arr
    for (let i = 0; i < argsValue.length; i++) {
        // if value matches the element index -> remove it
        if (argsValue[i] === argsValue) {
            argsValue.splice(i, 1);
            i--;
            // loop through the args arr
            for (let j = 0; j < argsValue.length; j++) {
                if (argsValue[i] === argsValue[i]) {
                    argsValue.splice(i, 1);
                    i--;
                }
            }
        }
    }
    return argsValue;
};

// Do not edit below this line
module.exports = removeFromArray;
