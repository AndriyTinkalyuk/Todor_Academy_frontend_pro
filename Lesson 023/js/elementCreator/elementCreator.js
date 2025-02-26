import Element from "./elementClass.js";

const previewBody = document.querySelector('#element');
const elementsBody = document.querySelector(".elements");
const colorGroup = document.querySelector(".color-group");
const shadowGroup = document.querySelector('.shadow_group');

const heightInput = document.querySelector('#height');
const widthInput = document.querySelector('#width');
const borderRadiusInput = document.querySelector('#radius');
const shadowInputs = shadowGroup.querySelectorAll("input");

const addShadowButton = document.querySelector("#addShadow");
const removeShadowButton = document.querySelector("#removeShadow");
const addElementButton = document.querySelector('.addElement');

const previewElement = new Element(100, 100, 0," rgba(1, 1, 1, 1)", 'none');
previewElement.addElement(previewBody); 

heightInput.addEventListener('input', () => {
    previewElement.height = heightInput.value;

    previewElement.updateElement();
})

widthInput.addEventListener('input', () => {
    previewElement.width = widthInput.value;

    previewElement.updateElement();
})

borderRadiusInput.addEventListener('input', () => {
    previewElement.borderRadius = borderRadiusInput.value;

    previewElement.updateElement();
})

colorGroup.addEventListener("input", (event) => { 
    if (!event.target.classList.contains("color-input")) {
        return;
    }
    const red = document.querySelector(".creator_red").value;
    const green = document.querySelector(".creator_green").value;
    const blue = document.querySelector(".creator_blue").value;
    const opacity = document.querySelector(".creator_opacity").value;


    previewElement.newBackgroundColor(red, green, blue, opacity);
    previewElement.updateElement();
});

addShadowButton.addEventListener("click", () => {
    shadowInputs.forEach((input) => input.disabled = false);

    previewElement.newShadow(5,5,5);
    previewElement.updateElement();
})

removeShadowButton.addEventListener("click", () => {
    shadowInputs.forEach((input) => input.disabled = true);
    previewElement.boxshadow = "none";
    previewElement.updateElement();
})

shadowGroup.addEventListener("input", (event) => { 
    if(!event.target.classList.contains("creator-shadow")) { 
        return;
    }
    console.log(1);
    

    const xShadow = document.querySelector("#shadow_vert").value;
    const yShadow = document.querySelector("#shadow_hor").value;
    const blurShadow = document.querySelector("#shadow_blur").value;


    previewElement.newShadow(xShadow, yShadow, blurShadow);
    previewElement.updateElement();
})


addElementButton.addEventListener('click', () => { 
    previewElement.clone().addElement(elementsBody);
})