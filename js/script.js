//1.    Convert the following identifiers to Camel Case notation:

/*
SomeMonth
TheMonth
currentMonth;
summerMonth;
Mylibrary */

//2.    Give me an example of a numeric literal expression, a string literal expression, a Boolean literal expression, and a null literal expression.

/*
7 				     // numeric literal 
"Hi There" 			// string literal 
True 			    // Boolean literal 
null 				// literal null value */


//3.    Give me two examples of complex/variable expressions.

/*
var firstExample = 6 * (20 / 4) - 2;
var secondExample = length * width; */



//4.    Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers


/*
var firstName;
var latName;
var address;
var city;
var state;
var zip;
var code;
var yourAge;
var ReferralSource;
var mayWeContactYou;*/


//5.    Take the 9 variables that you created above and demonstrate 3 methods for declaring and assigning values to those variables.


/*
var firstName = "Lina";
var latName = "Belay";
var address = "20th st";
var city, state, zip = "San Diego, CA 92104";
var yourAge = 25;
var ReferralSource = "internet";
var mayWeContactYou = true;
*/


//6.    Create 3 variables. For the first variable, add a number and a string and use console.log to display the coerced result. For the second variable, add a Boolean and a string and display the coerced result. For the third variable, add a number and a Boolean and display the coerced result. 


//Step 1
/*
var speed = 95;
window.console.log("Zak was driving " + speed + " miles per hour when he got stopped for speedig.");
*/


//step2
/*
var ticket = true;
window.console.log("Did he get a ticket? " + ticket );
*/

/*
//step3
var amountPaid = 400;
window.console.log( amountPaid + true);
*/

//7.    Demonstrate your knowledge of hoisting. Write a program that returns undefined within the console window because of hoisting.

/*
var game = "Mass Effects";
window.console.log("I am playing " + game + " " + part + ".");
var part = 3;
*/
//8.    Is the following string literal valid? If not, how would you fix it?

//The string literal is not valid.

/*
var someString = 'Who once said, "Only two things are infinite, the universe and human stupidity, and \I\'m not sure about the former."';
window.console.log(someString);
*/

//9.    Create a variable that produces a null value in the console window. Also, create a variable that produces an undefined value in the console window.

//Step 1
/* 
var numberOfItems = null;
window.console.log(numberOfItems);
*/

//Step 2 

/*
var age;
window.console.log (age);
*/

//10.	Use the typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.

/*
window.console.log(typeof "John");            //string
window.console.log(typeof 12);               //number
window.console.log(typeof true);           //Boolean
window.console.log(typeof {name:'Lina', age:25});       //object
window.console.log(typeof myGame);        //undefined
*/



//11.	Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 

//Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma

/*
window.alert("Hello" + "Lina Belay" + ", welcome to the JavaScript class!");
*/

//12.	Declare a variable called name and set it equal to your name. Then, substitute your name in the previous alert string with the variable instead.

/*
var name= "Lina Belay";
window.alert("Hello " + name + ", welcome to the JavaScript class!");
*/

//13.	Declare a variable called course and set it equal to “JavaScript”. Then, rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

/*
var name= "Lina Belay";
var course= "JavaScript";
window.alert("Hello " + name + ", welcome to the "+ course + " class!");
*/

//14.	Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

/*
var name= "Lina Belay";
var course= "JavaScript";
window.alert("Hello " + name + ". \nWelcome to the " + course + " class!");
*/

//15.	Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 

/*
var name = window.prompt("What is your name?");
var course= "JavaScript";
window.alert("Hello " + name + ". \nWelcome to the " + course + " class!");
*/

//16.	Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.

/*
var name = window.prompt("What is your name?");
var course= window.prompt("What Class are you taking?");
window.alert("Hello " + name + ". \nWelcome to the " + course + " class!");
*/

//17.   Assign the value 10 to x on a new line. Assign the value 20 to y on a new line. Display the sum of those two numbers in the console window. 

/*
var x = 10;
var y = 20;
window.console.log(x+=y);
*/

//18.	Declare a variable called x and assign it a value of 20. Next, add and assign 20 to that variable and display the result in the console window. The result should be 40.

/*
var x=20;
window.console.log(x+=20);
*/

//19.	Declare a variable called x and assign it a value of 20. Next, multiply and assign 5 to that variable and display the result in the console window. The result should be 100.

/*
var x=20;
window.console.log(x*=5);
*/

//20.	Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3. Next, divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.

/*
var x=20;
window.console.log(x%=3);
*/

//21.	Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

/*
var x=6;
var y=10;
window.console.log( x<y && x==x);
*/

//22.	Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

/*
var x = 20;
var y = 5;
window.console.log(x <= y != false);
*/

//23.	Use the new operator to create a new Object called “widget”. Within the console window, use the typeof operator to display the type of variable widget is.

/*
var widget = new Object();
window.console.log(typeof widget);
*/



//24.	Using the instanceof operator, write an application that returns true within the console window if the widget variable is an instance of an object.

/*
var widget = new Object ();
window.console.log(widget instanceof Object);
*/

//25.	Without modifying the variable declaration and assignment, rewrite the previous application so that it returns false.

/*
var widget = new Object ();
window.console.log(widget instanceof String);
*/







