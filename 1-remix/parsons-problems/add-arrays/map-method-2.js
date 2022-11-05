/* https://www.codewars.com/kata/reviews/58677f75395d91ce1d000576/groups/607972557b9a3d0001e17286 */

exports.addArrays = function (arr1, arr2) {
  // eslint-disable-next-line no-throw-literal
  if (arr1.length !== arr2.length) {
    // eslint-disable-next-line no-throw-literal
    throw 'Error';
  }

  const sumArr = arr1.map((_item, i) => arr1[i] + arr2[i]);
  return sumArr;
};

// console.log(addArrays([1, 2, 4], [3, 5]));
