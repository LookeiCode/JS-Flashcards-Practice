// LASTINDEXOF ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastindexof

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - LASTINDEXOF (WITH VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ---------------------------------------------------------'))

const array = ['Cat', 'Dog', 'Mouse', 'Lion', 'Dog', 'Bear'];

const findIndex = array.lastIndexOf('Dog')

console.log(color('Ex1: Notice how there\'s "Dog" at index 1 and 5, but 5 is the index that\'s returned'));
console.log(color('This is because the lastIndexOf method searches backwards starting from the end of the array'));
console.log(findIndex);



// EXAMPLE 2 - LASTINDEXOF (2ND PARAMETER (START))
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ---------------------------------------------------------'))

const array1 = ['Cat', 'Dog', 'Mouse', 'Lion', 'Dog', 'Bear'];

const findIndex1 = array.lastIndexOf('Dog', 3)

console.log(color('Ex2: Here we told it to start at index 3 ("Lion") then it searched backwards so it found the "Dog" at index 1'));
console.log(findIndex1);


// The lastIndexOf method functions identical to indexOf - except this version searches backwards from the end of an array
// Look at indexOf.js to see other ways to use it