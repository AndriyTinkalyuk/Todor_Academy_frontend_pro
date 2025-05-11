async function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('дані отримано через async/await');
    }, 1500);
  });
}

module.exports = getData;