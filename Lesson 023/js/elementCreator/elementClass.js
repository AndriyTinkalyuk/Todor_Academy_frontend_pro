import { generateId } from "./createId.js";

export default class Element {
    constructor(height, width, borderRadius, backgroundColor, boxshadow) {
        this._height = height; 
        this._width = width;
        this._borderRadius = borderRadius;
        this.backgroundColor = backgroundColor; 
        this.boxshadow = boxshadow; 
        this.element = null;
        this.id = generateId();
    }

    get height() {
        return this._height;
    }

    set height(newHeight) {
        if (newHeight < 1) {
            alert("Висота не може бути меншою одиниці.");
            this._height = 1;
        } else {
            this._height = newHeight;
        }
    }

    get width() {
        return this._width;
    }

    set width(newWidth) {
        if (newWidth < 1) {
            alert("Ширина не може бути меншою одиниці.");
            this._width = 1;
        } else {
            this._width = newWidth;
        }
    }

    get borderRadius() {
        return this._borderRadius;
    }

    set borderRadius(newBorderRadius) {
        if (0 > newBorderRadius || newBorderRadius > 100) {
            alert("Радіус не може бути меншим одиниці або більше 100.");
            this._borderRadius = 1;
        } else {
            this._borderRadius = newBorderRadius;
        }
    }

    newBackgroundColor(red, green, blue, opacity) {
        if (red < 0 || red > 255 || green < 0 || green > 255 || blue < 0 || blue > 255) {
            alert("Кольори повинні бути в діапазоні від 0 до 255!");
        } else if (0 > opacity || opacity > 1) {
            alert("Прозорість повинна бути в діапазоні від 0 до 1!");
        } else {
            this.backgroundColor = `rgba(${red}, ${green}, ${blue}, ${opacity})`;
        }
    }

    newShadow(x, y, blurRadius) {
        this.boxshadow = `${x}px ${y}px ${blurRadius}px black`; 
    }

    #applyStyles() {
        this.element.style.height = `${this.height}px`;
        this.element.style.width = `${this.width}px`;
        this.element.style.borderRadius = `${this.borderRadius}%`;
        this.element.style.backgroundColor = this.backgroundColor;
        this.element.style.boxShadow = this.boxshadow;
    }

    addElement(parentElement) {
        this.element = document.createElement("div");
        this.element.setAttribute("id", this.id);
        this.#applyStyles();
        parentElement.appendChild(this.element);
    }

    updateElement() {
        if (this.element) {
            this.#applyStyles();
        } else {
            console.warn("Елемент не знайдено на сторінці!");
        }
    }

    clone() {
        return new Element(
            this.height, 
            this.width, 
            this.borderRadius, 
            this.backgroundColor, 
            this.boxshadow
        );
    }
}
