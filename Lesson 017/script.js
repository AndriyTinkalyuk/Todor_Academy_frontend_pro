function AnimalPrototype(name)  { 
        this.name = name;
        return;
    }


    AnimalPrototype.prototype.sound = function() { 
        return `some voice of animal`;
    } 


const dog = new AnimalPrototype("dog");
dog.sound = function() { 
    return `sound of dog`;
}

const cat = new AnimalPrototype("cat");
cat.sound = function() { 
    return `sound of cat`;
}


console.log(dog, dog.sound());
console.log(cat, cat.sound());


let createId = (idLength) => { 
      const characters = '0123456789';
      let id = '';
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
     return `Загальна сума: ${this.products.reduce((acc, item) => {
        let optionsPrice = 0;
        if(item.options && item.options.length > 0) { 
         optionsPrice = item.options.reduce( (acc, option) => acc + option.price, 0);
        }
        return acc + item.price + optionsPrice;
        
     }, 0).toFixed(2)} грн`;
    }

    PizzaOrder.prototype.checkStatusOfDelivery = function() { 
        return `Статус: ${this.status}`;
    }

    



const pizzaOrder1  = new PizzaOrder("example@gmail.com", [{productId: 1, name: "hotdog", price: 70.99, options: [{name: "Extra Cheese", price: 5.99}]}, {productId: 2, name: "pizza", price: 99.99,  options: [{name: "Extra Cheese", price: 5.99}, { name: "something", price: 8.22}]}], "waiting...");
console.log(pizzaOrder1.total());
console.log(pizzaOrder1.checkStatusOfDelivery());
console.log(PizzaOrder.prototype.isPrototypeOf(pizzaOrder1))



const pizzaOrder2 = new PizzaOrder("example2@gmail.com", [{productId: 3, name: "pizza of main salads from hell (What?)", price: 575.99,  options: [{name: "Cheese", price: 3.99}]}, {productId: 4, name: 'pizza for you <3', price: 258,  options: [{name: "Extra Cheese", price: 5.99}, { name: "something", price: 8.22}]}], "complete")
console.log(pizzaOrder2.total());
console.log(pizzaOrder2.checkStatusOfDelivery());
console.log(PizzaOrder.prototype.isPrototypeOf(pizzaOrder2))