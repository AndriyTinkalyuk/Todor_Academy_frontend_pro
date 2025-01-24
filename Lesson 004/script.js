// =================1================

for ( let i = 1; i <= 9 ; i++) { 
    console.log(`Табличка множення на ${i}`)
    for (let j = 1; j <= 9; j++) { 
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


// =================2================

let numbers = [1,2,3,4,5,6,7,8,9,88,100];
let sum = 0;

for(num of numbers) { 
    sum += num; 
}

console.log(sum);



// =================3================

let number = 31; // or '31'
console.log(parseInt(number) % 2 === 0 ? 'Число є парним' : 'число є не парним');