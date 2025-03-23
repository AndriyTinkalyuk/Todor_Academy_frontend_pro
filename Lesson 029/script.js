const form = document.querySelector(".simple_form"); // получаємо нашу форму
const messageContainer = document.querySelector(".message"); // получаємо тіло, куди виводитимо повідомлення


form.addEventListener("submit", (event) => { // вішаєм слухач подій
    event.preventDefault(); // тут я намагався зупинити стандартну поведінку форми, тобто її відправлення.

    const userName = document.querySelector("#input_name").value.trim(); // тут получаємо значення поля, тобто ім'я

    greeting(userName).then( message => messageContainer.textContent = message).catch(err => console.error(err)); 
    // викликаємо функцію, в яку передаємо аргументом наше ім'я, та яка повертає повідомлення з привітанням. надалі 
    // чейним then, де отримуємо повідомлення та виводимо його на сторінці. 
    // також оброблюємо помилки та виводимо їх в консоль.
})



function greeting(name) {
    return new Promise( (resolve, reject) =>  {
        setTimeout( () => {
            if(name) {
            resolve(`Привіт, ${name}. Ласкаво просимо кудись!`);
        } else {
            reject(`введіть ім'я :D`);
        }
        }, 2000)});
    //отдже, наша функція повертає проміс, який виконається через дві секунди, що задовільняє умову задачі.
} 