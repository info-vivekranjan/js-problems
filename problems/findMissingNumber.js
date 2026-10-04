const arr = [1, 2, 3, 4, 6, 7, 8];

const n = 8;

let sum1 = 0;
let sum2 = 0;

for (let i = 0; i < arr.length; i++) {
  sum1 = sum1 + arr[i];
}

for (let i = 1; i <= n; i++) {
  sum2 = sum2 + i;
}

let missingNo = sum2 - sum1;

console.log(missingNo);
