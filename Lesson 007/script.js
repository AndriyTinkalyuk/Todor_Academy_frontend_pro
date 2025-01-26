// =================1================
let numbers = [];
numbers.push(1,2,3,4,5,6,7,8,9,10);
console.log(numbers);
// =================2================
let colors = ["червоний", "синій", "зелений", "жовтий", "чорний"];
console.log(colors.indexOf( "зелений"));

colors.splice(colors.indexOf("чорний"), 1); // can use .pop() in this example

console.log(colors);
// =================3================

let fruits = ["яблуко", "банан", "апельсин", "груша", "ківі"];

console.log(fruits.sort());
console.log(fruits.join(" , "));

let filterFruits = fruits.filter((el) => el.length > 5);
console.log(filterFruits);
let mapFruits = fruits.map(item => item.toUpperCase());
console.log(mapFruits);

reduseFruits = fruits.reduce((acc, element, index) => {
    acc += String(element);
    if(index < fruits.length - 1) {
    acc += '-'
}
    return acc;
}, '');

console.log(reduseFruits);