const fibonacci = function(n) {
    
    if (isNaN(n)){
        n = Number(n);
    }

    if (n < 1){
        return n == 0 ? 0 : "OOPS"; 
    };

    fib =[1,1];

    for (i = 2;i < n; i++){
        fib.push((fib[i-2] + fib[i-1]));
    }
    return fib[fib.length-1];
 };

// Do not edit below this line
module.exports = fibonacci;
