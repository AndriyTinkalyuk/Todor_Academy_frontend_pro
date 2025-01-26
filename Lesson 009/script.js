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