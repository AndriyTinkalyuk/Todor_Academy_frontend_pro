// ===============2=================

// sum(2,5); // не працює, бо hoisting не працює (підіймається, але доступно тільки після ініціалізації) на стрілкові та функціональні вирази

let sum = (num1, num2) => {
  var summ = 254 // потрібна тільки для прикладу // глобальна змінна в функції
  return num1 + num2}; //Arrow Function

makePerson() // працює завдяки hoisting

// =============== 1 + 3 =================

let age = 25; // глобальна видимість

function makePerson () {  //Function Declaration, фунції створені за допомогою function можна викликати до їх створення
  let age = 21; // локальна (блочна) видимість в межах {}
  let name = "Andrii";
  // console.log(summ); не доступна із-за блочної видимості
  console.log(sex); // undefined, оскільки викликано вище ініціалізації
  console.log(age); // виведе локальну змінну, оскільки вона найближче в scope
  // console.log(job); в батьківській функції ми не маємо доступу до дочірніх полів

  function greet() { 
    let age = 20;
    let job = "factory worker";
    console.log(name); // ми маємо досту в дочірній функції доступ до батьківських полів
    console.log(age);
  }
  greet()
}

console.log(age);


var sex = 'male';

console.log(sex); // тут все ок, змінна передалась після ініціалізації



