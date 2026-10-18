const arr = [1, 0, 5, 8, 0, 7, 0, 0, 8, 6, 99, 5];

const allZerosToEnd = (arr) => {
  const zeroArr = [];
  const nonZeroArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroArr.push(arr[i]);
    } else {
      nonZeroArr.push(arr[i]);
    }
  }

  return [...nonZeroArr, ...zeroArr];
};

console.log(allZerosToEnd(arr));
