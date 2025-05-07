"use strict";
const userName = "Andrii";
const age = 21;
const isStudent = true;
function greet(name) {
    return `Hello, ${name}`;
}
console.log(greet(userName));
// Завдання 2 - Типізація масивів та кортежів
const numbers = [1, 2, 3, 4, 5];
const strings = ["apple", "banana", "cherry"];
const person = [25, "John"];
const user = {
    name: "Andrii",
    age: 21,
    isStudent: true
};
console.log(user);
// Завдання 4 - Типізація функцій та generics
function addNumbers(a, b) {
    return a + b;
}
function identity(arg) {
    return arg;
}
let output = identity("Hello World");
let output2 = identity(42);
// Завдання 5 - Створення Enum та використання Union типів
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
let currentRole = Role["Admin"];
console.log(currentRole);
