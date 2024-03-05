// SPLICE ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - SPLICE (NO VARIABLE + ADDING AN ELEMENT)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))

const months = ['Jan', 'Feb', 'Mar', 'April', 'May']

months.splice(0, 0, 'Dec')

console.log(color('Ex1: Notice the source array changed - it\'s a mutating method'))
console.log(color('We inserted "Dec" at the 0th index where "Jan" was - now "Jan" is at index 1'))
console.log(months);



// EXAMPLE 2 - SPLICE (NO VARIABLE + REPLACING AN ELEMENT)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))

const months1 = ['Jan', 'Feb', 'Mar', 'April', 'May']

months1.splice(0, 1, 'Dec')

console.log(color('Ex2: Notice how our 3rd argument ("Dec") replaces the 0th index ("Jan")'))
console.log(months1);

// If you increase the middle argument, that's how many indexes from 0 (could be any index number but we used 0 here) your 3rd argument (the element you're inserting/replacing with) will replace.

const months2 = ['Jan', 'Feb', 'Mar', 'April', 'May']

months2.splice(0, 3, 'Dec')

console.log(color('Ex2: Notice how "Jan", "Feb", and "Mar" are all gone'))
console.log(color('We said we want to replace/remove 3 elements, and since we only gave 1 element ("Dec") it will only replace 1 element at the start of the index we specify (in this case the 0th index)'))
console.log(color('Whatever is left if not specified will just remove elements - we specified "Dec" for 1 out of the 3, so 2 are left "empty" and thus will just remove 2 elements'))
console.log(months2);

// Replacing multiple elements

const months3 = ['Jan', 'Feb', 'Mar', 'April', 'May']

months3.splice(0, 3, 'Dec', "SomeMonth", "AnotherMonth")

console.log(color('Ex2: Unlike the last example above, we provide 3 replacement elements'))
console.log(color('So now nothing will be removed, only replaced and the array length remains the same'))
console.log(months3);



// EXAMPLE 3 - SPLICE (NO VARIABLE + REMOVING AN ELEMENT)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

const months4 = ['Jan', 'Feb', 'Mar', 'April', 'May']

months4.splice(0, 3)

console.log(color('Ex3: Notice when we omit the 3rd argument, Splice resorts to simply removing elements'))
console.log(color('It removed 3 elements going from the 0th index to the 3rd index'))
console.log(months4);

// Another example not from the 0th index

const months5 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

months5.splice(2, 4)

console.log(color('Ex3: Notice it starts removing elements from the index it starts on (2) ("Mar")'))
console.log(color('It starts at index 2 ("Mar") and removes 3 more elements after (4 elements total)'))
console.log(color('Thus the array is now...'))
console.log(months5);

// Remove ALL elements after specified index

const someMonths = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

someMonths.splice(2)

console.log(color('Ex3: When you only provide the first argument Splice will delete/remove every element after it in the array'))
console.log(color('We start at the 2nd index - so this keeps "Jan" (0) and "Feb" (1) in the array'))
console.log(someMonths);



// EXAMPLE 4 - SPLICE (WITH VARIABLE + REMOVING ELEMENTS)
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ----------------------------------------------------------'))

const months6 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

const splicedMonths = months6.splice(2, 2)

console.log(color('Ex4: 2 elements are removed starting at index 2 ("Mar" & "April")'))
console.log(months6);

console.log(color('Ex4: The variable "catches" and returns whatever elements were removed'))
console.log(splicedMonths);



// EXAMPLE 5 - SPLICE (WITH VARIABLE + REPLACING ELEMENTS)
console.log(colorG('------------------------------------------------------- EXAMPLE 5 ----------------------------------------------------------'))

const months7 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

const splicedMonths1 = months7.splice(2, 1, "CodeMonth!")

console.log(color('Ex5: The month at index 2 ("Mar") was replaced!'))
console.log(months7);

console.log(color('Ex5: The month that was replaced/removed is returned'))
console.log(splicedMonths1);



// EXAMPLE 6 - SPLICE (WITH VARIABLE + ADDING ELEMENTS)
console.log(colorG('------------------------------------------------------- EXAMPLE 6 ----------------------------------------------------------'))

