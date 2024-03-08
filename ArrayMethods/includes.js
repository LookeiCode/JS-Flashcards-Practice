// INCLUDES ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - INCLUDES (WITH VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ---------------------------------------------------------'))

// Demonstrating a true return

const array = [1, 2, 3, 4, 5];

const arrReturn = array.includes(2);

console.log(color('Ex1: The return for the includes method is a boolean'));
console.log(arrReturn);

// Demonstrating a false return

const arrReturn1 = array.includes(6);

console.log(color('Ex1: Notice how it returned false here. The integer "6" is not included/in our array'));
console.log(arrReturn1);

// There's no sense in not using a variable for the includes method (because all you care about is the return value)
// You are simply using it to check if an array includes a specific element
// If you want to see if the array contains a certain item you can use this variable way, or a console.log
// You would probably mostly use this with if/else statements, ternaries, and other things



// EXAMPLE 2 - INCLUDES (WITH A CONSOLE.LOG)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ---------------------------------------------------------'))

const array2 = [1, 2, 3, 4, 5];

console.log(color('Ex2: Notice how the method still runs. This could just be a way to quickly check an array'));
console.log(color('- You proably would hardly do this it\'s just for demonstration'));
console.log(array2.includes(6));



// EXAMPLE 3 - INCLUDES (USING NEGATIVE INTEGERS)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ---------------------------------------------------------'))

const array3 = [1, 2, 3, 4, 5];

console.log(color('Ex3: Notice how it returns false'));
console.log(color('- The includes method does take into account if a number is negative or not'));
console.log(array3.includes(-3));



// EXAMPLE 4 - INCLUDES (USING FROMINDEX)
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ---------------------------------------------------------'))

// fromIndex is the second parameter of the includes method (refer to the MDN)
// It's used to determine whether an array should be searched or not (false = no search)

const array4 = [1, 2, 3, 4, 5];

console.log(color('Ex4: Notice how it returns true'));
console.log(color('- This is because the index (3) is not greater than or equal to the length of the array (4)'));
console.log(color('- When using fromIndex it will return true if the index specified is less than or not equal to the arrays length'));
console.log(color('- Our array is 4 indexes in length, so 3 is less than/not equal to the array length, thus it returns true'));
console.log(color('- If it was equal to or greater than the array length it would return false and the array would NOT be searched'));
console.log(array4.includes(4, 3));

console.log(color('Ex4: Notice how it returns false here'));
console.log(color('- This is because the index (4) is equal to the length of the array'));
console.log(array4.includes(4, 4));

console.log(color('Ex4: Notice how it returns true!'));
console.log(color('- This is because the fromIndex is at a negative index and our array is 4 "positive" indexes in length'));
console.log(array4.includes(4, -7));

// Using negative numbers

const negArray = [-1, -2, -3, -4, -5];

console.log(color('Ex4: The searchedElement (parameter one) is negative (-4), but the index is still 3 (positive)'));
console.log(color('- Remember it goes by index, not the integers themselves'));
console.log(color('- -7 might be greater than -4 but -7 is representing the index, which is less than the array length (4) so it returns true'));

console.log(negArray.includes(-4, -7));

// Not completely sure why this (below) returns false or the logic behind it; but it's worth noting!

// const array1 = [1, 2, -3, 4, 5];
// console.log(array4.includes(-3, -100));



// EXAMPLE 5 - INCLUDES (0 AND -0)
console.log(colorG('------------------------------------------------------- EXAMPLE 5 ---------------------------------------------------------'))

const array5 = [0, 1, 2, 3, 4, 5];

console.log(color('Ex5: Notice how it returns true, even though our 0 in our array isn\'t "-0"'));
console.log(color('- This is because 0 is the only integer that\'s considered equal whether it\'s negative or not'));
console.log(array5.includes(-0));



// EXAMPLE 6 - INCLUDES (STRINGS/INTEGERS)
console.log(colorG('------------------------------------------------------- EXAMPLE 6 ---------------------------------------------------------'))

const array6 = [0, 1, 2, 3, 4, 5];

console.log(color('Ex6: Notice how even though 3 is in the array, the STRING "3" doesn\'t register'));
console.log(array6.includes("3"));

const array7 = ["1", "2", "3"]

console.log(color('Ex6: Notice how this logs true since they\'re both strings'))
console.log(array7.includes("3"));

console.log(color('Ex6: And this logs false because the array has a string "3" but we\'re looking to see if it includes an integer 3'))
console.log(array7.includes(3));


// EXAMPLE 7 - INCLUDES (SPARSE ARRAYS)
console.log(colorG('------------------------------------------------------- EXAMPLE 7 ---------------------------------------------------------'))

const array8 = [0, 1,  , 3,  , 5];

console.log(color('Ex7: This array has empty indexes with no elements - we can use includes to see if an array has empty (undefined) spots/indexes'));
console.log(color('- This is a "sparse" array. Sparse arrays have empty indexes which are considered "undefined"'));
console.log(array8.includes(undefined));
