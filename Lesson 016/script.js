// =====================1==================

const person = { 
    "name": "Andriy",
    "age": 21,
}

console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptor(person, "age"));
Object.defineProperty(person, "gender", {
    enumerable: true,
    writable: false,
})

console.log(Object.getOwnPropertyDescriptor(person, "gender"))

// =====================2==================

person.name = "Vasya"; // ._.
for (let item in person) { 
    console.log(item) // оскільки enumerable: true властивість gender відображається
} 

delete person.name;

// =====================3==================

const car = { 
    "brand": "BMW",
    'model': "f10",
    "year": 2012,
}

Object.preventExtensions(car);

car.color = 'black';

const copyCar = structuredClone(car);
Object.seal(copyCar);
delete copyCar.year; //false

// =====================4==================

const book =  {
    "title": "Metro 2033",
    "author": "I don't know",
}

Object.freeze(book);

book.title = "Stalker"; //false

// Object.defineProperty(book, "pages", {
//     value: 102,
// }) // Cannot define property pages, object is not extensible

delete book.author; //false

// =====================5==================

const product = {
    "name": "creatine",
    "owner": "shop",
    "species": { 
        "gymBeam" : "monohydrate",
        "Biotech" : "monohydrate"
    }
}

Object.preventExtensions(product); //забороняємо розширення об'єкту
console.log(Object.isExtensible(product)) // false
product.year = 2024 // не повинно спрацювати 

console.log(product);

Object.seal(product) // можемо змінювати, але не додавати чи видаляти властивості
console.log(Object.isSealed(product)) // true
product.owner = "anotherShop";

console.log(product);

Object.freeze(product); // не можемо змінювати, додавати або видаляти властивості.
console.log(Object.isFrozen(product)) // true
product.species.Biotech = 'example'; // проте ми можемо змінювати, додавати або видаляти властивості вложених об'єкти

Object.freeze(product.species);// тепер не зможем змінювати, додавати або видаляти


product.species.Biotech = 'Висновок: кожен обєкт потрібно заморожувати окремо...'; 

console.log(product);

// =====================6==================

// Представимо що в нас є конфіг, який не повинен змінюватися. ми його заморозимо

const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3,

};

Object.freeze(config);

console.log(config.apiUrl) //ми можемо получити дані та працювати з ними

config.apiUrl = "Adassgfdh" //не можемо змінити, оскільки обєкт заморожено

console.log(config.apiUrl) // все ще "https://api.example.com"

