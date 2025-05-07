const userName:string = "Andrii";
const age:number = 21;
const isStudent:boolean = true;

function greet(name:string): string{
    return `Hello, ${name}`;
}

console.log(greet(userName));


// Завдання 2 - Типізація масивів та кортежів

const numbers: number[] = [1,2,3,4,5];
const strings: string[] = ["apple", "banana", "cherry"];

const person: [number, string] = [25, "John"];


// Завдання 3 - Створення інтерфейсу для об'єктів

interface Person {
    name: string,
    age:number,
    isStudent:boolean
 }

const user: Person = {
    name: "Andrii",
    age: 21,
    isStudent: true
}


console.log(user);

// Завдання 4 - Типізація функцій та generics

function addNumbers(a:number,b:number): number {
    return a + b;
}

function identity<T>(arg:T): T {
    return arg;
}

let output = identity<string>("Hello World");
let output2 = identity<number>(42);


// Завдання 5 - Створення Enum та використання Union типів

enum Role {
     "Admin",
     "User",
    "Guest"
}

let currentRole: Role | "SuperAdmin" = Role.Admin;

console.log(currentRole);
