function AnimalPrototype(name, voice)  { 
        this.name = name;
        this.voice = voice;
        return;
    }


    AnimalPrototype.prototype.sound = function() { 
        return this.voice;
    } 

const dog = new AnimalPrototype("dog", "i'm dog");
const cat = new AnimalPrototype("cat", "i'm cat");

console.log(dog, dog.sound());
console.log(dog.sound());


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

    
function PizzaOrder(customerEmail, products, status) { 
        this._orderId = createId(10);
        this.customerEmail = customerEmail;
        this.products = products;
        this.status = status;
        return this;
    }

    PizzaOrder.prototype.total = function() {
     return `Загальна сума: ${this.products.reduce((acc, item) => acc + item.price, 0)} грн`;
    }

    PizzaOrder.prototype.checkStatusOfDelivery = function() { 
        return "Статус: " +  this.status;
    }

    



const pizzaOrder1  = new PizzaOrder("example@gmail.com", [{ name: "hotdog", price: 70.99}, { name: "pizza", price: 99.99 }], "waiting...");
console.log(pizzaOrder1.total());
console.log(pizzaOrder1.checkStatusOfDelivery());
console.log(PizzaOrder.prototype.isPrototypeOf(pizzaOrder1))



const pizzaOrder2 = new PizzaOrder("example2@gmail.com", [{name: "pizza of main salads from hell (What?)", price: 575.99}, {name: 'pizza for you <3', price: 258}], "complete")
console.log(pizzaOrder2.total());
console.log(pizzaOrder2.checkStatusOfDelivery());
console.log(PizzaOrder.prototype.isPrototypeOf(pizzaOrder2))