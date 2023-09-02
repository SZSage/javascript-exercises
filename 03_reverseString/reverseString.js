const reverseString = function(string) {
	let str = string;
	// convert string to array
	let strArray = Array.from(str);
	let newArray = [];
	for (let i = 0; i < str.length; i++) {
		// removes last element in strArray and adds to newArray
		newArray.push(strArray.pop());
	}
	// converts array to str and removes commas
	return newArray.toString().replaceAll(",", "");
};

// Do not edit below this line
module.exports = reverseString;
