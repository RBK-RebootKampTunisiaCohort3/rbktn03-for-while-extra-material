// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.

function sumWhile(arr) { // while loop

	var s = 0;

	var i = 0;

	while(i < arr.length) {

		s += arr[i];

		i += 1;

	}

return s;

}


function sumFor(arr) { // for loop

	var s = 0;

	for(var i = 0; i < arr.length; i += 1) {

		s += arr[i];

	}

return s;

}

// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.

function largestNumWhile(arr) { // while loop

	var largest = arr[0];

	var i = 1;

	while(i < arr.length) {

		if(arr[i] > largest) {

		largest = arr[i];

		}

		i += 1;

	}

return largest;

}


function largestNumFor(arr) { // for loop

	var largest = arr[0];

	for(var i = 1; i < arr.length; i += 1) {

		if(arr[i] > largest) {

		largest = arr[i];

		}		

	}

return largest;

}



// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.

function longestWordWhile(str) { // while loop

	var arr;

	arr = str.split(' ');

	var longest = arr[0] ;

	var i = 1;

	while(i < arr.length) {

		if(arr[i].length > longest.length)

		longest = arr[i];

		i += 1;

	}

return longest;

}


function longestWordFor(str) { // for loop

	var arr;

	arr = str.split(' ');

	var longest = arr[0] ;

	for(var i = 1; i < arr.length; i += 1) {

		if(arr[i].length > longest.length)

		longest = arr[i];	

	}

return longest;

}

// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

function elementRemovedWhile(arr, e) { // while loop

	var newarr = [];

	var i = 0;

	while(i < arr.length) {

		var s = "";

		var j = 0;

		while(j < arr[i].length) {

			if(arr[i][j] !== e) {

				s = s + arr[i][j]; 

				j = j + 1;

			} else {

			j = j + 1;

			}

		}

		newarr.push(s)

		i = i + 1;
	
	}

return newarr;

}


function elementRemovedFor(arr, e) { // for loop

	var newarr = [];

	for(var i = 0; i < arr.length; i = i + 1) {

		var s = "";

		for(var j = 0; j < arr[i].length; j = j + 1) {

			if(arr[i][j] !== e) {

				s = s + arr[i][j];

			} 

		}

		newarr.push(s)
	
	}

return newarr;

}     // the result will be like that:
       

// elementRemovedFor(["hello", "love", "hi", "console"], "l") ===> ["heo", "ove", "hi", "consoe"];



// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.

function evenWhile(arr) { // while loop

	var newarr = [];

	var i = 0;

	while(i < arr.length) {

		if(arr[i] % 2 === 0) {

			newarr.push(arr[i]);

		}

	i += 1;

	}

return newarr;	

}


function evenFor(arr) { // for loop

	var newarr = [];	

	for(var i = 0; i < arr.length; i += 1) {

		if(arr[i] % 2 === 0) {

			newarr.push(arr[i]);

		}

	}

return newarr;	

}
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.

function averageWhile(arr) { //while loop

	var sum = 0;

	var i = 0;

	while(i < arr.length) {

		sum += arr[i];

		i += 1;

	}

return sum / arr.length;

}

function averageFor(arr) { //for loop

	var sum = 0;

	for(var i = 0; i < arr.length; i += 1) {

		sum += arr[i];

	}

return sum / arr.length;

}

// 2. Write a function called min that finds the smallest number in an array of numbers.

function minWhile(arr) { // while loop

	var min = arr[0];

	var i = 1;

	while(i < arr.length) {

		if(arr[i] < min) {

		min = arr[i];

		}

		i += 1;

	}

return min;

}


function minFor(arr) { // for loop

	var min = arr[0];

	for(var i = 1; i < arr.length; i += 1) {

		if(arr[i] < min) {

		min = arr[i];

		}		

	}

return min;

}


// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.

function shortestWordWhile(str) { // while loop

	var arr;

	arr = str.split(' ');

	var shortest = arr[0] ;

	var i = 1;

	while(i < arr.length) {

		if(arr[i].length < shortest.length)

		shortest = arr[i];

		i += 1;

	}

return shortest;

}


function shortestWordFor(str) { // for loop

	var arr;

	arr = str.split(' ');

	var shortest = arr[0] ;

	for(var i = 1; i < arr.length; i += 1) {

		if(arr[i].length < shortest.length)

		shortest = arr[i];	

	}

return shortest;

}


// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.

function countCharWhile(str, letter) {

		var counter = 0;

		var i = 0;

		while(i < str.length) {

			if(str[i] === letter) {

				counter += 1;

			}

		i += 1;	

		}

	return counter;

}


function countCharFor(str, letter) {

		var counter = 0;

		for(var i = 0; i < str.length; i += 1) {

			if(str[i] === letter) {

			counter += 1;

			}	

		}

	return counter;

}

// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.

// Advanced

// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed

// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
