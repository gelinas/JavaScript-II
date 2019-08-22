// ==== Challenge 1: Write your own closure ====
// Write a closure of your own creation.
// Keep it simple! Remember a closure is just a function
// that manipulates variables defined in the outer scope.
// The outer scope can be a parent function, or the top level of the script.

let globalVariable = 3;

function addUp(num) {
  globalVariable = globalVariable + num;
  return globalVariable;
}
console.log(addUp(4));
console.log(addUp(4));



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Implement a "counter maker" function ====
  // IMPLEMENTATION OF counterMaker:
  // 1- Declare a `count` variable with a value of 0. We will be mutating it, so declare it using `let`!
  // 2- Declare a function `counter`. It should increment and return `count`.
  //      NOTE: This `counter` function, being nested inside `counterMaker`,
  //      "closes over" the `count` variable. It can "see" it in the parent scope!
  // 3- Return the `counter` function.
  
const counterMaker = () => {
  let count = 0;
  function counter() {
    count = count +1;
    return count;
  }
  return counter
};

const newCount = counterMaker();

newCount(); // 1
newCount(); // 2
newCount(); // 3
newCount(); // 4
newCount(); // 5
newCount(); // 6
newCount(); // 7
console.log(newCount()); // 8

// ==== Challenge 3: Make `counterMaker` more sophisticated ====
// It should have a `limit` parameter. Any counters we make with `counterMaker`
// will refuse to go over the limit, and start back at 1.

const betterCounterMaker = () => {
  let count = 0;
  function counter(limit) {
    if (count < limit) {
      count = count +1;
    } else {
      count = 1;
    }
    return count;
  }
  return counter
};

const betterCount = betterCounterMaker();

betterCount(10); // 1
betterCount(10); // 2
betterCount(10); // 3
betterCount(10); // 4
betterCount(10); // 5
betterCount(10); // 6
betterCount(10); // 7
betterCount(10); // 8
betterCount(10); // 9
betterCount(10); // 10
betterCount(10); // 1

console.log(betterCount(10)); // 2

// ==== Challenge 4: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  
  let counterObj = {
    finalCount: 0,
    increment: function() {
      counterObj.finalCount = counterObj.finalCount + 1;
      return counterObj.finalCount;
    },
    decrement: function() {
      counterObj.finalCount = counterObj.finalCount - 1;
      return counterObj.finalCount;
    }
  }
  return counterObj;
};

const ultimateCount = counterFactory();

console.log(ultimateCount.finalCount);

ultimateCount.increment(); // 1
ultimateCount.increment(); // 2

console.log(ultimateCount.finalCount); // 2

ultimateCount.decrement(); // 1

console.log(ultimateCount.finalCount); // 1


