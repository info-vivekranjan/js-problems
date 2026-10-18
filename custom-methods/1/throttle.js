function throttle(fn, delay) {
  let lastTime = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= delay) {
      fn.apply(this, args); // 'this' will be used when an Object is used to execute this function
      lastTime = now;
    }
  };
}

const throttledData = (args) => {
  console.log(
    `Function Executed - ${args} - ${new Date().toLocaleTimeString()}`,
  );
};

const throttledSearch = throttle(throttledData, 3000);

setInterval(() => {
  throttledSearch("Search..");
}, 500);
