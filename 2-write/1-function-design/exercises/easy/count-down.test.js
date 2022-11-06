/* eslint-disable for-direction */
/* eslint-disable no-restricted-syntax */
// #todo

/** ....................
 * Builds an array counting down from `start` to 0
 *
 * @param {number} [start=0] - the number to count down from
 *  start must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from `start` to 0
 */

// -------- your solutions --------

const countDown = (start = 0) => {
  if (typeof start !== "number") {
    throw Error("is not a number");
  }

  if (!Number.isInteger(start)) {
    throw new Error("the number is integer");
  }

  if (start < 0) {
    throw new RangeError("the number is less than zero");
  }

  const startNumber = [];

  for (let i = start; i >= 0; i--) {
    startNumber.push(i);
  }

  return startNumber;
};

// eslint-disable-next-line no-use-before-define
for (const solution of [secretSolution, countDown]) {
  // the main test suite for the function
  describe(`${solution.name}: counts down to 0`, () => {
    it("default parameter is 0 -> [0]", () => {
      expect(solution()).toEqual([0]);
    });
    it("0 -> [0]", () => {
      expect(solution(0)).toEqual([0]);
    });
    it("1 -> [1, 0]", () => {
      expect(solution(1)).toEqual([1, 0]);
    });
    // write at least 5 more tests ...
    it("2 -> [2, 1, 0]", () => {
      expect(solution(2)).toEqual([2, 1, 0]);
    });

    it("start is not a number should throw Error", () => {
      expect(() => solution([])).toThrow(Error);
    });
    it("start is an integer should throw Error", () => {
      expect(() => solution(4.33)).toThrow(Error);
    });
    it("start is less than 0", () => {
      expect(() => solution(-2)).toThrow(RangeError);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 */
function secretSolution(a = 0) { if (typeof a !== "number") throw new TypeError("start is not a number"); if (!Number.isInteger(a)) throw new Error("start is not an integer"); if (a < 0) throw new RangeError("start is less than 0"); const b = []; for (let c = a; c >= 0; c--)b.push(c); return b; }
