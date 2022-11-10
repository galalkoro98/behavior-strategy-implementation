/* eslint-disable */
// #todo

"use strict";

/**
 * sums all numbery strings in an array of strings
 * returns 0 if the array is empty
 * it does not modify the original array (no side-effects)
 * @param {string[]} arr - the array of strings
 * @returns {number} the sum of all numbery strings
 */

// -------- your solutions --------

const mapFilterReduce = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError();
  }

  const noString = arr.some((item) => typeof item !== "string");
  if (noString) {
    throw new TypeError();
  }
  // these work, you need to pass them to the right array methods
  /* const isNotNaN = (entry) => !Number.isNaN(entry);
  const sumNumbers = (acc, next) => acc + next;
  const castToNumber = (entry) => Number(entry);
*/
  // fill in the array methods and pass in the correct logic
  const sumOfNumberies = arr
    .map((element) => element)
    .filter((item) => !Number.isNaN(item))
    .reduce((current, previous) => current + previous, 0);

  return sumOfNumberies;
};

// -------- your solutions --------

for (const solution of [secretSolution, mapFilterReduce]) {
  describe(solution.name + ": sum all number of strings in array", () => {
    describe("array of strings return ", () => {
      it("if array is empty should return 0", () => {
        expect(solution([])).toEqual(0);
      });
      it("if array is not an array", () => {
        expect(() => solution({})).toThrow(TypeError);
      });
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) {
   if (!Array.isArray(a)) {
     throw new TypeError("arr is not an array"); 
    } 
    const b = a.some(a => typeof a !== "string"); // "string" != typeof a
    if (b) {
       throw new TypeError("arr contains non-strings");
      } 
      const c = a.map(a => +a).filter(a => !Number.isNaN(a)).reduce((a, b) => a + b, 0); 
      return c 
    }
