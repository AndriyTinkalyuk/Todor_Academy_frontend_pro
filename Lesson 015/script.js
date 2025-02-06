
let userEmail = "email"; 
let userName = "name";
const user = { 
    [userName]: "user123",
    [userEmail]: "user@example.com",
}

const calculator = { 
    add: (a, b) => typeof(a) === 'number' && typeof(b) === 'number' ? a + b : 'Введіть коректні числа',
    sub: (a, b) => typeof(a) === 'number' && typeof(b) === 'number' ? a - b : 'Введіть коректні числа',
    mult: (a, b) => typeof(a) === 'number' && typeof(b) === 'number' ? a * b : 'Введіть коректні числа',
    div: (a, b) => typeof(a) === 'number' && typeof(b) === 'number' ? a / b : 'Введіть коректні числа',
}

console.log(calculator.add(6));



const circle = { 
    "radius" : 0,

    getArea() { return Math.PI * Math.pow( this.radius,2)},

    setRadius(newRadius) {typeof(newRadius) === "number" ? this.radius = newRadius : 'Введіть коректне число'},
}

circle.setRadius(25);
console.log(circle.getArea());
circle.setRadius(100);
console.log(circle.getArea());

const car = { 
    "brand": "BMW",
    "model": "M3 Competition (G80)",
    
    description() { 
      return `Опис машини:
    Бренд: ${this.brand}
    Модель: ${this.model}`  
    }
}


console.log(car.description())


const product = { 
    "name": "Креатин Моногідрат",
    "price": 1000,

    applyDiscount(discount) {
         this.price -= (this.price * discount) / 100;
        return `
        Знижка даного товару : ${discount} %.
        Ціна становить: ${this.price}.
        `
    }
}

console.log(product.applyDiscount(5));




let users = [];

function createAccount(email, password) { 

    let person = { 
        _email: email,
        _password: password,



        get email() { 
            return this._email;
        },

        get password(){
            return this._password;
        },

        set email(newEmail) {
            this._email = newEmail;
            return 'Ел. пошту успішно змінено.'
        },

        set password(newPassword) { 
           if (this._password === newPassword) { return 'Новий пароль не може бути індентичним наявному'}
            this._password = newPassword;
            return 'Пароль успішно змінено.';
        }, 
        
        details() {
            return `
    Дані облікового запису:
    email:${this.email}
    password: ${this.password}
         `
        },

    }
    if(checkEmail(email)) { 
        return 'Даний email уже зареєстровано.'
    }
    users.push(person);
    return 'користувача успішно зареєстровано.'
}


function checkEmail(email) { 
    return users.some(user => user.email === email);
}

function findUser(email) {
    if (checkEmail(email)) { 
        return users.find(user => user.email === email);
    }
      return 'Даного користувача не існує.'
}

function changeEmail(email, password, newEmail) { 
    let currentUser= findUser(email);
    if (typeof(currentUser) === "string") { 
        return currentUser;
    }

    return currentUser.password === password ? currentUser.email = newEmail : 'Ел. пошта та пароль не збігаються.';  
}

function changePassword(email, password, newPassword) {
    let currentUser= findUser(email);
    if (typeof(currentUser) === "string") { 
        return currentUser;
    }

    return currentUser.password === password ? currentUser.password = newPassword : 'Ел. пошта та пароль не збігаються.'; 

}

console.group("Додаткове завдання:")

console.log(createAccount(1,1));
console.log(users[0].details());

console.log(createAccount(1,1));

console.log(changeEmail(1,1,11)) 

console.log(changePassword(11,1,2))

console.log(users[0].details());

console.groupEnd();