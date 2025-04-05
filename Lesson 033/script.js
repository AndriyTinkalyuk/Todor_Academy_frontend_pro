//Створення шаблонних рядків
//Створіть функцію introduce(name, age, city), яка приймає три параметри: ім'я, вік і місто. Функція повинна повертати рядок у форматі:
// Привіт, мене звати [name]. Мені [age] років і я живу в [city].

function introduce(name, age, city) { 
  return ` Привіт, мене звати ${name}. Мені ${age} років і я живу в ${city}.`
}



//Форматування багаторядкового тексту
//Створіть функцію shoppingList(items), яка приймає масив товарів і повертає багаторядковий рядок з переліком цих товарів у форматі:
//Список покупок:
//- [item1]
//- [item2]
//- [item3]


function shoppingList(items) {
  result = "список покупок:\n"

  for (let item of items) { 
    result += `-${item}\n`
  }

  return result;
}

// console.log(shoppingList(["milk", "coffee", "tomato"]));


function highlight(strings, ...values) {
 return strings.reduce( (result, string, id) => {
    const value = values[id] !== undefined ? `<strong>${values[id]}</strong>` : '';
    return result + string + value;
  }, '') 
  
}


// console.log(highlight`any ${`one`} string for ${`testing`} this ${`function`}`);


//4.
//Створення HTML шаблону
//Створіть функцію createCard(title, description), яка приймає заголовок і опис, та повертає HTML шаблон у вигляді картки:
//<div class="card">
//<h2>[title]</h2>
//<p>[description]</p>
//</div>

function createCard(title, description) { 
  return `
<div class="card">
<h2>${title}</h2>
<p>${description}</p>
</div>`
}

// console.log(createCard('some-title','alalalalala'));


//5.
//Динамічне формування URL
//Створіть функцію generateURL(protocol, domain, path), яка приймає три параметри: протокол, домен і шлях. Функція повинна повертати рядок у форматі URL:

function generateURL(protocol, domain, path) { 
  return `${protocol}://${domain}/${path}`
}


//
//Додаткове завдання (необов'язкове)
//  Розширене тегування
// Створіть функцію emphasize(strings, ...values), яка приймає шаблонний рядок і повертає новий рядок, де всі значення, 
// передані як аргументи, будуть обгорнуті в <em> теги, а також виділяє всі слова "важливо" тегами <strong>важливо</strong>.
  
  function  emphasize(strings, ...values) { 
    return strings.reduce( (result, string, id) => {
      let value;

      if(values[id] !== undefined) 
        { value = `<em>${values[id]}</em>` }
      else { value = '' };

      if(values[id] === 'важливо') 
        {value = `<strong>важливо</strong>`};
      

      if (string.includes(`важливо`)) {
      string = string.replace(`важливо`, `<strong>важливо</strong>`)
      }
      return result + string + value;
    }, '') 
  }


  console.log(emphasize`крокодилів ${'досить'} ${"важливо"} важливо тримати ${`у воді`}`);
  