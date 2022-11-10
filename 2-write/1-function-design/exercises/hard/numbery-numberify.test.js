/* eslint-disable */
// #todo

/**
 * Takes an array of strings and returns a new array of numbers
 *  the new array contains all the number strings, cast to numbers
 * does not modify the argument (no side-effects).
 *
 * @param {string[]} arrayOfStrings - The array of strings.
 * @returns {number[]} An array containing only numbers, and not NaN.
 * @example
 *  ['1', '2', 'e', '.'] // --> [1, 2]
 */

// -------- your solutions --------

// eslint-disable-next-line no-unused-vars
const arrayOfStrings = (array) => {
  if (!Array.isArray(array)) {
    throw new TypeError();
  }

  const someArr = array.some((item) => typeof item !== "string");

  // eslint-disable-next-line no-shadow
  if (someArr) {
    throw new TypeError();
  }

  const onlyNumbers = array.filter(Number);
  const toNumbers = onlyNumbers.map(Number);
  return toNumbers;
};

// eslint-disable-next-line no-restricted-syntax, no-use-before-define
for (const solution of [secretSolution, arrayOfStrings]) {
  describe(`${solution.name}: string of array to an array`, () => {
    describe("convert array of string to array of number", () => {
      it("1- if array is empty should return an empty array", () => {
        expect(solution([])).toEqual([]);
      });
      it("2- if array of strings should return only number ", () => {
        expect(solution(["1", "2", "e", "."])).toEqual([1, 2]);
      });

      it("3- if array of string should return number", () => {
        expect(solution(["1", "2", "3", "4"])).toEqual([1, 2, 3, 4]);
      });
      it("if is no an array", () => {
        expect(() => solution({})).toThrow(TypeError);
      });
      it("if array is not string", () => {
        expect(() => solution([1, 2, 3, 4])).toThrow(TypeError);
      });
      it("if array contain integers", () => {
        expect(() => solution([1.2, 1.2, 1.3, 1.4])).toThrow(TypeError);
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 */
function secretSolution(a) {
  if (!Array.isArray(a)) {
    throw new TypeError("arrayOfStrings is not an array");
  }
  // eslint-disable-next-line spellcheck/spell-checker
  const b = a.some((a) => typeof a !== "string");
  if (b) {
    throw new TypeError("arrayOfStrings contains non-strings");
  }
  const c = a.map((a) => Number(a));
  const d = c.filter((a) => !Number.isNaN(a));
  return d;
}
