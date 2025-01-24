
// ================1=================

let recipeWithCheese = 'recipe with cheese';
let recipeWithOutCheese = 'recipe without cheese';
let addCheese = false;



console.log(addCheese === true ? recipeWithCheese : recipeWithOutCheese);



// ================2=================


let code = "BT";
let region = 'ІФ';

switch(code) { 
    case "AT":
        region = 'Івано-Франківська область'; break;
    case "AO":
        region = 'Закарпатська область'; break;
    case "BT":
        region = 'Херсонська область'; break;
    default: 
        region = "переданий код не існує або не зареєстрований";
}

console.log(region);


// ================3=================

let login = '';

let message = login == 'Співробітник' || login == 'Директор' ? 'Привіт' : login == '' ? 'Немає логіна' : '';

console.log(message);

// let message;
// if (login == 'Співробітник') {
//    message = 'Привіт';
// } else if (login == 'Директор') {
//    message = 'Привіт';
// } else if (login == '') {
//    message = 'Немає логіна';
// } else {
//    message = '';
// }
