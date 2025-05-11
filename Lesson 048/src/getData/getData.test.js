const getData = require("./getData");

test('Дані получені за допомогою async/await',  async() => {
    const data = await getData();
    expect(typeof(data)).toBe("string");
});