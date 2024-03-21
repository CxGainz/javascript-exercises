const reverseString = function(string) {

    half = Math.floor(string.length/2)
    string = string.split('');

    for (let i=0; i < half; i++){
        temp=string[i];
        string[i] = string[string.length-1-i];
        string[string.length-1-i]=temp;
    }
    string = string.join('');
    return string;
};

// Do not edit below this line
module.exports = reverseString;
