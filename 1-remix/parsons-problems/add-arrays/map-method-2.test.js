const testMethodMap = require('./map-method-2');

describe('add sum of two arrays and throw errros of is not have same length', () => {
  it('throw error if not equal same length', () => {
    expect(() => testMethodMap.addArrays([1, 2, 4], [3, 5])).toThrow('Error');
  });

  it('throw error if not equal same length', () => {
    expect(testMethodMap.addArrays([1, 2], [3, 5])).toEqual([4, 7]);
  });
});
