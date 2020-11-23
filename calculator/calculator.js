// Notes: Spread syntax "..." converts args into an Array
function add(x, y) {
	return x + y;
}

function subtract(...args) {
	if (args == null || args.length === 0) return 0;
	if (args.length === 1) return args[0];
	let result = args[0];
	for (let i = 1; i < args.length; i += 1) {
		result -= args[i];
	}
	return result;
}

function sum(arr) {
	if (arr == null || arr.length === 0) return 0;
	let result = 0;
	for (let num of arr) {
		result += num;
	}
	return result;
}

function multiply(arr) {
	if (arr == null || arr.length === 0) return 0;
	let result = 1;
	for (let num of arr) {
		result *= num;
	}
	return result;
}

function power(x, y) {
	return x ** y;
}

/**
 * n! = n * (n - 1) * ... * 1
 */
function factorial(n) {
	if (n == null) return 0;
	if (n === 0) return 1;
	return n * factorial(n - 1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}