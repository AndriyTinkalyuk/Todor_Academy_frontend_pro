function fetchPromiseData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('обіцянка виконана');
    }, 2000);
  });
}

module.exports = fetchPromiseData;