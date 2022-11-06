/* eslint-disable no-restricted-syntax */
// #todo

/** .........
 * Builds an array counting up from 0 to `max`
 *
 * @param {number} [max=0] - the number to count up to
 *  max must be an integer that is greater than 0
 * @returns {number[]} an array of all numbers from 0 to `max`
 */

// -------- your solutions --------

const countUp = (max = 0) => {
  if (typeof max !== "number") {
    throw new TypeError("max is not a number");
  }

  if (!Number.isInteger(max)) {
    throw new Error("the max is not integer");
  }

  if (max < 0) {
    throw new RangeError("the max is less than 0");
  }
  const maxNumber = [];
  // eslint-disable-next-line for-direction
  for (let i = 0; i <= max; i++) {
    maxNumber.push(i);
  }
  return maxNumber;
};

// eslint-disable-next-line no-use-before-define
for (const solution of [secretSolution, countUp]) {
  // the main test suite for the function
  describe(`${solution.name}: counts up from 0`, () => {
    it("default parameter is 0 -> [0]", () => {
      const actual = solution();
      expect(actual).toEqual([0]);
    });
    it("0 -> [0]", () => {
      expect(solution(0)).toEqual([0]);
    });
    it("1 -> [0, 1]", () => {
      expect(solution(1)).toEqual([0, 1]);
    });
    // write at least 5 more tests ...
    it("2 -> [0, 1, 2]", () => {
      expect(solution(2)).toEqual([0, 1, 2]);
    });

    it("3 -> [0, 1, 2, 3]", () => {
      expect(solution(3)).toEqual([0, 1, 2, 3]);
    });

    it("4-> [0, 1, 2, 3, 4]", () => {
      expect(solution(4)).toEqual([0, 1, 2, 3, 4]);
    });
    it("5 -> [0, 1, 2, 3, 4, 5]", () => {
      expect(solution(5)).toEqual([0, 1, 2, 3, 4, 5]);
    });
    it("6 -> [0, 1, 2, 3, 4, 5, 6]", () => {
      expect(solution(6)).toEqual([0, 1, 2, 3, 4, 5, 6]);
    });
    it("if max is integer should throw Error", () => {
      expect(() => solution(7.05)).toThrow(Error);
    });

    it("if max is less than zero should throw rangeError", () => {
      expect(() => solution(-5)).toThrow(RangeError);
    });
    it("if max is not number ", () => {
      expect(() => solution({})).toThrow(TypeError);
    });

    it("if max is an string ", () => {
      expect(() => solution("4")).toThrow(TypeError);
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 */
function secretSolution(a = 0) { if (typeof a !== "number") throw new TypeError("max is not a number"); if (!Number.isInteger(a)) throw new Error("max is not an integer"); if (a < 0) throw new RangeError("max is less than 0"); const b = []; for (let c = 0; c <= a; c++)b.push(c); return b; }
