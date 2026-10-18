const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("1st");
  });
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("2nd");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  reject("3rd");
});

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
}

// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

myPromiseRace([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
