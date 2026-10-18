const arr = [22, 5, 2, 33, 5, 80, 8, 6, 9];

/*
const findMax = () => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return max;
};

console.log(findMax());
*/
const secondMax = () => {
  let largest = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      second = largest;
      largest = arr[i];
    } else if (arr[i] > second && largest !== arr[i]) {
      second = arr[i];
    }
  }

  return second;
};

console.log(secondMax());
