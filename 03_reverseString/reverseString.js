const reverseString = function(string) {
	// create variable to hold string
	// turn variable str into an array
	// create new array
	// loop through each letter in array
	// remove last element of array
	// push them to new array
	// turn array to string format
	// remove all commas
	// return reversed string
	let str = string;
	let strArray = Array.from(str);
	let newArray = [];
	for (let i = 0; i < str.length; i++) {
		let remove = strArray.pop();
		newArray.push(remove);
	}
	let arrToStr = newArray.toString();
	return arrToStr.replaceAll(",", "");
};

// Do not edit below this line
module.exports = reverseString;
