const title = document.querySelector("h1");

document.querySelector("button").addEventListener("click", () => {
    title.textContent = "hello!"; // title.innerText = "hello";
})