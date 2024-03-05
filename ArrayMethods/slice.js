// SLICE ARRAY METHOD

// DOCUMENTATION (ctrl + click)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

// CONSOLE COLORS (ignore)
import chalk from 'chalk';
const color = chalk.bgRed;
const colorG = chalk.bgGreen;

// INSTRUCTIONS: Simply CD into the "ArrayMethods" folder and run "node filename.js"
//               Study each example and their results in the console

// ***************************************************************************************************


// EXAMPLE 1 - SLICE (WITH VARIABLE + ONLY START)
console.log(colorG('------------------------------------------------------- EXAMPLE 1 ----------------------------------------------------------'))

// You must use a variable (or console.log) to capture the return value which is the copy of the new array

const animals = ['cat', 'dog', 'mouse', 'bird', 'lion']

const slicedArray = animals.slice(2);

console.log(color('Ex1: The start is index 2, anything before it is "sliced" out - if there\'s no end the rest of the array after stays'))
console.log(slicedArray);

console.log(color('Ex1: Notice the array isn\'t changed - it\'s a copy method'))
console.log(animals);



// EXAMPLE 2 - SLICE (WITH VARIABLE + WITH START & END)
console.log(colorG('------------------------------------------------------- EXAMPLE 2 ----------------------------------------------------------'))

const animals1 = ['cat', 'dog', 'mouse', 'bird', 'lion']

const slicedArray2 = animals1.slice(2, 4);

console.log(color('Ex2: The array starts at index 2, and ends at index 4'))
console.log(slicedArray2);

// What happens if the end is 1 index over from the start?

const slicedArray3 = animals1.slice(2, 3);

console.log(color('Ex2: If the "end" is one index over from the "start" only the "start" index will return'))
console.log(slicedArray3);

// We see that whatever the "end" is gets cut out along with anything after it.



// EXAMPLE 3 - SLICE (NO VARIABLE / NO CHANGE)
console.log(colorG('------------------------------------------------------- EXAMPLE 3 ----------------------------------------------------------'))

const animals2 = ['cat', 'dog', 'mouse', 'bird', 'lion']

animals2.slice(0, 3);

console.log(color('Ex3: As demonstrated in Ex1, without a variable we can\'t catch the return'))
console.log(color('We also have no variable to console log, so we can only log the source array and since it\'s a copy method the source array is unchanged'))
console.log(animals2);



// EXAMPLE 4 - SLICE (WITH CONSOLE LOG)
console.log(colorG('------------------------------------------------------- EXAMPLE 4 ----------------------------------------------------------'))

const animals3 = ['cat', 'dog', 'mouse', 'bird', 'lion']

console.log(color('Ex4: Like other copy methods, performing one in a console log acts the same as logging a variable with one would'))
console.log(animals3.slice(0, 3));

// ex: slicedArray =  animals3.slice(0, 3);
// console.log(sliceArray);
// This would return the same as console.log(animals3.slice(0, 3)) except the return is assigned to a variable



// EXAMPLE 5 - SLICE (WITH NEGATIVES + ONLY START)
console.log(colorG('------------------------------------------------------- EXAMPLE 5 ----------------------------------------------------------'))

const animals4 = ['cat', 'dog', 'mouse', 'bird', 'lion']

const slicedArray4 = animals4.slice(-3);

console.log(color('Ex5: Notice how the "start" starts from the end of the array instead of the beginning'))
console.log(color('In this example (-3) it goes back 3 indexes and removes the rest of the array to the left'))
console.log(slicedArray4);

const slicedArray5 = animals4.slice(-1);

console.log(color('Ex5: Notice here we only go back by 1 index (-1) and it logs the last item/element in the array "lion"'))
console.log(slicedArray5);



// EXAMPLE 6 - SLICE (WITH NEGATIVES + WITH START & END)
console.log(colorG('------------------------------------------------------- EXAMPLE 6 ----------------------------------------------------------'))

const animals5 = ['cat', 'dog', 'mouse', 'bird', 'lion']

const slicedArray6 = animals5.slice(-4, -2);

console.log(color('Ex6: Notice how it goes back 4 indexes (-4) to dog as the "start"'))
console.log(color('Then the "end" goes back 2 indexes (-2) to "bird" which then leaves only "dog" and "mouse" left'))
console.log(slicedArray6);



// EXAMPLE 7 - SLICE (WITH NEGATIVE START & POSITIVE END)
console.log(colorG('------------------------------------------------------- EXAMPLE 7 ----------------------------------------------------------'))

const animals6 = ['cat', 'dog', 'mouse', 'bird', 'lion'] 

