function delayedGreeting (name) { 
    return new Promise((resolve, reject) => { 
        setTimeout(() => {
            if (name)
                {resolve(`Привіт, ${name}!`)}
            else {reject(`Передайте ім'я для привітання.`)}
        }, 3000)
    })
}


delayedGreeting("Марія")
  .then((message) => {
    console.log(message); // Виведе "Привіт, Марія!"
  })
  .catch((error) => {
    console.warn(error);
  })


function randomReject() { 
    const maxTime = 5; // seconds 
    const time = Math.floor(Math.random() * maxTime) + 1; // тепер ми получаємо число від 1 до 5
    // , оскільки якщо повернеться 0 то + 1 = 1, якщо 0,99 * 5 = math.floor(4,95) = 4 + 1 = 5.
    // тобто Math.floor(Math.random() * maxTime) повертають число від 0 до 4 включно, а +1 робить діапазон на одиничку вище :D
    // console.log(time);
    const randomBoolean = Math.random() * 10 > 5;
    const randomNumber = Math.random() * 100;
// здалось це логічним, щоб не здавалось магічним значенням
    return new Promise((resolve, reject) => { 
     setTimeout(
        () => { 
            if(randomBoolean){
                resolve(randomNumber);
            }
            reject("Виникла помилка");
        }, time * 1000) // ms 
    })
}


  randomReject()
  .then((result) => {
    console.log('Результат:', result); // Виведе випадкове число
  })
  .catch((error) => {
    console.error('Помилка:', error); // Виведе помилку
  });