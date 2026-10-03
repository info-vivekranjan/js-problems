const promise1 = new Promise((resolve, reject) => {
  resolve("1st");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  resolve("3rd");
});

function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = value;
          completed++;

          if (completed === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

myPromiseAll([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
