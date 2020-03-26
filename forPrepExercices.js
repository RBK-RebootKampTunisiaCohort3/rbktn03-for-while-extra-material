// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.
function sumWhile(array){
	var sum = 0;
	var i = 0;
	while (i < array.length){
		sum = sum + array[i];
		i++; 
	}
	return sum;
}
function sumFor(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum = sum + array[i]
	}
	return sum;
}
// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function maxWhile(arr){
	var largeNum = 0;
	var i = 0;
	while (i <= arr.length){
		if (arr[i] > largeNum){
			largeNum = arr[i];
		}
			i++
	}
		return largeNum;
}

function maxFor(arr){
	var largeNum = 0;
	for (var i = 0; i <= arr.length; i++){
		if(arr[i] > largeNum){
			largeNum = arr[i];
		}
	}
	return largeNum;
}
// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
function longestWordWhile(string){
	var stringArray = string.split(' ')
	var longString = '';
	var i = 0;
	while(i < stringArray.length){
		if(stringArray[i].length > longString.length){
			longString = stringArray[i];
		}
			i++;
	}
	return longString;
}

function longestWordFor(string){
	var stringArray = string.split(' ');
	var longString = '';
	for(var i = 0; i < stringArray.length; i++){
		if(stringArray[i].length > longString.length){
			longString = stringArray[i];
		}
	}
	return longString;
}

// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

function removeWhile(array, element) {
	var cleanArray = [];
	var i = 0;
	while(i < array.length){
		if (array[i] !== element){
		 cleanArray.push(array[i]);
		}
		i++
	}
	return cleanArray;
}
function removeFor(array, element){
	var cleanArray = [];
	for(var i = 0; i < array.length; i++){
		if (array[i] !== element){
		 cleanArray.push(array[i]);
		}
	}
	return cleanArray;
}
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
function evensWhile(array){
	var evenArray = [];
	var i = 0;
	while(i < array.length){
		if(array[i] % 2 === 0){
			evenArray.push(array[i]);
		}
		i++
	}
	return evenArray;
}
function evenFor(array){
	var evenArray = [];
	for(var i = 0; i < array.length; i++){
		if(array[i] % 2 === 0){
			evenArray.push(array[i]);
		}
	}
	return evenArray;
}
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
function averageWhile(array){
	var sum = 0;
	var i = 0;
	while (i < array.length){
		sum = sum + array[i];
		i++; 
	}
	return sum / array.length ;
}
function averageFor(array){
	var sum = 0;
	for(var i = 0; i < array.length; i++){
		sum = sum + array[i]
	}
	return sum / array.length;
}
// 2. Write a function called min that finds the smallest number in an array of numbers.
function minWhile(arr){
	var smallerNum = arr[0];
	var i = 0;
	while (i <= arr.length){
	 	if(arr[i] < smallerNum){
				smallerNum = arr[i];
		}else if(arr[i] > smallerNum){	
			smallerNum = smallerNum;
		}
		i++
	}
		return smallerNum;
}
function minFor(arr){
	var smallerNum = arr[0];
	for(var i = 0; i <= arr.length; i++){
	 	if(arr[i] < smallerNum){
				smallerNum = arr[i];
		}else if(arr[i] > smallerNum){	
			smallerNum = smallerNum;
		}
	}
		return smallerNum;
}
// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function 
// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.

// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.

// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed

// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.
