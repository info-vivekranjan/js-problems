const arr = [2, 5, 8, 9, 5, 2];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

const repeatingArr = [];
const nonRepeatingArr = [];

for (key in obj) {
  if (obj[key] > 1) {
    repeatingArr.push(Number(key));
  } else {
    nonRepeatingArr.push(Number(key));
  }
}

console.log(repeatingArr, nonRepeatingArr);
