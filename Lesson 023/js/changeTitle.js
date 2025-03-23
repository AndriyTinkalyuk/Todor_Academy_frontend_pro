const title = document.querySelector("h1");

const titles = ["hello", "some text", "hello, my friend", "or, u don't my friend?"];
let index = 0;
document.querySelector("button").addEventListener("click", () => {
    title.textContent = titles[index];
    index = (index + 1) % titles.length;
})