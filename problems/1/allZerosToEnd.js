const arr = [1, 0, 5, 8, 0, 7, 0, 0, 8, 6, 99, 5];

let zArr = [];
let nzArr = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 0) {
    zArr.push(arr[i]);
  } else {
    nzArr.push(arr[i]);
  }
}

let result = [...nzArr, ...zArr];
console.log(result);
