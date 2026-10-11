// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// // 3,3,3 --> Because var is function scoped and the loop will comples before setTimout get executed and then var i=3, so it prints 3 for all

// ----------

// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }

// // 0,1,2 -- As let is block scoped so for each block i will be diffrerent
// // we can create a clouser also using iife function then with var also new scope will be created per iteration

// for (var i = 0; i < 3; i++) {
//   (function (j) {
//     setTimeout(() => console.log(j), 1000);
//   })(i);
// }

// ---------------

// console.log(a);

// var a = 10;

// console.log(a);

// // undefined, 10 -- Hoisting

// ----------

// console.log(a);

// let a = 10;

// // Reference error -- As it will go to TDZ

// -------

// foo();

// var foo = function () {
//   console.log("Hello");
// };

// // Error: foo is not a function

// ----------

// function outer() {
//   let count = 0;

//   return function () {
//     count++;
//     console.log(count);
//   };
// }

// const counter = outer();

// counter();
// counter();
// counter();

// // 1,2,3 --> because count value will be chnaged with post-increment and will be stored and then will be used by ineer function as it will use varibales from Lexical scope

// ------------------

// function counter() {
//   let count = 0;

//   return () => ++count;
// }

// const a = counter();
// const b = counter();

// console.log(a());
// console.log(a());
// console.log(b());
// console.log(a());

// // 1,2,1,3 --> for b differnt scope will be created, as this will be a differnt clouser and Lexical scope will chnage

// ------------------

// console.log(1);

// setTimeout(() => console.log(2), 0);

// Promise.resolve().then(() => console.log(3));

// console.log(4);

// // 1, 4, 3, 2 --> Microtask, MacroTask and event loop concept

// ------

// console.log(1);

// async function test() {
//   console.log(2);

//   await Promise.resolve();

//   console.log(3);
// }

// test();

// console.log(4);

// // 1, 2, 4, 3 --> Before await it will be simple pending Promise, so values aftre microtask will executed later --> Event loop

// -----------

// Promise.resolve(1)
//   .then((value) => {
//     console.log(value);
//     return value + 1;
//   })
//   .then((value) => {
//     console.log(value);
//   });

// console.log(3);

// // 3, 1, 2

// ---------------

// setTimeout(() => console.log("timeout"), 0);

// Promise.resolve().then(() => console.log("promise"));

// console.log("sync");

// // sync --> promise --> timeout

// ---------------------

// const obj1 = {
//   name: "Vivek",
// };

// const obj2 = obj1;

// obj2.name = "Rahul";

// console.log(obj1.name);

// // Rahul --> As the refrence will be same for obj2, obj1

// ----------------------------

// const obj1 = {
//   user: {
//     name: "Vivek",
//   },
// };

// const obj2 = { ...obj1 };

// obj2.user.name = "Rahul";

// console.log(obj1.user.name);

// // Again Rahul as it only copys parent layer intenally for chaild the refrence will be same  --> Shallow Copy

// -----------------------------------

// console.log(1 + "2"); // "12"
// console.log("5" - 2); // 3
// console.log("5" + 2); // "52"
// console.log(true + 1); // 2

// // With + --> String will concat with other operator it will acts as number

// ------------------

// console.log(0 == false); // true
// console.log(0 === false); // false

// console.log("" == false); // true
// console.log("" === false); // false

// console.log(null == undefined); // true
// console.log(null === undefined); // false

// console.log(typeof null); // object -- because of a bug
// console.log(typeof undefined); // undefined
// console.log(typeof []); // object
// console.log(Array.isArray([])); // true

// console.log(NaN === NaN); // false
// console.log(Number.isNaN(NaN));

// ------------------

// const a = [1, 2, 3];
// const b = a;

// b.push(4);

// console.log(a); // [1,2,3,4]
// console.log(b); // same as the refrence is same

// --------------

// ========================================================================================
console.log("========CUSTOM METHODS PRACTICE START=============");
/*
function debounce(fn, delay = 500) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function debouncedData(args) {
  console.log("Debounced executed", args);
}

const debouncedSearch = debounce(debouncedData, 1000);

debouncedSearch(1);
debouncedSearch(2);
debouncedSearch(3);
*/
/*
function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= delay) {
      fn.apply(this, args);
      lastTime = now;
    }
  };
}

const throttleData = (arg) => {
  console.log(`Throttle Executed - ${new Date().toLocaleTimeString()}`, arg);
};

const throttleSearch = throttle(throttleData, 3000);

setInterval(() => {
  throttleSearch("Hello");
}, 500);
*/

/*
Array.prototype.myMap = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(callback(this[i], i, this));
    }
  }

  return result;
};

const mappedVal = [5, 3, 4, 5, 6, 8].myMap((item) => {
  return item * 2;
});

console.log(mappedVal);
*/
/*
Array.prototype.myFilter = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }

  return result;
};

const filteredVal = [5, 3, 4, 5, 6, 8].myFilter((item) => {
  return item > 4;
});

console.log(filteredVal);
*/

/*
const fetchWithRetry = async (fn, retries = 3, delay = 2000) => {
  try {
    await fn();
  } catch (error) {
    if (retries <= 0) {
      throw new Error("Retries Ended");
    }

    console.log(`Retries - ${retries}`, error);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    return fetchWithRetry(fn, retries - 1, 1000);
  }
};

const mockFetch = async () => {
  await Promise.reject("Checking retries");
};

fetchWithRetry(mockFetch);
*/

/*
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

// Promise.all([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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

*/

/*
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

// Promise.allSettled([promise1, promise2, promise3]).then((res) => {
//   console.log(res);
// });

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
          result[index] = { staus: "rejected", reason: err };
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

myPromiseAllSettled([promise1, promise2, promise3]).then((res) => {
  console.log(res);
});

*/
/*
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

// Promise.race([promise1, promise2, promise3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
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

myPromiseRace([promise1, promise2, promise3])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
*/

console.log("========CUSTOM METHODS PRACTICE END=============");

console.log("==========OUTPUT BASED QUESTION==========");
