function delayedAction(callback) {
  setTimeout(() => {
    callback('таймер завершився');
  }, 3000);
}

module.exports = delayedAction;