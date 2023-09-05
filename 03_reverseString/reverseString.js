const reverseString = function(str) {
    let arr = str.split('');
    arr.reverse();
    let string = arr.toString().split(',').join('');
    return string;
};

// Do not edit below this line
module.exports = reverseString;
