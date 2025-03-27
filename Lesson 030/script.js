// 2.
// Створіть власний ітератор для перебору об'єкта, який містить різні типи даних (стрічки, числа, булеві значення тощо). Використовуйте цикл for .. of для перебору цього об'єкту.

let iteratorObj = {
    1 : "стрічка",
    2 : true,
    3 : 1234568,
    "a" : [1,1,1],
    "people" : {
        "name" : "Andriy",
    },

    [Symbol.iterator]() { 
        const raw = this;
        const keys = Object.keys(this);
        let index = 0;
        return {
             next () {

                return {
                    value: raw[keys[index++]],
                    done: index > keys.length,
                }

        }
    }
}
}

for (item of iteratorObj) { 
    console.log(item);  
}

// 4.
// Створіть масив різних типів даних (стрічки, числа, об'єкти тощо) і виведіть їх за допомогою циклу for .. of.

let myArray = ["🥝","crocodino bombolino", 123456, {"name": "crocodino", "last name": "bombolino"}, [1,1,1,1,1],];

for (let item of myArray) { 
    console.log(item); 
}

//5.
//Перепишіть будь-яку функцію, яка використовує цикл for для ітерування по масиву, використовуючи цикл for .. of.

// for (let i = 0;i < myArray.length; i++) {
// console.log(myArray[i]);
// }

// for (let item of myArray) { 
//     console.log(item); 
// }

//.
//Напишіть функцію, яка приймає на вхід будь-який ітерований об'єкт і виводить його значення за допомогою циклу while.


function logIterator(iteratorObject) { 
  let iterator = iteratorObject[Symbol.iterator]();
  let iteration = iterator.next();

  while(!iteration.done) {
    console.log(iteration.value);
    iteration = iterator.next();
  }
}

logIterator(iteratorObj);


//7.
//Створіть власний ітератор, який перебирає всі прості числа в заданому діапазоні. Виведіть перші 10 простих чисел.

class PrimeIterator{
    constructor(from, to) { 
        this.from = Number(from);
        this.to = Number(to);
    }

    [Symbol.iterator](){
        let currentValue = this.from;
        let end = this.to;
        let raw = this;
        return {
            next() {
                while(currentValue <= end) {
                    if(raw.#isPrime(currentValue)) {
                        return {
                            value: currentValue++,
                            done: false,
                        }
                    }
                    currentValue++
                }
                return {
                    value: undefined,
                    done: true,
                }
                }
            }
        }

        #isPrime(num){
        if(num === 2) { return true};
        if(num % 2 === 0) {return false};
        for (let i = num; i <= Math.sqrt(num); i++ ) { 
            if (num % i - 1 === 0) {
                return false;
            }
        } 

        return true;
        }
    
    }


  const somePrimeIterator = new PrimeIterator(45, 100);
  const primeList = [];
  for(number of somePrimeIterator) { 
    primeList.push(number)
    if (primeList.length === 10) { 
        break
    }
  }

  console.log(primeList);


 // 9.
//Дослідіть можливості розгортання ітерованих об'єктів за допомогою оператора розгортання (...). Спробуйте застосувати його до різних типів ітерованих об'єктів.

console.log(...somePrimeIterator)
console.log(...myArray)

const exapleObj = {
    "name": 123,
}

console.log(...exapleObj)