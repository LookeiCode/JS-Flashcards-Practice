// SHIFT ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - SHIFT (WITH A VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))

const array1 = [1, 2, 3, 4, 5]

const shiftedArray = array1.shift();

console.log(color('Ex1: Notice it returns the removed element'))
console.log(shiftedArray);
// Expected output -> 1

console.log(color('Ex1: Notice how the array is mutated and "1" at index 0 is removed'))
console.log(array1);
// Expected output -> [2, 3, 4, 5]


// NOTES *******
// Assigning the method to a variable (L14) assigns the return value to that variable (whatever is returned)
// So since 1 is what's removed from the array, that's what's returned from the array and thus shiftedArray = 1

// However, the source array itself has been mutated and 1 is removed.
// So console logging the source array (array1) will log the array with the shift() method changes



// EXAMPLE 2 - SHIFT (WITHOUT A VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))

// If you add another shift() method, even if not assigned, it will still remove an element from the array

const array2 = [1, 2, 3, 4, 5]

const shiftedArray2 = array2.shift();
array2.shift();

console.log(color('Ex2: Even though we\'re not logging the return from "shiftedArray2" the shift method still applies (L49)'))
console.log(color('Then we use the shift method again without a variable - you can see the array removed the first 2 elements (1, 2)'))
console.log(array2);
// Expected output -> [3, 4, 5]

// The first element is removed and stored in shiftedArray2 (which is 1) and the array is now [2, 3, 4, 5]

// We then use the shift() method again, unassigned, but the method still runs. 
// The value isn't stored anywhere, but the source array is still affected and is now [3, 4, 5]



// EXAMPLE 3 - SHIFT (WITH STRINGS)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

const stringArray = ['Hello', 'Big', 'World']
const removedString = stringArray.shift();

console.log(color('Ex3: String arrays are no exception'))
console.log(stringArray);
// Expected output -> ['Big', 'World']

console.log(color('Ex3: As you\'d expect, the removed Element, "Hello" is returned by the variable'))
console.log(removedString);
// Expected output -> Hello


// THE POP() METHOD BEHAVES THE SAME WAY AS SHIFT() - EXCEPT IT APPLIES TO THE LAST ELEMENT OF AN ARRAY