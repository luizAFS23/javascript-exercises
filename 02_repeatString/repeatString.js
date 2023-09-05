const repeatString = function(string, num) {
    let str = string;
    for(let i = 0; i <= num; i++){
        str += str;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
