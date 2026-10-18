function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args); // 'this' will be used when an Object is used to execute this function
    }, delay);
  };
}

function debounceData(arg) {
  console.log("Function Executed", arg);
}

const debounceSearch = debounce(debounceData, 1000);

debounceSearch(1);
debounceSearch(2);
debounceSearch(3);
debounceSearch(4);
