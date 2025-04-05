//Напишіть функцію combineArrays, яка приймає два масиви й повертає новий масив, що складається з елементів обох масивів, але з додаванням нового елементу в кінці.

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

function combineArrays(arr1, arr2, newElememt) { 
    array = [...arr1, ...arr2]; // arr1.concat(arr2);
    array.push(newElememt);
    return array;
}


const newArr = combineArrays(arr1, arr2, 7);

console.log(newArr); // [1, 2, 3, 4, 5, 6, 7]

//Завдання 2: Використання значень параметрів за замовчуванням та Rest параметрів

function greetPeople(greeting = "Hello", ...names) {
   return names.map( nam => `${greeting} ${nam}`);
  }
  
  const greetings = greetPeople("Hi", "Alice", "Bob", "Charlie");
  console.log(greetings); // ["Hi, Alice", "Hi, Bob", "Hi, Charlie"]
  
  const defaultGreetings = greetPeople(undefined, "Alice", "Bob");
  console.log(defaultGreetings); // ["Hello, Alice", "Hello, Bob"]

//Завдання 3: Деструктуризація об'єктів та масивів
//Напишіть функцію extractUserInfo, яка приймає об'єкт з інформацією про користувача і повертає рядок з ім'ям користувача, його віком і першою навичкою. Використовуйте деструктуризацію для отримання цих даних.

const user = {
    name: 'John Doe',
    age: 25,
    skills: ['JavaScript', 'React', 'Node.js']
  };
  
  function extractUserInfo(user) {
    const {name, age, skills: [skill]} = user;

    return `${name} is ${age} years old and knows ${skill}`
  }
  
  const userInfo = extractUserInfo(user);
  console.log(userInfo); // "John Doe is 25 years old and knows JavaScript."