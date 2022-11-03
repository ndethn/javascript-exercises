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

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