const months8 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

const splicedMonths2 = months8.splice(2, 0, "CodeMonth!")

console.log(color('Ex6: "CodeMonth!" was added to index 2'))
console.log(color('We already know the logic of adding things with Splice, this is just to demonstrate what returning with a variable will do when adding an element'))
console.log(months8);

console.log(color('Ex6: Since nothing was removed/replaced nothing is returned but an empty array'))
console.log(splicedMonths2);



// EXAMPLE 7 - SPLICE (SPLICING FROM A SPLICED ARRAY + CONSOLE.LOG DEMO)
console.log(colorG('------------------------------------------------------- EXAMPLE 7 ----------------------------------------------------------'))

const months9 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

const splicedMonths3 = months9.splice(2, 0, "CodeMonth!")
months9.splice(8, 0, 'August', 'CodeMonth2!')
months9.splice(0, 2);

console.log(color('Ex7: We used a variable and added an element at index 2, then no variable adding 2 elements at index 8 (end of the array), then another no variable removing 2 elements starting at index 0 ("Jan", "Feb")'))
console.log(months9)

// Further manipulating the array, but with a console.log

console.log(color('Ex7: Like other mutating methods, when performing a mutating method in a console.log it will just return - so we replaced "Codemonth2!" so that\s what gets returned!'))
console.log(months9.splice(7, 1, 'Sep'));

console.log(color('Ex7: The source array is still mutated even from the previous console.log and the changes are reflected!'))
console.log(color('"Sep" is now replaced "CodeMonth2!"'))
console.log(months9)



// EXAMPLE 8 - SPLICE (ADDING USING NEGATIVES)
console.log(colorG('------------------------------------------------------- EXAMPLE 8 ----------------------------------------------------------'))

const months10 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

months10.splice(-3, 0, "CodeMonth!");

console.log(color('Ex8: Notice how it functions similar to slice. It counts back from the end of the array and lands on "May"'))
console.log(color('"CodeMonth" now takes "May"s position at index 4 (-3 from the end) pushing "May" up to index 5'))

console.log(months10)



// EXAMPLE 9 - SPLICE (REPLACING USING NEGATIVES)
console.log(colorG('------------------------------------------------------- EXAMPLE 9 ----------------------------------------------------------'))

const months11 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

months11.splice(-2, 1, "CodeMonth!");

console.log(color('Ex9: It counted back 2 and replaced "June" with "CodeMonth!"'))
console.log(color('If you put 2 as the second argument instead of 1, "CodeMonth!" would become the last element in the array replacing both   "June" and "July"'))
console.log(months11)



// EXAMPLE 10 - SPLICE (REMOVING USING NEGATIVES)
console.log(colorG('------------------------------------------------------- EXAMPLE 10 ----------------------------------------------------------'))

const months12 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

months12.splice(-4, 2);

console.log(color('Ex10: Notice it counted back 4 to "April" and deleted it and also "May"'))
console.log(color('Because we put 2 as our second argument so 2 got deleted'))
console.log(months12)

// Removing all after specified index using a negative

const months13 = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July']

months13.splice(-5);

console.log(color('Ex10: It counted back to "Mar" (-5) and deleted it and anything after'))
console.log(months13)



// EXAMPLE 11 - SPLICE (SPREADING A ARRAY IN)
console.log(colorG('------------------------------------------------------- EXAMPLE 11 ----------------------------------------------------------'))

const months14 = ['Jan', 'Feb', 'Mar', 'April']
const moreMonths = ['May', 'June', 'July']

console.log(color('Ex11: Both arrays uncombined/"spreaded"'))
console.log('Array 1 - ', months14)
console.log('Array 2 - ', moreMonths)

months14.splice(3, 0, ...moreMonths);

console.log(color('Ex11: We took two arrays and "spread" (combined) them with the Splice method'))
console.log(color('We inserted the new array at index 3 - notice how we put the spread array as the 3rd argument instead of an element!'))
console.log(months14);

// This is just one example. You can use any combination of the other examples above (adding, removing, replacing, using a negative index) when spreading.