console.log(sum(1,1));
console.log(sum("1",1));
console.log(sum(null,1));


console.log(this);


var GlobalA = "its global A";
var GlobalB = "its global B";

console.log(this.GlobalA);
console.log(window.GlobalB);

console.log(window.innerHeight); // window.innerHeight includes only the height of the browser window’s viewport.
console.log(window.outerHeight); // it includes toolbar etc.

console.log(window.console); // our console ._.
console.log(window.origin);
console.log(window.location.origin); // which right? 
