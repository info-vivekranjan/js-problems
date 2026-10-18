function debounce(func, delay = 500) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debouncedData = (arg) => {
  console.log("Debounced data ==", arg);
};

const debouneSearch = debounce(debouncedData, 1000);

debouneSearch(1);
debouneSearch(2);
debouneSearch(3);
