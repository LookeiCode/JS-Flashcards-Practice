// MAP ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - MAP ()

const array = ['Tyler', 'Kristen', 'Jack', 'Jill']

const mappedArray = array.map((x, index) => {
    if (x == 'Tyleq') {
        console.log('It\'s Tyler!');
        return 'It\'s Tyler!'
    } else {
        console.log('Not Tyler!');
        return 'Not Tyler!'

    }
});

console.log(mappedArray);













// let arr = [2, 3, 5, 7]

// arr.map(function (element, index, array) {
//     console.log(color('element'))
//     console.log(element);
//     console.log(color('index'))
//     console.log(index);
//     console.log(color('array'))
//     console.log(array);
//     return element;
// }, 80);