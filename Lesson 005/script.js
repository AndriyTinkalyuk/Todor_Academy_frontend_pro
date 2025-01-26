// =================1================

let myName = 'Andriy';
let age = 21;
let isStudent = true;
let height = 1.7


console.log(`name: ${myName}, age: ${age}, student : ${isStudent ? 'yes': 'no'}, height : ${height} m.`)
// =================2================
let a = 1;
let a1 = "1";
let sumbol = Symbol("Enot");
let bollean = true;

console.log(`a == a1 : ${a == a1}`);
console.log(`a === a1 : ${a === a1}`);

console.log(`0 == null : ${0 == null}`);
console.log(`0 === null : ${0 === null}`);

console.log(`bollean == null : ${bollean == null}`);
console.log(`bollean === null : ${bollean === null}`);

console.log(`bollean == sumbol : ${bollean == sumbol}`);
console.log(`bollean === sumbol : ${bollean === sumbol}`);
// =================3================
console.log(`Мене звати ${name}, мій вік: ${age}`);
console.log(typeof(`Мене звати ${name}, мій вік: ${age}`));
// =================4================

let person = { 
    name: myName,
    age: age,
    isStudent: isStudent,
    height: height,
}

console.log(person);