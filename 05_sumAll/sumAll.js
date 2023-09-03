const sumAll = function(from, to) {
	let sum = 0;
	if (from > to) {
		for (let i = to; i <= from; i++) {
			sum += i;
		}
		return sum;
	} else if ((from < 0 || to < 0)) {
		return "ERROR";
	} else if (isStr(from, to) || isNotNum(from, to)) {
		return "ERROR";
	} else {
		for (let i = from; i <= to; i++) {
			sum += i;
		}
		return sum;
	}
};

function isStr(from, to) {
	if (typeof from === "string" || typeof to === "string") {
		return "ERROR";
	}
}

function isNotNum(from, to) {
	if (isNaN(from) || isNaN(to)) {
		return "ERROR";
	}
}

// Do not edit below this line
module.exports = sumAll;


