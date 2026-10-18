function throttle(func, delay) {
  let lastTime = 0;

  return function (...args) {
    let now = Date.now();

    if (now - lastTime >= delay) {
      func.apply(this, args);
      lastTime = now;
    }
  };
}

const throttledData = (arg) => {
  console.log(`Throttled data - ${new Date().toLocaleTimeString()}`, arg);
};

const throttledSearch = throttle(throttledData, 3000);

setInterval(() => {
  throttledSearch("throttleSearch");
}, 500);
