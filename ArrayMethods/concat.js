// CONCAT ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - CONCAT ()
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))

const num1 = [1, 2, 3]
const num2 = [4, 5, 6]
const num3 = [7, 8, 9]
const num4 = [10, 11, 12]
const num5 = [13, 14, 15]

const numbers = num1.concat(num2, num3, num4, num5);

console.log(color('Ex1: New concatenated array is:'))
console.log(numbers);

// NOTE: It seems you can concat as many arrays as you want so long as you provide the value on L14 in the concat method



// EXAMPLE 2 - CONCAT (COMBINING CONCATED ARRAYS)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))



const num6 = [1, 2, 3]
const num7 = [4, 5, 6]

const arrayNum1 = num6.concat(num7);

console.log(color('Ex2: New concatenated array 1 is:'))
console.log(arrayNum1);

const num8 = [7, 8, 9]
const num9 = [10, 11, 12]

const arrayNum2 = num8.concat(num9);

console.log(color('Ex2: New concatenated array 2 is:'))
console.log(arrayNum2);

const combinedArrays = arrayNum1.concat(arrayNum2);

console.log(color('Ex2: Combined arrays are:'))
console.log(combinedArrays);



// EXAMPLE 3 - CONCAT (CONCATENATING INTEGERS & STRINGS)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

const strArr = ['Hello', 'World!', '1', '2'];
const intArr = [1, 2, 3];

const combinedArr = strArr.concat(intArr);

console.log(color('Ex3: Combined string and integer arrays are:'))
console.log(combinedArr);