const arr = [5, 4, 2, 8, 9];

const n = 7;

let nRight = n % arr.length;

let arrRight = arr.slice(-nRight);
let arrLeft = arr.slice(0, arr.length - nRight);

let result = [...arrRight, ...arrLeft];
console.log(result);
