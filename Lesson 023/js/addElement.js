const button = document.querySelector("button");
const elementsBody = document.querySelector("div");


button.addEventListener("click", () => { 
    const newElement = document.createElement("div");
    newElement.classList.add("rect");
    newElement.textContent = 'я новий елемент!';
    elementsBody.appendChild(newElement);
})