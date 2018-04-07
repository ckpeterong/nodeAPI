var obj = {a:1, b:2, c:3};  
for (var prop in obj) { 
   console.log(obj[prop]); 
}
/*
Output
1
2
3
*/ 

for ( let key in obj )
{
    console.log(key+'-->'+obj[key]);
}
/* output
a-->1
b-->2
c-->3

*/
var arr = [10,50];
for ( let key in arr )
{
    console.log(key+'-->'+arr[key]);
}
/* output
0-->10
1-->50
*/

 //*************************** */
// FUNCTIONS....
 //*************************** */


// Anonymous Recursive Function
// ~~~~~~~~~~~~~~~~~~~~~~~/
// The function calls itself using a pair of parentheses ()
(function() { 
    var msg = "Hello World" 
    console.log(msg)
 })()
 // Hello World


// Rest Parameters
// values passed must all be of the same type
// To declare a rest parameter, the parameter name is prefixed with three periods, known as the spread operator.  `...`
// ~~~~~~~~~~~~~~~~~~~~~~~/
 function mylen(...params)
{
    console.log(params.length);
}
mylen(5,5,5,5,5,9);
// 6


// LAMBDA FUNCTION
// ~~~~~~~~~~~~~~~~~~~~~~~/
// Lambda refers to anonymous functions in programming
// Lambda function + Statement eg 1
var mysum = (x,y)=> x+y;
console.log(mysum(5,9));
// 14

// Lambda function + Statement eg 2
var mysum2 = (x,y) => 
{
    return x + y;
}
console.log(mysum2(5,90));
// 95

// Optional parentheses for a single parameter.
var msg = x=> { 
    console.log(x) ;
 } 
 msg(10);

// Optional braces for a single statement. Empty parentheses for no parameter.
var disp = ()=>console.log("Hello World") ;
disp();

// Generator Functions
// ~~~~~~~~~~~~~~~~~~~~~~~/
/*
- Generators are denoted by suffixing the function keyword with an asterisk
- Generators enable two-way communication between the caller and the called function. This is accomplished by using the yield keyword.
- Generator functions cannot be represented using arrow functions.
*/
function* ask() { 
    const name = yield "What is your name?"; 
    const sport = yield "What is your favorite sport?"; 
    return `${name}'s favorite sport is ${sport}`; 
 }  
 const it = ask(); 
 console.log(it.next()); 
 console.log(it.next('Ethan'));  
 console.log(it.next('Cricket')); 

 /* output
{ value: 'What is your name?', done: false }
{ value: 'What is your favorite sport?', done: false }
{ value: 'Ethan\'s favorite sport is Cricket', done: true }

Sequence of the generator function is as follows −

    Generator started in paused stated; iterator is returned.

    The it.next() yields “What is your name”. The generator is paused. This is done by the yield keyword.

    The call it.next(“Ethan”) assigns the value Ethan to the variable name and yields “What is your favorite sport?” Again the generator is paused.

    The call it.next(“Cricket”) assigns the value Cricket to the variable sport and executes the subsequent return statement.

 */


//*************************** */
// PROTOTYPE
//*************************** */
// The prototype property allows you to add properties and methods to any object (Number, Boolean, String, Date, etc.).

function employee(id, name) { 
    this.id = id; 
    this.name = name; 
 } 
 var emp = new employee(123, "Smith"); 
 employee.prototype.email = "smith@abc.com"; 
 
 console.log("Employee 's Id: " + emp.id); 
 console.log("Employee's name: " + emp.name);
 console.log("Employee's Email ID: " + emp.email);

 /*
 Employee’s Id: 123 
Employee’s name: Smith 
Employee’s Email ID: smith@abc.com  
 */

//*************************** */
// Array.prototype.map()
//*************************** */
var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

// example 2
var array2 = [1, 4, 9, 1600000];
function mine(x)
{
	return x + 10000;
}
// pass a function to map
const map1 = array2.map( x => mine(x) );

console.log(map1);
// expected output: Array [2, 8, 18, 32]