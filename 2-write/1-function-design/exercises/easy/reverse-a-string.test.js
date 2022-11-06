// #todo

/** ....................
 * Reverses a string
 *
 * @param {string} [_toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
// eslint-disable-next-line no-unused-vars
const reverseString = (toReverse = "") => {
  if (typeof toReverse !== "string") {
    throw TypeError();
  }

  if (toReverse.length > 10) {
    throw new Error();
  }
  let newString = "";

  for (let i = toReverse.length - 1; i >= 0; i--) {
    // add each character to newString
    newString += toReverse.charAt(i);
  }
  // eslint-disable-next-line max-len
  if (
    newString.charAt(newString.length - 1) ===
    newString.charAt(newString.length - 1).toUpperCase()
  ) {
    return newString;
  }

  return newString;
};

// eslint-disable-next-line no-restricted-syntax, no-use-before-define
for (const solution of [secretSolution, reverseString]) {
  // the main test suite for the function
  describe(`${solution.name}: reverses a string`, () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual("");
    });
    it('an empty string -> ""', () => {
      expect(solution("")).toEqual("");
    });
    it("a string with all capital letters", () => {
      expect(solution("ASDF")).toEqual("FDSA");
    });
    // write at least 5 more tests ...
    it("a string with all small letters", () => {
      expect(solution("asdf")).toEqual("fdsa");
    });
    it("if to reverse is not an string should throw error", () => {
      expect(() => solution([])).toThrow(TypeError);
    });
    // it("if to reverse string is undefined", () => {
    //   // eslint-disable-next-line no-undefined

    //   const lengthString = "hello world hello";
    //   expect(() => solution(lengthString)).toThrow(Error);
    // });
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 */

function secretSolution(a = '') {
  if (typeof a !== "string") {
    throw new TypeError("toReverse is not a string");
  }
  return a.split("").reverse().join("");
}
