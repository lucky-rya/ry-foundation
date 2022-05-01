// export * from "./is"; 
// new test just to read a json

// var uniqueRandomArray = require('unique-random-array'); // 直接引入包
import  uniqueRandomArray from 'unique-random-array'
// var color = require('./color.json')
// import * as color from './color.js'
import { color } from './color.js'

console.log(color,'all')
console.log(uniqueRandomArray(color)(),'random')
// module.export = {
// 	all: color,
// 	random:uniqueRandomArray(color)
// }

export const myColor =  {
	all: color,
	random:uniqueRandomArray(color)
}
