const convertToCelsius = function(f) {
	let conv = (f - 32) * (5 / 9);
	return Number(conv.toFixed(1));
}

const convertToFahrenheit = function(c) {
	let conv = c * (9 / 5) + 32;
	return Number(conv.toFixed(1));
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit
};
