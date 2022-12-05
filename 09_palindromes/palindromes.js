const palindromes = function (str) {
    let re = /[^A-Za-z0-9]/g;
    // str = str.toLowerCase().replace(re, '');

    // let l = str.length;
    // for (let i = 0; i < l / 2; i++) {
    //     if (str[i] !== str[l-1-i]) {
    //         return false;
    //     }
    // }
    // return true;
    let lowRegStr = str.toLowerCase().replace(re, '');
    let reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;

};

// Do not edit below this line
module.exports = palindromes;
