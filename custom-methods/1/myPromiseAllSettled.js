const promise1 = new Promise((resolve, reject) => {
  resolve("1st");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  reject("3rd");
});

function myPromiseAllSettled(promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = { status: "fulfilled", value };
        })
        .catch((err) => {
          result[index] = { status: "rejected", reseon: err };
        })
        .finally(() => {
          completed++;

          if (completed === promises.length) {
            resolve(result);
          }
        });
    });
  });
}

// Promise.allSettled([promise1, promise2, promise3]).then((res) => {
//   console.log(res);
// });

myPromiseAllSettled([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});
