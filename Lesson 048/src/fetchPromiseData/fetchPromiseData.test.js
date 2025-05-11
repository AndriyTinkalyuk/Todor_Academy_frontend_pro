const fetchPromiseData = require("./fetchPromiseData");


    test('асихронний код resolved з використанням проміс', () => {
     return expect(fetchPromiseData()).resolves.toBe('обіцянка виконана');
});
