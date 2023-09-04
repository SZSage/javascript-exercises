const palindromes = function(string) {
	let str = string;
	let cleanString = "";
	let letters = /^[A-Za-z0-9]+$/;
	for (let i = 0; i < string.length; i++) {
		if (str[i].match(letters)) {
			cleanString += str[i];
		}
		cleanString = cleanString.toLowerCase();
	}
	let start = 0;
	let end = cleanString.length - 1;
	while (start < end) {
		if (cleanString[start] !== cleanString[end]) {
			return false;
		} else {
			start++;
			end--;
		}
	}
	return true;
}



// Do not edit below this line
module.exports = palindromes;
