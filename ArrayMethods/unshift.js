// UNSHIFT ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - VARIABLE WITH ARGUMENT
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))


const array = [1, 2, 3, 4, 5]
const unshifted = array.unshift(0);

console.log(color('Ex1: Returns the new length of the array (with the new elements added)'));
console.log(unshifted);
// Expected output -> 6

// Returns the LENGTH of the array (after the unshift() method)

console.log(color('Ex1: The new MUTATED array'));
console.log(array);
// Expected output -> [0, 1, 2, 3, 4, 5]

// 0 Was added to the beginning of the source array



// EXAMPLE 2 - NO VARIABLE WITH ARGUMENTS
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))

const array2 = [13, 14, 15]
array2.unshift(10, 11, 12)

console.log(color('Ex2: No need to assign a variable unless you want the return, the unshift method will still apply'))
console.log(array2)

// You don't need to assign a variable when using mutable array methods - the changes are still reflected
// This is because the source array still exists (now mutated) and no new array is being returned that you'd need to assign a variable too
// However if you did want the value that was returned from the method then yes, you would assign the method to a variable so the variable can "catch" and store that returned value



// EXAMPLE 3 - VARIABLE WITH MULTIPLE ARGUMENTS
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

// We add arguments into the unshift() method while assigning it to a variable.
// This returns 6 because we added 3 elements to array3 which already has 3 elements - the array length is now 6

const array3 = [13, 14, 15]
const example2 = array3.unshift(10, 11, 12)

console.log(color('Ex3: the source array'))
console.log(array3)
console.log(color('Ex3: the return (new array length)'))
console.log(example2)



// EXAMPLE 4 - VARIABLE WITH NO ARGUMENTS
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ----------------------------------------------------------'))

const array4 = [13, 14, 15]
const example3 = array4.unshift()

console.log(color('Ex4: the source array'))
console.log(array4)
console.log(color('Ex4: the return (no elements were added so it remains 3)'))
console.log(example3)



// EXAMPLE 5 - UNSHIFT WITH STRINGS
console.log(colorG('------------------------------------------------------- EXAMPLE 5 ----------------------------------------------------------'))

const array5 = ['Is', 'Coding']
array5.unshift('Tyler');

console.log(color('Ex5: You can use strings with the unshift method too'));
console.log(array5);

// If this was assigned to a variable, the length would be 3.
// Just incase you were wondering if it counts the whole string, or just it's characters.


// THE PUSH() METHOD BEHAVES THE SAME WAY AS UNSHIFT() - EXCEPT IT APPLIES TO THE LAST ELEMENT OF AN ARRAY