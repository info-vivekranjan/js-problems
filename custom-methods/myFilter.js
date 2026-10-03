Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

let resArr = [2, 5, 8, 7, 6, 3].myFilter((item) => {
  return item > 3;
});
console.log(resArr);
