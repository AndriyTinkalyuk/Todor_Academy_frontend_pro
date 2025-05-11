function fetchData(callback) {
  setTimeout(() => {
    callback('дані отримано');
  }, 1000);
}

module.exports = fetchData;