Array.prototype.myMap = function (callback) {
  const result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

const value = [5, 2, 6, 3, 4, 1].myMap((item) => {
  return item * 2;
});

console.log(value);
