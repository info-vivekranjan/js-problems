const arr = [2, 5, [5, 9, 6, [99, 556, 889]], 657, [558, 558]];

const flatArr = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatArr(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
};

console.log(flatArr(arr));
