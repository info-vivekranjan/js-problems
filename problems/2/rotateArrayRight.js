const arr = [5, 4, 2, 8, 9];

const n = 7;

const n1 = n % arr.length;

const rotateArr = [...arr.slice(-2), ...arr.slice(0, arr.length - n1)];

console.log(rotateArr);
