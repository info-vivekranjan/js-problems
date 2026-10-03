const arr = [22, 5, 2, 5, 80, 8, 6, 9];

const find2ndMax = (arr = []) => {
  let second = -Infinity;
  let largest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (largest < arr[i]) {
      second = largest;
      largest = arr[i];
    } else if (second < arr[i] && largest !== arr[i]) {
      second = arr[i];
    }
  }
  return second;
};

console.log(find2ndMax(arr));
