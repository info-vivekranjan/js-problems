async function fetchWithRetry(fn, retries = 3, delay = 1000) {
  try {
    await fn();
  } catch (error) {
    if (retries <= 0) {
      throw new Error("Retries exhausted");
    }

    console.log(`Function executed with retries - ${retries}`);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    return fetchWithRetry(fn, retries - 1, 1000);
  }
}

const fetchData = async () => {
  return await Promise.reject("Simulate reject");
};

fetchWithRetry(fetchData);
