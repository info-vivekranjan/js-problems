const arr = [2, 5, 8, 9, 5, 2];

let obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

console.log(obj);

const repeatingArr = [];
const nonRepeatingArr = [];

for (key in obj) {
  if (obj[key] === 1) {
    nonRepeatingArr.push(Number(key));
  } else {
    repeatingArr.push(Number(key));
  }
}

console.log(repeatingArr, nonRepeatingArr);
