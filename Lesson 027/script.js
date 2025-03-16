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
    const maxTime = 5000; 
    const time = Math.random() * maxTime;
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
        }, time)
    })
}


  randomReject()
  .then((result) => {
    console.log('Результат:', result); // Виведе випадкове число
  })
  .catch((error) => {
    console.error('Помилка:', error); // Виведе помилку
  });