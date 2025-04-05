//Напишіть функцію-генератор, яка генерує послідовність натуральних чисел, починаючи з 1, і кожного разу збільшує число на 2.


function* NaturalNumbers() {
    let number = 1;  
    while(true) {
    yield number;  
     number += 2;
    }
}

const iteratorNaturalNumbers = NaturalNumbers();

// console.log(iterationNaturalNumbers.next().value);
// console.log(iterationNaturalNumbers.next().value);
// console.log(iterationNaturalNumbers.next().value);
// console.log(iterationNaturalNumbers.next().value);
// console.log(iterationNaturalNumbers.next().value);

//Створіть функцію-генератор, яка видає послідовність Фібоначчі. Перші два числа послідовності - 0 і 1, кожне наступне число дорівнює сумі двох попередніх.

function* fib() {
    let a = 0;
    let b = 1;
    let number;
    yield a;
    yield b;

    while(true) {
        number = a + b; 
        yield number;
        a = b;
        b = number;
    }
}


const iteratorFib = fib();

//console.log(iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value, iteratorFib.next().value);


//Напишіть функцію-генератор, яка приймає масив чисел як параметр та повертає кожне число з масиву, збільшене на 1.

function* increaseNumbers(array) { 
    if(!Array.isArray(array)) { 
        yield 'its not an array';
        return;
    }
    
   increaseArray =  array.map(n => n + 1);
   
   for (let number of increaseArray) { 
    yield number;
   }


   // or 
   // for (let number of array) { 
   //  yield number + 1;
   // }
}

const iteratorIncreaseNumbers = increaseNumbers([52,525,4,7,8,9,6,2,14,77,71,1,1,1,4,5,6,]);

// for (n of iteratorIncreaseNumbers) { 
//     console.log(n);
    
// }

// Створіть функцію-генератор, яка генерує послідовність простих чисел.

function* primeGenerator() { 
    let number = 2;
    while(true) { 

        if(isPrime(number)) {
            yield number++;
        }
    number++    
    }


   function isPrime(num){
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


let iteratorPrimeGen = primeGenerator();


// console.log(iteratorPrimeGen.next().value, iteratorPrimeGen.next().value, iteratorPrimeGen.next().value, iteratorPrimeGen.next().value);


//Напишіть програму, яка використовує функцію-генератор для генерації геометричної прогресії. Програма повинна приймати початкове значення, коефіцієнт прогресії та кількість членів у прогресії.


function* geometricProgression(start, coefficient, quantity) {
    let number = start;
    const numbers = [number];

    while (true) {
        yield number; 
        number *= coefficient;
        numbers.push(number);

        if(numbers.length > quantity) { 
            yield `max quantity`;
            return
        }
    }
}

const iteratorGeomtricProg = geometricProgression(2,8,5);

for( num of iteratorGeomtricProg) { 
    console.log(num);
    
}