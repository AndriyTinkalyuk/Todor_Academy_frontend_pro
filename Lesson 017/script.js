const Animal = { 
    constructor(name, voice){ 
        this.name = name;
        this.voice = voice;
        return this;
    },

    sound() { 
        return `${this.name} каже ${this.voice}`;
    }
}


const dog = Object.create(Animal).constructor("dog", "gaf-gaf");
const cat = Object.create(Animal).constructor("cat", "мяу-мяу");


let createId = (idLength) => { 
      const characters = '0123456789';
      id = '';
      let length = idLength || 1;
      let counter = 0;
      
      while(counter < length) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
        counter++;
      }
      return id;
    }




const PizzaOrder = { 
    constructor (customerEmail, products, status) { 
        this._orderId = createId(10);
        this.customerEmail = customerEmail;
        this.products = products;
        this.status = status;
        return this;
    },

    total() {
     return 'Загальна сума: ' + this.products.reduce((acc, item) => acc += item.price, 0) + ' грн';
    },

    checkStatusOfDelivery() { 
        return "Статус: " +  this.status;
    },

    get id() { 
        return 'Ід замовлення: ' + this._orderId;
    }
}


const pizzaOrder1  = Object.create(PizzaOrder).constructor("example@gmail.com", [{ name: "hotdog", price: 70.99}, { name: "pizza", price: 99.99 }], "waiting...");
console.log(pizzaOrder1.total());
console.log(pizzaOrder1.checkStatusOfDelivery());
console.log(pizzaOrder1.id);

const pizzaOrder2 = Object.create(PizzaOrder).constructor("example2@gmail.com", [{name: "pizza of main salads from hell (What?)", price: 575.99}, {name: 'pizza for you <3', price: 258}], "complete")