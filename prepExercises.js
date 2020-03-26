// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
//  function sum(n) { 
//  // TODO: your code here 
//  } 
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15
 function sum(n) { 
    var m = 0;
    while (n>0){
          m += n ;
          n--;
    }
    return m ;
}


// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
//  function factorial(n) { 
//  // TODO: your code here 
//  } 
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120
function factorial(n) { 
 	var m = 1;
 	while (n>1){
 		m *= n ;
 		n--;
 	}
 	return m ;
}


// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
//  function repeatString(str, count) { 
//  // TODO: your code here 
//  } 
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.
 function repeatString(str, count) { 
    var m = '';
    while (count>0) {
    	m += str ;
    	count--;
    }
    return m ;
}

// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.
function multiplyBy10(number, n) {
 	var m = number ;
 	while (n>0) {
 		m *= 10 ;
 		n--;
 	}
 	return m ;
 } 

// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string. How can we make sure not to have a comma after the last number?
//  function counting(n) { 
//        // TODO: your code here 
//  } 
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'
 function counting(n) { 
         var m = '';
 	while (n > 0) {
 		m = n + ',' + m ;
 	    n--;

    }
   return m.slice(0,n*2-1) ;
}


// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.
function meetAndGreet(n) { 
 var counter = 1; 
 var x; 
 var total = ''; 
 while (counter <= n) { 
 if (n === 1) { 
 total = 'welcome ' + counter 
 } else if (counter === 1) { 
 total = 'welcome ' + counter + '\n';
 } else { 
 total = total + 'welcome ' + counter + ', ' + 'meet '; 
 x = 1; 
 while (x < counter) { 
 if (x === counter - 2) { 
 total = total + x + ' and '; 
 } else if (x === counter - 1) { 
 total = total + x; 
 } else { 
 total = total + x + ', '; 
 } 
 x += 1; 
 } 
 total = total + '\n' ;
 } 
 counter += 1; 
 } 
 return total; 
 }



// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
//  function reverseString(str) { 
//        // TODO: your code here 
//  } 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.
function reverseString(str) {
    var m = '';
    var x = str.length;
    while (x>=0) {
        m += str.slice(x,x+1) ;
        x--;
    }
    return m ;
}


// 5.Write a javascript program to print all Prime numbers from 1 to n.
function prime (n) {
var counter = 0;
while (counter <= n) {
    var notPrime = false;
    counter++
    var i = 2;
    while (i <= counter) {
        if (counter%i===0 && i!==counter) {
            notPrime = true;
        }
        i++;
    }
    if (notPrime === false) {
                console.log(counter);
    }
}
}

// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'
function even (n) {
	var m = 0 ;
    while ( n >= m ) {
        if ( m % 2 === 0 ) { 
        console.log( m +' is even');
        }
        else { 
         console.log( m +' is odd' );
        }
        m++;
    }
}

// 7.Write a javascript program to enter any number and print all factors of the number.
function factor (n) {
    var i = n - 1; 
    while (i>0) {
        if (n % i === 0) {
            console.log(i);
        }
        i--;
    }
}


// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 10 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8
function firstAndLast(n) {
	var first = n % 10 ;
	var i = 1 ;
	var last = Infinity;
	while (last >= 10) {
		n -= (n % (10**i)) ;
		last = n / (10**i) ;
		i++;
	}
	return first + last ;
}


// 2.Write a javascript program to draw the stars
//      * 
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *
function draw () {
    var stars = '    *    ' ;
   	console.log(stars);
	var j = 5 ; 
    var arr = [];
	for (var i = 3 ; i >=0 ; i--) {
      arr = stars.split('')
		arr[j] = '*' ;
		arr[i] = '*' ;
       stars = arr.join('')
		j++;
		console.log(stars);
	}
	for (var i = 8 ; i >=5 ; i--) {
      arr = stars.split('')
		arr[j-9] = ' ' ;
		arr[i] = ' ' ;
       stars = arr.join('')
		j++;
		console.log(stars);
	}
}


// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.
