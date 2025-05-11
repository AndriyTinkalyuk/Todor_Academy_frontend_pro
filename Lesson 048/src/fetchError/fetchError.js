function fetchError() {
  return new Promise((_, reject) => {
    setTimeout(() => {
      reject(new Error('щось пішло не так'));
    }, 1000);
  });
}

module.exports = fetchError;