async function customAsyncRetry(func, retries = 3, delay = 2000) {
  try {
    await func();
  } catch (error) {
    if (retries <= 0) {
      throw new Error("Retries ended");
    }

    console.log(`Retries - ${retries}`, error);

    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, delay);
    });

    return customAsyncRetry(func, retries - 1, delay * 2);
  }
}

const demoRejectPromise = async () => {
  await Promise.reject("Rejected Promise");
};

customAsyncRetry(demoRejectPromise);
