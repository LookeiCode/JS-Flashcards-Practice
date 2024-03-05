// REVERSE ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - REVERSE (NO VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ---------------------------------------------------------'))

const array = [1, 2, 3, 4, 5];

console.log(color('Ex1: The array before the reverse method'));
console.log(array);

array.reverse();

console.log(color('Ex1: The array order has been reversed'));
console.log(array);

// IMPORTANT: The reverse method takes NO PARAMETERS



// EXAMPLE 2 - REVERSE (WITH VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ---------------------------------------------------------'))

const array1 = [1, 2, 3, 4, 5];

const reversed = array1.reverse();

console.log(color('Ex2: The return for the reverse method is the reversed array itself'));
console.log(reversed);

console.log(color('Ex2: The reverse method is a mutable method, so the actual source array is reversed'));
console.log(color('It doesn\'t matter whether you return the array, or the variable/return, you still get the reversed array'));
console.log(array1);



// EXAMPLE 3 - REVERSE (REVERSING A REVERSED ARRAY)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ---------------------------------------------------------'))

const array2 = [1, 2, 3, 4, 5];

array2.reverse();
array2.reverse();

console.log(color('Ex3: Calling the reverse method twice just "undos" the initial reverse by reversing the array back'));
console.log(array2);

// OR

const array3 = [1, 2, 3, 4, 5];

array2.reverse();
const reversed1 = array2.reverse();

console.log(color('Ex3: The logic is still the same using variables'));
console.log(color('Ex3: As long as the reverse method is called on the same array twice it\'ll "revert" back to its initial order'));
console.log(reversed1);
// console.log(array2)  would work too they both return the reversed array - this is just for demonstration with a variable



// EXAMPLE 4 - REVERSE (PREVENTING MUTATION / MAKING A NEW ARRAY)
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ---------------------------------------------------------'))

const array4 = [1, 2, 3, 4, 5];

const reversedArr = [...array4].reverse();

console.log(color('Ex4: Notice how the source array remains untouched'));
console.log(color('This is because we used the contents of the source array, BUT we spread it, creating a new array'));
console.log(color('Then reversed that copy array and assigned it to the variable "reversedArr"'));
console.log(array4);

console.log(color('Ex4: Notice how the variable returns the reversed array because the reversed copy of the source array is assigned to it'));
console.log(color('The variable literally has it\'s own array assigned to it detached from the source array it was copied from'));
console.log(reversedArr);

// Lets now reverse the "copy array" back

reversedArr.reverse();
console.log(color('The "copy array" is reversed back'));
console.log(reversedArr);

// I have not tried it besides here, but logic would suggest this applies to all mutable array methods
// IMPORTANT: The toReversed() method achieves this same result because it's the copy method version of the reverse method (which is a mutating method)