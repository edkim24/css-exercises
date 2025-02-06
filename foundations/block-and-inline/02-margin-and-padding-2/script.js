'use strict';
//Fizz buzz is a group word game for children to teach them
// about division.[1] Players
// take turns to count incrementally,
// replacing any number divisible by three
// with the word "fizz", and any number divisible
// by five with the word "buzz",
// and any number divisible by both three
//  and five with the word "fizzbuzz".

const fizzBuzz = function (number) {
	for (let i = 1; i <= number; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log(i + ' fizz buzz');
		} else if (i % 3 === 0) {
			console.log(i + ' fizz');
		} else if (i % 5 === 0) {
			console.log(i + ' buzz');
		} else {
			console.log(i);
		}
	}
};

fizzBuzz(100);
