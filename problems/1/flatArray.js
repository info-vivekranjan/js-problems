let arr = [2, 5, [5, 9, 6, [99, 556, 889]], 657, [558, 558]];

function flatArray(arr = []) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result.push(...flatArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

console.log(flatArray(arr));
