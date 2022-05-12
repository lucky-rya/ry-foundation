'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function uniqueRandom(minimum, maximum) {
	let previousValue;

	return function random() {
		const number = Math.floor(
			(Math.random() * (maximum - minimum + 1)) + minimum
		);

		previousValue = number === previousValue && minimum !== maximum ? random() : number;

		return previousValue;
	};
}

function uniqueRandomArray(array) {
	const random = uniqueRandom(0, array.length - 1);
	return () => array[random()];
}

var color = ["red", "black", "white", "blue", "yellow", "green", "pink", "#CCC"];

// export * from "./is"; 
console.log(color, 'all');
console.log(uniqueRandomArray(color)(), 'random'); // module.export = {
// 	all: color,
// 	random:uniqueRandomArray(color)
// }

var myColor = {
  all: color,
  random: uniqueRandomArray(color)
};

exports.myColor = myColor;
