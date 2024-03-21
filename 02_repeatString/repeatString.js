const repeatString = function(string,num) {

    if (num < 0){
        return 'ERROR';
    }

    temp = '';

    for (let i=0; i<num;i++){
        temp = temp + string;
    }

    return temp;
};

// Do not edit below this line
module.exports = repeatString;
