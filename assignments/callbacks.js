// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  // GIVEN THIS PROBLEM:

  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // SOLUTION:

  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // NOTES ON THE SOLUTION:

  // firstItem is a higher order function.
  // It expects a callback (referred to as `cb`) as its second argument.
  // To test our solution, we can use the given `items` array and a variety of callbacks.
  // Note how callbacks can be declared separately, or inlined.

  // TEST 1 (inlined callback):

  const test1 = firstItem(items, item => `I love my ${item}!`);
  console.log(test1); // "I love my Pencil!"

  // TEST 2 (declaring callback before hand):

  function logExorbitantPrice(article) {
    return `this ${article} is worth a million dollars!`;
  };

  const test2 = firstItem(items, logExorbitantPrice);
  console.log(test2); // "this Pencil is worth a million dollars!"
*/

// getLength passes the length of the array into the callback.
function getLength(arr, cb) {
  return cb(arr.length);
}
// My test of getLength
// TEST 3 (inlined callback)
test3 = getLength(items, myLength => `This array is ${myLength} items long`);
console.log(test3);

// TEST 4 (declaring callback beforehand)
function reallyLong(length) {
  return `This array is ${length} items long`;
}

const test4 = getLength(items, reallyLong);
console.log(test4);


// last passes the last item of the array into the callback.
function last(arr, cb) {
  return cb(arr[arr.length-1]);
}
// My test of last
// TEST 5 (inlined callback):
const test5 = last(items, item => `I love my ${item}!`);
console.log(test5); // "I love my Gum!"

// TEST 6 (declaring callback before hand):
function logExorbitantPrice(article) {
  return `this ${article} is worth a million dollars!`;
}

const test6 = last(items, logExorbitantPrice);
console.log(test6); // "this Gum is worth a million dollars!"

// sumNums adds two numbers (x, y) and passes the result to the callback.
function sumNums(x, y, cb) {
  return cb(x + y);
}
// My test of sumNums
// TEST 7 (inlined callback):
const test7 = sumNums(3, 4, apples => `We have ${apples} Apples!`);
console.log(test7);

// TEST 8 (declaring callback before hand):
function countApples(number) {
  return `I counted ${number} apples.`;
}

const test8 = sumNums(2, 9, countApples);
console.log(test8);


// multiplyNums multiplies two numbers and passes the result to the callback.
function multiplyNums(x, y, cb) {
  return cb(x * y);
}

// My test of multiplyNums
// TEST 9 (inlined callback):
const test9 = multiplyNums(3, 4, boxes => `We have ${boxes} Boxes!`);
console.log(test9);

// TEST 10 (declaring callback before hand):
function boxesInSquare(number) {
  return `I there are ${number} boxes in the square.`;
}

const test10 = multiplyNums(2, 9, boxesInSquare);
console.log(test10);


// contains checks if an item is present inside of the given array/list.
// Pass true to the callback if it is, otherwise pass false.
function contains(item, list, cb) {
  cb(list.includes(item));
}

// My test of contains
// TEST 11 (inlined callback):
const test11 = contains("Pencil", items, foundIt => {
  console.log(foundIt);
});

const test12 = contains("Apple", items, foundIt => {
  console.log(foundIt);
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
}
