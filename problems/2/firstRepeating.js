const arr = [2, 5, 8, 9, 5, 2];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    console.log(arr[i]);
    return;
  } else {
    obj[arr[i]] = 1;
  }
}
