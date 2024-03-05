// TOSPLICED ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/toSpliced

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************

// toSpliced is the exact same as splice except it does NOT mutate the array - it's the copy method version of splice
// Refer to the "splice.js" file to see everything toSpliced can do - it has all the same functionality/logic (the only difference is the type of method it is based on what it returns)



// EXAMPLE 1 - TOSPLICED (NO VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))

const months = ['Jan', 'Feb', 'Mar', 'April', 'May']

months.toSpliced();
// OR (no difference if you're not "capturing" the return with a variable or console.log)
months.toSpliced(1, 3, 'CodeMonth!')

console.log(color('Ex1: Notice how nothing happens to the original "source" array'))
console.log(color('It\'s because "toSpliced" is a copy method (copy version of splice)'))
console.log(months);



// EXAMPLE 2 - TOSPLICED (WITH VARIABLE)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))

const months1 = ['Jan', 'Feb', 'Mar', 'April', 'May']

const splicedMonths = months.toSpliced(1, 3, 'CodeMonth!')

console.log(color('Ex2: The source array  - unchanged/mutated'))
console.log(months1);

console.log(color('Ex2: Unlike splice which returns the removed elements, notice how toSpliced returns a copy of the new/changed array'))
console.log(color('It STARTS at index 1 and replaces index 2 & 3 ("Mar" & "April") too'))
console.log(splicedMonths);



// EXAMPLE 3 - TOSPLICED (WITH VARIABLE + ADDING EXTRA ELEMENTS)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

// This applies to Splice as well (I just forgot to add it and don't feel like going back and changing all the variable names to fit it into the right example)

// What if we say for the 2nd argument we want to replace/remove 2 elements but provide 4?

const months2 = ['Jan', 'Feb', 'Mar', 'April', 'May']

const splicedMonths1 = months.toSpliced(1, 3, 'CodeMonth!', 'YEAH!', 'OK!', 'WHAAAT!', 'LILJON!')

console.log(color('Ex3: Notice how LilJons crunk adlibs exceed beyond the specified number of elements we want to remove (3)'))
console.log(color('It starts at index 1 ("Feb" / "CodeMonth!") and then "YEAH!" replaces "Mar" at index 2, and "OK!" replaces "April" at index 3'))
console.log(color('"WHAAAT!" and "LILJON!" are still added to the array at index 4 and index 5 but nothing else is removed/replaced - "May" stays in the array'))
console.log(splicedMonths1);



// EXAMPLE 4 - TOSPLICED (WITH CONSOLE.LOG)
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ----------------------------------------------------------'))

const months3 = ['Jan', 'Feb', 'Mar', 'April', 'May']

console.log(color('Ex4: Like other array methods, when you use the copy array method inside of it, it will simply just log whatever that method returns'))
console.log(color('In this case since toSplcied is a copy method, it\'s the new array'))
console.log(months3.toSpliced(0, 2, 'CodeMonth', 'Get Crunk!'))

// As said on L16, refer to the "splice.js" to see what else toSpliced can do!