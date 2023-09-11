let array = [0, 1];

const fibonacci = function(num) {
	fib(array);
	let nth = array[num];

	if (num < 0) {
		return "OOPS";
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] === nth) {
			return array[i];
		}
	}
};


function fib(array) {
	let f0 = 0;
	let f1 = 1;
	let count = 0;
	
	while (count < 30) {
		let nextNum = f0 + f1;
		f0 = f1;
		f1 = nextNum;
		array.push(nextNum);
		count += 1;
	}

}

// Do not edit below this line
module.exports = fibonacci;
