// JOIN ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


const words = ['Tyler', 'Kristen', 'Jack', 'Jill']

const joinedWords = words.join();
const joinedWords2 = words.join('');
const joinedWords3 = words.join('-');
const joinedWords4 = words.join('_');
const joinedWords5 = words.join(',');
const joinedWords6 = words.join(' ');
const joinedWords7 = words.join(', ');
const joinedWords8 = words.join(' + ');

// LOGS

console.log(color("Nothing inside separates the joined strings with a comma by default with no spacing"));
console.log(joinedWords);

console.log(color("Apostrophes with no space"));
console.log(joinedWords2);

console.log(color("You can uses symbols such as dashes"));
console.log(joinedWords3);

console.log(color("And underscores"));
console.log(joinedWords4);

console.log(color("And commas, etc..."));
console.log(joinedWords5);

console.log(color("You can also separate the joined strings with apostrophes with a space"));
console.log(joinedWords6);

console.log(color("You can even add a symbol (such as a comma) followed by a space"));
console.log(joinedWords7);

console.log(color("You can add spacing before and after a symbol too"));
console.log(joinedWords8);