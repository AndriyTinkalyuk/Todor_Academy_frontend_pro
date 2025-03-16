// 1.Напишіть асинхронну функцію, яка буде отримувати дані з сервера за допомогою fetch і виводити їх у консоль. Використайте ключові слова async / await
const url = "https://jsonplaceholder.typicode.com/posts";

async function renderData(url) {
    try { 
    const response = await fetch(url);

    if(response.status === 200) {
    const data = await response.json();
    console.log(data);
} else {
    throw new Error(response.status);
}

    } 
    catch(err) {
        console.error(`Помилка: ${err}`);
    }

}


// renderData(url);

// 2. Перепишіть наведений нижче код, щоб уникнути "Promise Hell" за допомогою ключових слів async / await:

async function getData(url, id) {
    try{
        const response = await fetch(url);
        const data = await response.json();

        const dataId = id >= 1 ? id - 1 : 0;

        if(dataId > data.length){
            throw new Error('Даний ід виходить за верхню межу кількості індифікаторів.');
        }

        const detailsResponse = await fetch(`${url}/${data[dataId].id}`);
        const details = await detailsResponse.json();
        console.log(details);
    }
    catch(err) {
        console.error('Error:', err);
    }
}

// getData(url, 100);

 // 3. Напишіть асинхронну функцію, яка буде чекати певну кількість секунд перед виконанням. Використайте ключові слова async / await.
function delay(seconds) {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
}

async function someFunc() {
    console.log("Start someFunc");
    
    await delay(2)

    console.log("end someFunc after delay");
    
}


// someFunc()


// 5. Створіть програму, яка завантажує зображення за допомогою асинхронного запиту і відображає його на сторінці. Використайте async / await для керування асинхронним процесом.

async function getImage(url) {
   const response =  await fetch(url);
   const blob = await response.blob();

   let img = document.createElement("img");

   document.body.appendChild(img);

   img.src = URL.createObjectURL(blob); //response.url ?
   console.log(blob);
   
}

getImage("https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Raccoon_on_Log.jpg/413px-Raccoon_on_Log.jpg");

// 8. Напишіть програму, яка виконує послідовні запити до сервера з використанням асинхронних функцій та async / await.


const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
let container = document.querySelector('.container');

async function getUser(url, id) {
    try{
    const response = await fetch(url);
    if(response.ok) {
    const data = await response.json();
    
    if(id < 1) { 
        throw new Error("ID не може бути менше 1");
    } else if(id > 10) {
        throw new Error("ID не може бути більше 10");
    } else { 
        return data[id - 1].id;
    }
   
}
 } catch(err) {
    throw err;
 }
}


async function getCommentsOfUser(url, id) {
    try{
    const userId = await getUser(usersUrl, id);    
    const response = await fetch(`${url}/?postId=${userId}`);

    if(response.ok){
    const data = await response.json();   
    console.log(data);
    renderComments(data);   
    }

    }
    catch(err){
        console.error(err);
          container.textContent = `Щось пішло не так...  ${err}`;
    }
}


function renderComments(array){ 
    if(array.length > 0 && Array.isArray(array)){
        for (comment of array){ 
            container.insertAdjacentHTML("afterbegin",
                `<div class='comment'>
                <div class='comment_name'>Name: ${comment.name} </div>
                <div class='comment_email'>Email: ${comment.email} </div>
                <div class='comment_body'>Body: ${comment.body} </div>
                </div>`
            )
        }
    }
}


getCommentsOfUser(commentsUrl, 5);