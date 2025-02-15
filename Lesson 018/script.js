class Person {

    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    greet() { 
        return `привіт! Я ${this.name}`;
       }
}

const person1 = new Person("Andriy", 19, "male");
const person2 = new Person("Roman", 16, "male");
console.log(person1.greet());
console.log(person2.greet());

class Student extends Person {
    constructor(name, age, gender, studentId ) { 
        super(name, age, gender);
        this.studentId  = studentId; 
    }

    greet() { 
        return `привіт! Я ${this.name}. Мій студ. ід: ${this.studentId}`;
    }
}

const student1 = new Student("Andriy", 19, "male", 1);

console.log(student1.greet());

class Shape {  //уявлення немаю яка це фігура і які параметри задавати, впринципі це тут не має значення

    
    calculateArea() { 
        return "площа фігури.";
    }
}


class Circle extends Shape { 
    constructor(radius) { 
        super()
        this.radius = radius;
    }

    calculateArea() { 
        return `"Площа кола: " ${parseFloat(Math.PI * Math.pow(this.radius, 2)).toFixed(2)}`;
    }
}

const circle1 = new Circle(25);
console.log(circle1.calculateArea());


class Library { 
    static #instance = null;
    constructor(name, address) { 
        if (Library.#instance) {
            return Library.#instance;
        }
        this.name = name;
        this._address = address;
        this._books = [];
        Library.#instance = this;
    }

    set address(address) { 
        this._address = address;
    }

    get address() { 
        if(typeof this._address === "string") {
            return this._address;
        }


        if (typeof this._address === "object") { 
            let address = "";
            for(let key in this._address) { 
                address += `${key}: ${this._address[key]} \n`;
            }
            return address;
        }

    }

    get books() { 
        return this._books;
    }

    addBook(book){
        this._books.push(book);
    }
    
    details() { 
        console.log(`Library: ${this.name} \n${this.address}`);
    }

    listBook() { 
        if(this.books.length > 0) { 
            console.log(`Книги бібліотеки ${this.name}:`)
            for(let book of this.books){
                console.group(`Книга ${book.name}`);
                for(let key in book){                  
                    console.log(`${key}: ${book[key]} \n`);
                }
                console.groupEnd();
            }
        } else {
        console.log(`Бібліотека ${this.name} немає книг.`)
        }
    }

    deleteBook(name) {
        let bookIndex = this.books.findIndex(book => book.name === name);
        if(bookIndex !== -1) {
        this.books.splice(bookIndex, 1);
        console.log(`книга ${name} успішно видалена.`)
    } else { 
        console.log("Книгу з такою назвою не знайдено.");
    }
    }
}


class Book { 

    constructor(name, author, year) { 
        this.name = name;
        this.author = author;
        this.year = year;
    }
}


const myLibrary = new Library("MyLibrary", { city: "If", street: "street", house: 45,});

myLibrary.details();
myLibrary.addBook(new Book("book1", "author1", 2008)); //приклад агрегації
myLibrary.addBook(new Book("book2", "author2", 2011));
myLibrary.addBook(new Book("Fifty Shades of Grey", "EL James", 2015));
console.log(myLibrary.books);
myLibrary.listBook();

myLibrary.deleteBook("book2");
myLibrary.listBook();



class Cafe {
    static #instance = null
    constructor(name) { 
        if (Cafe.#instance){return Cafe.#instance}; 
            this.name = name;
            this.menu = new Menu(); // приклад композиції
            this.barista = new Barista('Sofia', 19, 24455632, "pro", this.menu); // приклад композиції
    }
}


class Menu { 
    constructor(){ 
        this.items = [];
    }

    addDrink(drink) { 
        this.items.push(drink)
    }

    getDrinks(){
        return this.items;
    }
}

class Worker { 
    constructor(name, age, passport) {
        this.name = name;
        this.age = age;
        this.passport = passport; 
    }

    greet() { 
        return `Hi! My name ${this.name}`;
    }
}


class Barista extends Worker { 
    constructor(name, age, passport, level, menu) { 
        super(name, age, passport);
        this.level = level;
        this.menu = menu;
    }

    greet() { 
        return `Hi! My name ${this.name}. I am ${this.level} barista!`;
    }

    makeDrink(drink){ 
        if (this.menu.getDrinks().includes(drink)) {
        return `making ${drink}...`;
        }
        return `We don't have this drink in our menu.`
    }
}


const myCafe = new Cafe('Racoon coffe');

myCafe.menu.addDrink('espresso');

console.log(myCafe.menu.getDrinks());

console.log(myCafe.barista.greet());

console.log(myCafe.barista.makeDrink('espresso'));
console.log(myCafe.barista.makeDrink('Late'));