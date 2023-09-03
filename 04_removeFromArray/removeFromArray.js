const removeFromArray = function(array, ...value) {
	// set array to a variable
	// loop through array
	// if value is in array remove from array and return
	let arr = array;
	let newArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (!value.includes(arr[i])) {
			newArr.push(arr[i]);
		}
	}
	return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
