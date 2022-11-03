const removeFromArray = function (...theArgs) {
    // first item of the arguments is the array, pull it out with args[0]
    const array = theArgs[0];
    // create new empty array
    const newArray = [];
    // use forEach to go through the array
    array.forEach((item) => {
        // push every element into the new array
        // UNLESS it is included in the function arguments
        // create a new array with every item, except those that should be removed
        if (!theArgs.includes(item)) {
            newArray.push(item);
        }
    });
    // and return that array
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
