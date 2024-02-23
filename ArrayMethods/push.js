// PUSH ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results

// ***************************************************************************************************


// EXAMPLE 1 - PUSH (WITH A VARIABLE + ARGUMENTS)

const array = [1, 2, 3]
const pushArray = array.push(4, 5, 6)

console.log(color('Ex1 - The mutated arrays new length'))
console.log(pushArray);

console.log(color('Ex1 - New mutated array with the pushed element(s)'))
console.log(array);


// EXAMPLE 2 - PUSH (WITHOUT A VARIABLE + ARGUMENT)
console.log(colorG('---------------------------------------------------------------------------------------------------------------------------'))


const array1 = [1, 2, 3]
array1.push(10)

console.log(color('Ex2 - just pushing new elements to the end of the array'))
console.log(array1);


// EXAMPLE 3 - PUSH (WITH VARIABLE + NO ARGUMENTS)
console.log(colorG('---------------------------------------------------------------------------------------------------------------------------'))

const array2 = [1, 2, 3]
const pushArray2 = array2.push()

console.log(color('Ex3 - The mutated arrays length stayed the same since no new element was pushed inside'))
console.log(pushArray2);

console.log(color('Ex3 - The array stayed the same and did not mutate since no new elements were pushed inside'))
console.log(array2);


// EXAMPLE 4 - PUSH (WITHOUT VARIABLE + NO ARGUMENTS)
console.log(colorG('---------------------------------------------------------------------------------------------------------------------------'))


const array3 = [1, 2, 3]
array1.push()

console.log(color('Ex4 - just pushing new elements to the end of the array'))
console.log(array3);


// EXAMPLE 5 - PUSHING (WITH CONSOLE LOGS & A MIX OF ABOVE EXAMPLES)
console.log(colorG('---------------------------------------------------------------------------------------------------------------------------'))


const array4 = [10, 11, 12]

console.log(color('Ex5 - pushing 3 elements with a console.log - returns new length'))
console.log(array4.push(13, 14, 15));
console.log(color('Ex5 - array has been mutated with 3 new elements at the end'))
console.log(array4);

array4.push(16, 17);
console.log(color('Ex5 - pushing 2 elements with no variable/log - array has been mutated again with 2 new elements'))
console.log(array4);

const pushedArray3 = array4.push(18, 19, 20);
console.log(color('Ex5 - pushing 3 elements with a variable - returns the arrays new length'))
console.log(pushedArray3);
console.log(color('Ex5 - the new mutated array with 8 new elements from all the previous pushes'))
console.log(array4);


// THE UNSHIFT() METHOD BEHAVES THE SAME WAY AS PUSH() - EXCEPT IT APPLIES TO THE FIRST ELEMENT OF AN ARRAY