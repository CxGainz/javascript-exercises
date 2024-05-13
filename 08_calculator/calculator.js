const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1-num2;
};

const sum = function(arr) {
	return arr.reduce(((tot,curr)=> tot+curr),0)
};

const multiply = function(arr) {
  return  arr.reduce((tot,curr)=>(tot*curr),1)
};

const power = function(num1,num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	let product = 1;
  for (i=1; i<num;i++){
    product *= i+1
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
