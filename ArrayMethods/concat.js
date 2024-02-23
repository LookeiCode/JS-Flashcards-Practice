// CONCAT ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results

// ***************************************************************************************************


const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]
const num4 = [10, 11, 12]
const num5 = [13, 14, 15]

const numbers = num1.concat(num2, num3, num4, num5);

console.log('New concatenated array is:')
console.log(numbers);

// NOTE: It seems you can concat as many arrays as you want so long as you provide the value on L14 in the concat method

// COMBINING CONCATED ARRAYS

const num6 = [1, 2, 3]
const num7 = [4, 5, 6]

const arrayNum1 = num6.concat(num7);

console.log('New concatenated array 1 is:')
console.log(arrayNum1);

const num8 = [7, 8, 9]
const num9 = [10, 11, 12]

const arrayNum2 = num8.concat(num9);

console.log('New concatenated array 2 is:')
console.log(arrayNum2);

const combinedArrays = arrayNum1.concat(arrayNum2);

console.log('Combined arrays are:')
console.log(combinedArrays);