const addArraysTest = require('./map-method-1');

describe('sum of two arrays with the same length', () => {
  it('sum of add arrays', () => {
    // eslint-disable-next-line no-sequences

    expect(addArraysTest.addArrays([1, 2], [4, 5])).toEqual([5, 7]);
  });
});