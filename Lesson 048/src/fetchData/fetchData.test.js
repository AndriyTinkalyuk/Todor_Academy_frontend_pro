const fetchData =  require("./fetchData");

test('асинхронний код з використанням done', done => {
    fetchData(data => {
    try {
      expect(data).toBe('дані отримано');
      done(); // викликаємо done після перевірки
    } catch (error) {
      done(error); // передаємо помилку, якщо тест провалився
    }
  });
});