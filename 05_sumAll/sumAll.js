const sumAll = function(num1,num2) {

    
    if (Math.sign(num1)===-1 || !Number.isInteger(num1) || Math.sign(num2)===-1 || !Number.isInteger(num2)){
        return 'ERROR';
    }
    
    let sum = 0;
    max = Math.max(num1,num2);
    min = Math.min(num1,num2);

    for (let i = min;i<=max;i++){
        sum +=i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
