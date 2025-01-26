function calculateArea(width, height) {
  return  (isNaN(width) || isNaN(height)) ?  "Ширина та висота повинні бути числами" :  height * width;
} 

console.log(calculateArea("vrvr", 6));
console.log(calculateArea("28", 6));
console.log(calculateArea(5, 6));


function printMessage(message) { 
   return message;
}

function sendMessage(message, printMessage) {
   return printMessage(message);
}

console.log(sendMessage("привітики!", printMessage));

let numToSquare = (num) => {return num * num};

console.log(numToSquare(5));


let isNumber  = (number) =>  { 
if (!isNaN(number) && typeof number === "number") { 
return "Аргумент є числом";
}
return "Аргумент не є числом";
}

console.log(isNumber(66));
console.log(isNumber(null));
console.log(isNumber(undefined));
console.log(isNumber("55"));