// Exercises
// Basic Requirments
// 1.Summation to n: Let's implement the function sum that takes a single parameter n, and computes the sum of all integers up to n starting from 0, e.g.:
function sum(n) { 
 	var total = 0
 	var i = 0
 	while (i<=n){
 		total+=i
 		i++
 	}
    return total;
  }
//  sum(3); // => 6 
//  sum(4); // => 10 
//  sum(5); // => 15



// 2.Factorial of n: The factorial of n is the product of all the integers preceding n, starting with 1, e.g.:
function Factorial(n) { 
 	var total = 1
 	var i = 1
 	while (i<=n){
 		total*=i
 		i++
 	}
    return total;
  }
//  factorial(3); // => 6 
//  factorial(4); // => 24 
//  factorial(5); // => 120



// 3.Repeating a String n Times: Let's write a function called repeatString that takes two parameters: a string str, which is the string to be repeated, and count -- a number representing how many times the string s should be repeated, e.g.
 function repeatString(str, count) { 
 	var total = ''
 	var i = 0
 	while (i<count){
 		total+=str
 		i++
 	}
    return total;
  }
//  repeatString('dog', 0); // => '' 
//  repeatString('dog', 1); // => 'dog' 
//  repeatString('dog', 2); // => 'dogdog' 
//  repeatString('dog', 3); // => 'dogdogdog'
// Your task is to implement the repeatString function using a while loop.




// More Practice
// 1.Go back through any of the exercises done in the introduction to repetition and refactor them to use the while loop.

function fib (n) {
	var arr = [1, 1]
	var i = 2
	while ( i <= n ){
		arr.push(arr[i-1] + arr[i-2])
	         i++
	}
	return arr[n];
}
// 2.Fencepost Loop: Use a while loop to build a single string with the numbers 1 through n, separated by commas. Have it return the new string. How can we make sure not to have a comma after the last number?
     function counting(n) { 
 	var total = ''
 	var i = 1
 	while (i<=n){
 		total+=  ',' + i
 		i++
 	}
    return total.slice(1);
  }
//  counting(5); // => '1, 2, 3, 4, 5' 
//  counting(1); // => '1' 
//  counting(3); // => '1, 2, 3'




// 3.Meet & Greet: n numbers are coming to a party for numbers. Introduce them each to all the guests as they arrive. You should end up with output looking something like this one for n = 5:
function MeetAndGreet(n){
debugger	
var total =''
	var i = 0
	while(i<=n){
		if(i===1){
			total = 'welcome ' + i +'\n' + total
		  
        }	    
         else if (i===2) {
	    	total += 'welcome ' + i +', meet ' + (i-1) +'\n' 
	      
        }
		 else if(i===3){
		 	total += 'welcome ' + i +', meet ' + (i-2) + ' and ' + (i-1) + '\n' 
		}
		 else if(i>3){
		 	total += 'welcome ' + i +', meet ' + counting(i-2) + ' and ' + (i-1) + '\n'
		}
    i++
	}
  return total
}

//  welcome 1 
//  welcome 2, meet 1 
//  welcome 3, meet 1 and 2 
//  welcome 4, meet 1, 2 and 3 
//  welcome 5, meet 1, 2, 3 and 4
// HINT: search for which symbol that creates a line break in a string.




// 4.Reverse String: Write a function that takes a string as an input and returns the reverse of that string.
 function reverseString(str) { 
  	debugger
  	var total = ""
  	var i = str.length
  	while(i>0){
  		total= total + str[i-1]
  		str.slice(1)
  	     i--
  	}
    return total;
  } 
//  reverseString('hello'); // => 'olleh' 
//  reverseString('1#*$'); // => '$*#1'
// Do this using a while loop.



// 5.Write a javascript program to print all Prime numbers from 1 to n.
function PrimeNumbers(n){
 	var total = [1]
 	for(var i = 2;i<=n;i++){
 		if((i%2)!==0 && (i%3)!==0 && (i%5)!==0 && (i%7)!==0 && (i%11)!==0){
 			total.push(i)
 		
 	    }else if(i===2 || i===3 ||i===5||i===7||i===11 ){
 	    	total.push(i)
 	    }

 	}
   return total
 }

// 6.Write a JavaScript for loop that will iterate from 0 to n. For each iteration, it will check if the current number is odd or even, and display a message to the screen.
// Sample Output : 
//  '0 is even' 
//  '1 is odd' 
//  '2 is even'
function EvenOrOdd(n){
 var total = 0 + ' is even' 
 for(var    i = 1;i<=n;i++){
  	if ((i%2)!==0){
  		total = i + ' is odd ' 
  	}else if((i%2)===0){
  		total = i + ' is even '
  	}
 
}
 return total
  }


// 7.Write a javascript program to enter any number and print all factors of the number.
function factor(n){
        var factors = [];
        for (var i = 0; i <= n; i++){
            if (n % i === 0){
                factors.push(i);
            }
        }
        return factors;
}




// Advanced
// 1. Write a javascript function to find the sum of first and last digit of any number, without convert it to string
//  firstAndLast(456) ==> 4 + 6 = 11 
//  firstAndLast(123) ==> 1 + 3 = 4 
//  firstAndLast(197) ==> 1 + 7 = 8




// 2.Write a javascript program to draw the stars
 function draw()
   {console.log
   	(           `
                  *
                 ***
                *****
               *******
              *********
               *******
                *****
                 ***
                  *`)}
//     *** 
//    ***** 
//   ******* 
//  ********* 
//   ******* 
//    ***** 
//     *** 
//      *



// 3. Write a program that reads a character for playing the game of Rock-Paper-Scissors. If the character entered by the user is not one of 'P', 'R' or 'S', the program keeps on prompting the user to enter a new character.