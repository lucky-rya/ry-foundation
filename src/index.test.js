import { expect } from "chai";
import { myColor} from './index.js'
describe('ry-get-color', function () { 
	// just to test this test is able to  running
	// it('should work!', function () {
	// 	expect(true).to.be.true;
	// })
	describe('all', function () {
		it('should be an array of string', function () {
			expect(myColor.all).to.satisfy(isArrayOfString); // or not use : expect(myColor.all).to.not.satisfy(isArrayOfString);

			function isArrayOfString(array) {
				return array.every(item => typeof item === 'string')
			}
		});
		it('should contains pink', function () { 
			expect(myColor.all).to.include('pink');
		})

	});

	describe('random', function () { 
		it('should return an random item from myColor.all', function () { 
			var randomItem = myColor.random();
			expect(myColor.all).to.include(randomItem)
		})
	})
})