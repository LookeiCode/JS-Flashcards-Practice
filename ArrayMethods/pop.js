// POP ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - POP WITH VARIABLE
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))

const array = [1, 2, 3]
const poppedElement = array.pop();

console.log(color('Ex1: The (mutated) array after the pop method'));
console.log(array);

console.log(color('Ex1: The returned removed element from the array'));
console.log(poppedElement);



// EXAMPLE 2 - POP WITHOUT VARIABLE
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))

const array1 = [1, 2, 3]
array1.pop();

console.log(color('Ex2: Example 2 without the variable'));
console.log(array1);



// EXAMPLE 3 - POPPING WITH CONSOLE LOGS?!
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

const array2 = ['This', 'is', 'popping', 'arrays!']

console.log(color('Ex3: Demonstrating pop() with console logs'));
console.log(array2.pop());
console.log(array2)

// Like a variable, if you use pop() with console.log it will return the removed element
// Notice how the array was still mutated - demonstrated by the second console log. "Arrays!" is gone.

// We can take it further by just calling the pop() method again.

array2.pop()
console.log(array2)

// Notice how this console log reflects the changes, but the previous identical console log doesn't reflect this pop
// This is because the code in JS runs vertically top to bottom. The second pop() method on line 45 ran after the console log on line 38.

console.log(array2.pop());
console.log(array2);


// THE SHIFT() METHOD BEHAVES THE SAME WAY AS POP() - EXCEPT IT APPLIES TO THE FIRST ELEMENT OF AN ARRAY