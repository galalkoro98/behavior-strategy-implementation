const addArraysTest = require('./map-method-1');

describe('sum of two arrays with the same length', () => {
  it('sum of add arrays', () => {
    // eslint-disable-next-line no-sequences
    let a1 = [1, 2];
    let a2 = [4, 5];
    expect(addArraysTest.addArrays(a1, a2)).toEqual(5, 7);
  });
});