const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let arr = array;
	let sum = 0;
	for (let i = 0; i < array.length; i++) {
		sum += arr[i];
	}
	return sum;
};

const multiply = function(array) {
	let arr = array;
	let sum = 1;
	for (let i = 0; i < array.length; i++) {
		sum *= arr[i];
	}
	return sum;
};

const power = function(num1, power) {
	return num1 ** power;

};

const factorial = function(number) {
	// given a number, store in variable
	// create sum variable at 1
	// start the loop at the number and decrement per loop
	// i = 6
	// multiply and store in sum
	// decrement counter
	let sum = 1;
	for (let i = number; i > 0; i--) {
		sum *= i;
	}
	return sum;
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
