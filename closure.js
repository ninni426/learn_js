/**
 * Write a function that would allow you to do this. 
 * var addSix = createBase(6);
 * addSix(10); // returns 16
 * addSix(21); // returns 27
 */

function createBase(baseN) {
    return (i) => {
      // we are referencing baseNumber here even though it was declared
      // outside of this function. Closures allow us to do this in JavaScript
      return baseN + i;
    }
}

var addSix = createBase(6);
addSix(10);
addSix(21);