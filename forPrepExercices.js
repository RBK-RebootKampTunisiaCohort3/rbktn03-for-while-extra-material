// Basic Requirments
// 0.Try to write all of the exercises using both the for loop and while loop.

// 1.Write a function sum that computes the sum of the numbers in an array.
function sumArr(arr){
	var total = 0
	var    i = 0
	while(i<arr.length){
		total+=arr[i]
	i++
	}
 return total
}
function sumArr(arr){
	var total = 0
	for(var i = 0;i<arr.length;i++){
		total+=arr[i]
	}
 return total
}
// 2.Write a function max that accepts an array of numbers and returns the largest number in the array.
function Max(arr){
	var result = 0
	for(var i =0;i<arr.length;i++){
		if(result<arr[i]){
			result=arr[i]
		}
	}
  return result
}
function Max(arr){
	var result = 0
	var i =0
     while(i<arr.length){
		if(result<arr[i]){
			result=arr[i]
		}
	i++
	}
  return result
}
// 3.Try the following at a console:

//  'the quick brown fox jumped over the lazy dog'.split(' ');
//  'Hello, world!'.split('')
//  '1,2,3,4,5,6'.split(',')
// What is returned by split (You can read more about it here (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split) and how does it work?
//  Use split to write a function longestWord that takes a string as an argument and returns the longest word.
// 4.Write a function remove that accepts an array and an element, and returns an array with all ocurrences of element removed.

    function remove(arr, element) {
    	var result = [] 
    	for(var i = 0;i<arr.length;i++){
    		if(arr[i]!==element){
    			result.push(arr[i])
    		}
    	}
     return result 
    }
    function remove(arr, element) {
    	var result = [] 
    	var i = 0
    	while(i<arr.length){
    		if(arr[i]!==element){
    			result.push(arr[i])
    		}
    	i++
    	}
     return result 
    }
//  remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
// 5.Write a function evens that accepts an array as an argument, and returns an array consisting of all of the even numbers in that array.
   function even(arr) {
    	var result = [] 
    	var i = 0
    	while(i<arr.length){
    		if((arr[i]%2)===0){
    			result.push(arr[i])
    		}
    	i++
    	}
     return result 
    }
   function even(arr) {
    	var result = [] 
    	for(var i = 0;i<arr.length;i++){
    		if((arr[i]%2)===0){
    			result.push(arr[i])
    		}
    	
    	}
     return result 
    }
// More Practice
// 1.Write a function called average that takes an array of numbers as a parameter and returns the average of those numbers.
function averge(arr){
	var result = 0
	for(i=0;i<arr.length;i++){
		result+=arr[i]
	}
   return result/i
}// 2. Write a function called min that finds the smallest number in an array of numbers.
function Min(arr){
	var result = Infinity
	var i =0
     while(i<arr.length){
		if(result>arr[i]){
			result=arr[i]
		}
	i++
	}
  return result
}
// 3.Write a function shortestWord that works like longestWord, but returns the shortest word instead.
function shortestWord(str){
	var x = str.split(' ')
    var result = x[0]
    for(var i=0;i<x.length;i++){
    	if(result.length>x[i].length){
    		result = x[i]
    	}
    }
 return result
}


// 4.Write a function countChar that takes two arguments: any string, and a character (string of one letter), and returns the number of times that the character occurs in the string.
function CountChar(str,letter){
	var x = str.split('')
	var result = 0
	for(var i=0;i<x.length;i++){
		if(letter===x[i]){
			result+=1
		}
	}
  return result
}
// 5.Write a function evenLengthWords that takes an array of strings as an argument, and returns an array of just the words that have an even length.
 function EvenLengthWords(arr){ 	
var result=[]
 	for(var i=0;i<arr.length;i++){
        if((arr[i].length%2)===0){
        	result.push(arr[i])
        }
 	}
    return result
 }
// Advanced
// 1.Read about the join method on MDN and use it to implement a function that accepts a string as an argument and returns that string reversed
function reverseString(str){
  	var x = str.split('')
  	var result = []
   for(var i=x.length;i>=0;i--){
   	  result.push(x[i])
   }
  return result.join('')
  }
// 2.Write a function keep that 'keeps' certain elements in an array. The function will need to take two arguments, an array, and something else -- the second argument will be what is used to determine which elements to keep.

// You should be able to use this function to write evens, evenLengthWords, a hypothetical odds function, or oddLengthWords without changing the keep function.