const slicedArray7 = animals6.slice(-3, 4);

console.log(color('Ex7: Notice how the "start" counts back 3 indexes (-3) to "mouse" and the "end" is 4'))
console.log(color('The "end" is "lion" which is now removed leaving only "mouse" and "bird" left'))
console.log(slicedArray7);

// What if you wanted "lion" in the array too?

const slicedArray8 = animals6.slice(-3, 5)

console.log(color('Ex7: Simply go outside of the array with a higher index than the last index if you want to return the last element in the array.'))
console.log(color('This index only goes to 4, so we put 5 as the "end" to return "lion" (which is the last element in the array at index 4)'))
console.log(slicedArray8);

// What happens if you put a lower positive index as an "end" with a higher negative "start"?

const slicedArray9 = animals6.slice(-3, 2)

console.log(color('Ex7: Since our start is "mouse" at index 2 (but we count back 3 from the end)'))
console.log(color('But since our "end" is starting from the beginning of the array, and it\'s less than our start, our "end" ceases to exist because everything before our "start" was deleted/sliced'))
console.log(color('This returns an empty array'))
console.log(slicedArray9);

// IMPORTANT - Remember our "end" index is deleted along with anything before it (if it's a positive end) or after it (if it's a negative end)
// Notice how our negative "start" (-3) brings us to "mouse", but so does our positive "end" (2)
// The "start" and "end" cancel out because the "end" deleted the start resulting in an empty array
// Redundant but another way to say it is, the "start" was "mouse" and the "end" was also "mouse" and the "end" is always deleted

// IMPORTANT - Notice when our "start" is negative it counts backwards by 1, 2, 3 etc, but if our "start" is a positive number we count from the beginning starting from 0
// So if we want "mouse" with a positive "start" we would say (2) because "mouse" is at index 2, but if we want mouse with a negative "start" it would be be (-3) because it counts backwards and "mouse" is 3 indexes away from the end of the array
// "mouse" is 3 indexes backwards from the end of the array in this example
// If we wanted mouse but our array wasn't 4 indexes, it was 5, we would put -4 as our "start" to get to "mouse"
// But if we used a positive "start" we would still put 2 as our "start" even though our array is 5 indexes now, "mouse" is still at index 2

//                INDEXES
//    0      1       2        3       4
// ['cat', 'dog', 'mouse', 'bird', 'lion']

// If we wanted to just return "mouse" we would do (-3, 3) since "mouse" is at index 2, but 3 indexes from the end of our 4 index array
// So the 3rd index ("bird") is actually one index after "mouse" and gets deleted, leaving just "mouse"



// EXAMPLE 8 - SLICE (WITH POSITIVE START & NEGATIVE END)
console.log(colorG('------------------------------------------------------- EXAMPLE 8 ----------------------------------------------------------'))

const animals7 = ['cat', 'dog', 'mouse', 'bird', 'lion']

const sliceArray10 = animals7.slice(3, -1);

console.log(color('Ex8: The "start" is the 3rd index ("bird") and the "end" is the first index from the end of the array ("lion")'));
console.log(color('This leaves just "bird" left'));
console.log(sliceArray10);

// Play with the numbers on L156 and run node to see the results



// EXAMPLE 9 - SLICING WITH A SLICED ARRAY
console.log(colorG('------------------------------------------------------- EXAMPLE 9 ----------------------------------------------------------'))

const animals8 = ['cat', 'dog', 'mouse', 'bird', 'lion']

const slicedArray11 = animals8.slice(1, 5);
const slicedArray12 = slicedArray11.slice(0, 4)

console.log(color('Ex9: This is our first returned array - we remove hte 0th index, and go outside the index with our "end" to keep "lion" in our returned array'))
console.log(slicedArray11);

console.log(color('Ex9: Notice how before "dog" was at index 1, but since "cat" at index 0 was removed "dog" is now at index 0'))
console.log(color('Also notice how "lion" still stays in the array - "lion" was previously at index 4'))
console.log(color('But since the array was sliced down by 1 index ("cat") it became a 3 index array instead of 4, so "lion" actually became index 3 and index 4 where "lion" previously was is now out of the array'))
console.log(slicedArray12);

// I sliced in these ways to illustrate the above points in the console logs

const slicedArray13 = slicedArray12.slice(-3, 3)

console.log(color('Ex9: We spice it up by slicing an already sliced array AND using a negative "start" and a positive "end'))
console.log(color('We go backwards 3 indexes to "mouse" (-3) and "end" on "lion" (3) which deletes "lion"'))
console.log(color('Thus the result of our NEW array is [mouse, bird]!'))
console.log(slicedArray13);