// INDEXOF ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexof

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - INDEXOF (WITH VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ---------------------------------------------------------'))

const array = ['Cat', 'Dog', 'Mouse', 'Lion', 'Bear'];

const findIndex = array.indexOf('Dog');

console.log(color('Ex1: "Dog" is at index 1 in the array thus 1 is returned'));
console.log(findIndex);

//it's case sensitive

const findIndex1 = array.indexOf('dog');

console.log(color('Ex1: As you can see it is case sensitive so it returns -1 (more on this later)'));
console.log(color('"Dog" is in the array but "dog" is not'));

console.log(findIndex1);



// EXAMPLE 2 - INDEXOF (NO VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ---------------------------------------------------------'))

const array1 = ['Cat', 'Dog', 'Mouse', 'Lion', 'Bear'];

array1.indexOf("Dog");

console.log(color('Ex2: Since this is clearly not a mutable array method nothing happens'));
console.log(color('You need to assign a variable to catch the return'));
console.log(array1);



// EXAMPLE 3 - INDEXOF (CONSOLE.LOG)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ---------------------------------------------------------'))

const array2 = ['Cat', 'Dog', 'Mouse', 'Lion', 'Bear'];

console.log(color('Ex3: Similar to other array methods, if a method is used in a console.log it\'ll just return the return'));
console.log(array2.indexOf("Mouse"));



// EXAMPLE 4 - INDEXOF (2ND PARAMETER (START) )
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ---------------------------------------------------------'))

// if the element you're searching for is before your start parameters index

const array3 = ['Cat', 'Dog', 'Mouse', 'Lion', 'Bear'];

const findIndex2 = array3.indexOf('Dog', 2);

console.log(color('Ex4: The method starts at index 2 - this does not loop through the array so it\'ll return -1 since it won\'t find "Dog"'));
console.log(findIndex2);

// if there's more than one of the same element

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(color('Ex4: There\'s two "bison" in the array'));
console.log(color('It finds the "bison" at index 4 but not the one at index 1 since we start the method at index 2'));
const findIndex3 = beasts.indexOf('bison', 2);
console.log(findIndex3);

// EXAMPLE 5 - INDEXOF (ELEMENT DOESN'T EXIST)
console.log(colorG('------------------------------------------------------- EXAMPLE 5 ---------------------------------------------------------'))

const array4 = ['Cat', 'Dog', 'Mouse', 'Lion', 'Bear'];

const findIndex4 = array4.indexOf('Tiger');

console.log(color('Ex5: As demonstrated in previous examples, if the element you\'re searching for doesn\'t exist in the array it returns -1'));
console.log(color('"Tiger" does not exist in the array'));
console.log(findIndex4);



// EXAMPLE 6 - INDEXOF (INTEGERS)
console.log(colorG('------------------------------------------------------- EXAMPLE 6 ---------------------------------------------------------'))

const array5 = [1, 2, 3, 4, 5];

const findIndex5 = array5.indexOf('2');

console.log(color('Ex6: Notice how it returns -1 even though 2 is in the array'));
console.log(color('This is because it\'s an integer, not a string, but is being treated as a string because it\'s wrapped in single quotes'));
console.log(findIndex5);

const findIndex6 = array5.indexOf(2);

console.log(color('Ex6: This is how you find the index of integers in an array using indexOf - no quotes'));
console.log(color('It\'s a common little mistake to forget this'));
console.log(findIndex6);