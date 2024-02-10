// UNSHIFT ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;

// ***************************************************************************************************

// VARIABLE WITH ARGUMENT

const array = [1, 2, 3, 4, 5]
const unshifted = array.unshift(0);

console.log(color('Returns the length of the array'));
console.log(unshifted);
// Expected output -> 6

// Returns the LENGTH of the array (after the unshift() method)

console.log(color('The new MUTATED array'));
console.log(array);
// Expected output -> [0, 1, 2, 3, 4, 5]

// 0 Was added to the beginning of the source array


// NO VARIABLE WITH ARGUMENTS

const array2 = [13, 14, 15]
array2.unshift(10, 11, 12)

console.log(color('Example 2'))
console.log(array2)

// You don't need to assign a variable when using mutable array methods - the changes are still reflected
// This is because the source array still exists (now mutated) and no new array is being returned that you'd need to assign a variable too
// However if you did want the value that was returned from the method then yes, you would assign the method to a variable so the variable can "catch" and store that returned value

// VARIABLE WITH MULTIPLE ARGUMENTS

// We add arguments into the unshift() method while assigning it to a variable.
// This returns 6 because we added 3 elements to array3 which already has 3 elements - the array length is now 6

const array3 = [13, 14, 15]
const example2 = array3.unshift(10, 11, 12)

console.log(color('Example 3 - the source array'))
console.log(array3)
console.log(color('Example 3 - the return'))
console.log(example2)


// VARIABLE WITH NO ARGUMENTS

const array4 = [13, 14, 15]
const example3 = array4.unshift()

console.log(color('Example 4 - the source array'))
console.log(array4)
console.log(color('Example 4 - the return'))
console.log(example3)


// UNSHIFT WITH STRINGS

const array5 = ['Is', 'Coding']
array5.unshift('Tyler');

console.log(color('You can use strings with unshift() too'));
console.log(array5);

// If this was assigned to a variable, the length would be 3.
// Just incase you were wondering if it counts the whole string, or just it's characters.
