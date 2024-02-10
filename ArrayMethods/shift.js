// SHIFT ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;

// ***************************************************************************************************

const array1 = [1, 2, 3, 4, 5]

const shiftedArray = array1.shift();

console.log(shiftedArray);
// Expected output -> 1

console.log(array1);
// Expected output -> [2, 3, 4, 5]


// NOTES *******
// Assigning the method to a variable (L13) assigns the return value to that variable (whatever is returned)
// So since 1 is what's removed from the array, that's what's returned from the array and thus shiftedArray = 1

// However, the source array itself has been mutated and 1 is removed.
// So console logging the source array (array1) will log the array with the shift() method changes

// ADDITIONAL NOTE *******
// If you add another shift() method, even if not assigned, it will still remove an element from the array

const array2 = [1, 2, 3, 4, 5]

const shiftedArray2 = array2.shift();
array2.shift();

console.log(array2);
// Expected output -> [3, 4, 5]

// The first element is removed and stored in shiftedArray2 (which is 1) and the array is now [2, 3, 4, 5]

// We then use the shift() method again, unassigned, but the method still runs. 
// The value isn't stored anywhere, but the source array is still affected and is now [3, 4, 5]


// SHIFT() WITH STRINGS

const stringArray = ['Hello', 'Big', 'World']
const removedString = stringArray.shift();

console.log(stringArray);
// Expected output -> ['Big', 'World']

console.log(removedString);
// Expected output -> Hello