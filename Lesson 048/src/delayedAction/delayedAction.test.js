const delayedAction = require("./delayedAction");

test('керування часом у Jest', () => {
  jest.useFakeTimers();   const callback = jest.fn(); 

  delayedAction(callback);

  expect(callback).not.toHaveBeenCalled();

  jest.advanceTimersByTime(3000);

  expect(callback).toHaveBeenCalledWith('таймер завершився');
});