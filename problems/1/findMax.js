const arr = [22, 5, 2, 5, 80, 8, 6, 9];

const findMax = (arr = []) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

console.log(findMax(arr));
