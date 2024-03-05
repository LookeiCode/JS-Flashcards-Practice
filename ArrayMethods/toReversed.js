// TOREVERSED ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toReversed

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - REVERSE (WITH VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ---------------------------------------------------------'))

const array = [1, 2, 3, 4, 5];

const reversed = array.toReversed();

console.log(color('Ex1: Notice how the source array wasn\'t mutated'));
console.log(array);

console.log(color('Ex1: The variable returns the new array'));
console.log(color('Which is a copy of the source array with the toReversed method applied'));
console.log(reversed);



// EXAMPLE 2 - REVERSE (WITHOUT VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ---------------------------------------------------------'))

const array1 = [1, 2, 3, 4, 5];

array.toReversed();

console.log(color('Ex1: Notice how nothing happens'));
console.log(color('This is because you need to catch the return with a variable to return the new reversed array'));
console.log(array1);


// The reverse method functions identical to toReversed - except this is the copy method version, and reverse is the mutating method version
// Look at reverse.js to see other ways to use it (except example 4 as this essentially does exactly that)