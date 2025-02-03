class Maybe {
    constructor(x) {
        this.$value = x;
    }

    static of(x) { 
        return new Maybe(x);
    }

    map (f) {
        return this.isNothing ? this : Maybe.of(f(this.$value));
    }

    get isNothing() {
        return this.$value === null || this.$value === undefined;
    }

    chain(f) {
        return this.map(f).join();
    }

    join() { 
        return this.$value;
    }
}



let text = 'Корови класно літають. Корови класнію'
let numbers = [4,5,6,7,8,932,42,21,454,6,57];

let pairNumbers = (arr) => { 
 return arr.filter(num => num % 2 === 0);
}

let sumNumbers = (arr) => { 
    return arr.reduce((acc, num) => acc += num , 0);
}

let replaceWords = (input, target, replacement) => { 
    return input.replace(new RegExp(target, 'gi'), replacement); // or /target/gi де g - знайде всі target, i - ігнор регістру 
}


console.log(Maybe.of(numbers).chain(pairNumbers));

console.log(Maybe.of(numbers).chain(sumNumbers));

console.log(
    Maybe.of(text)
    .chain(value => replaceWords(value, "корови", "пташки"))
);


function curry(f) { 
    return function(a) {
      return function(b) {
        return f(a, b);
      };
    };
  }
  

  function sum(a, b) {
    return a + b;
  }
  
  let curriedSum = curry(sum);
  
  console.log(curriedSum(1)(2)); 
 


  let accumulator = (accumulator) => { 
    return (num) => { 
        accumulator += num;
        return accumulator;
    }
  }

  let Myaccumumlator = accumulator(0);

  console.log(Myaccumumlator(2));
  console.log(Myaccumumlator(25));
  console.log(Myaccumumlator(25));