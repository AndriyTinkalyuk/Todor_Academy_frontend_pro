// =================1================
console.log("=================1================");

console.log(true + false);
console.log(8 / "2");
console.log("number" + 5 + 1);
console.log(5 + 1 + "number");
console.log(7 && 2);
console.log(2 && 7);
console.log(null + 1);
console.log(undefined + 1);
console.log("five" + + "two");
console.log('true' == true);
console.log(false == 'false');
console.log(null == '');
console.log(!!"false" == !!"true");
console.log("4" - 3);
console.log("4px" - 3);
console.log(0 || "0" && 1);


// =================2================
console.log("=================2================");
let numString = "42";
let numInt = parseInt(numString);
let numfloat = parseFloat(numString);

console.log(numString, numInt, numfloat);

// =================3================
console.log("=================3================");
let isLoggedOut = false;
let loggedInString = String(isLoggedOut);

console.log(loggedInString);
console.log(typeof(loggedInString));
 
// =================4================
console.log("=================4================");
let ageString = "25";
let yearsToAdd = 10;

let futureAge = Number(ageString) + Number(yearsToAdd);

console.log(futureAge);


// =================5================
console.log("=================5================");

let inputValue = "true";

isTrue =!!inputValue; // or Boolean(inputValue);

console.log(isTrue);

// =================6================
console.log("=================6================");
inputValue = 6.567;

console.log(inputValue);

console.log(String(inputValue));
console.log(parseInt(inputValue));
console.log(Boolean(inputValue));