Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

let arrRes = [2, 5, 7, 5, 6].myMap((item) => {
  return item * 2;
});
console.log(arrRes);
