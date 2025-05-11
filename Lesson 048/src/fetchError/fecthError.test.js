const fetchError = require("./fetchError");


test('відхилена обіцянка з async/await', async () => {
  await expect(fetchError()).rejects.toThrow('щось пішло не так');
});