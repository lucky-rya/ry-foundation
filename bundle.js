'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var uniqueRandomArray = require('unique-random-array');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var uniqueRandomArray__default = /*#__PURE__*/_interopDefaultLegacy(uniqueRandomArray);

const color = [
	"red",
	"black",
	"white",
	"blue",
	"yellow",
	"green",
	"pink",
	"#CCC"

];

// export * from "./is"; 

console.log(color,'all');
console.log(uniqueRandomArray__default["default"](color)(),'random');
// module.export = {
// 	all: color,
// 	random:uniqueRandomArray(color)
// }

const myColor =  {
	all: color,
	random:uniqueRandomArray__default["default"](color)
};

exports.myColor = myColor;
