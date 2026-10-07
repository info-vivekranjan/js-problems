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
console.log("OUTPUT BASED QUESTION");
