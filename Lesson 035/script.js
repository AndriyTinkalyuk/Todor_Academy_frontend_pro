//1. Використовуючи XmlHttpRequest, створіть наступні HTTP-запити до будь-якого публічного API або сайту Todor Academy:

//GET-запит для отримання даних
//POST-запит для надсилання даних у форматі JSON
//PUT-запит для оновлення даних
//DELETE-запит для видалення даних

//2. Збережіть код цих запитів та результати виконання (статусні коди, заголовки, тіла відповідей).

const postsUrl = "https://jsonplaceholder.typicode.com/posts";



const xhrGet = new XMLHttpRequest();

xhrGet.open("GET", postsUrl, true);

xhrGet.send()

xhrGet.onload = () => {
    if(xhrGet.status >= 200 && xhrGet.status < 300) {
    // const response =  JSON.parse(xhr.responseText);
    //     response.forEach(element => {
    //         document.body.insertAdjacentHTML(
    //             'beforebegin',
    //             `<h3>${element.title}</h3>
    //             <p>${element.body}</p>
    //             `
    //        )    
    //    });
    // console.log(xhrGet.responseText);
    } 
}

xhrGet.onerror = () => { 
    console.error("Http error:" + xhrGet.status)
}


const xhrPost = new XMLHttpRequest();

xhrPost.open("POST", "https://jsonplaceholder.typicode.com/posts", true);

xhrPost.setRequestHeader('Content-Type', 'application/json');

xhrPost.send(JSON.stringify({"title" : "Hi everyone", "description" : "its greeting for everyone"}));

xhrPost.onload = () => { 
    // console.log(xhrPost.status);
    // console.log(xhrPost.responseText);
     

}

xhrPost.onerror = () => { 
    console.error("Http error:" + xhrPost.status)
}


const xhrPut = new XMLHttpRequest();

xhrPut.open("PUT", "https://jsonplaceholder.typicode.com/posts/1", true);

xhrPut.setRequestHeader('Content-Type', 'application/json');

xhrPut.send(JSON.stringify({"title" : "Hi everyone its PUT method", "description" : "^_^"}));

xhrPut.onload = () => { 
    // console.log(xhrPut.status);
    // console.log(xhrPut.responseText);
     

}


xhrPut.onerror = () => { 
    console.error("Http error:" + xhrPut.status)
}




const xhrDelete = new XMLHttpRequest();

xhrDelete.open("DELETE", "https://jsonplaceholder.typicode.com/posts/1", true);

xhrDelete.send()
xhrDelete.onload = () => { 
    // console.log(xhrDelete.status);
    // console.log(xhrDelete.responseText);
     

}



xhrDelete.onerror = () => { 
    console.error("Http error:" + xhrDelete.status)
}




// 2.
// Завдання 2 - Використання Fetch API
// 1. Використовуючи Fetch API, створіть аналогічні HTTP-запити до того ж API або сайту Todor Academy:

// GET-запит для отримання даних

// POST-запит для надсилання даних у форматі JSON

// PUT-запит для оновлення даних

// DELETE-запит для видалення даних

// 2. Збережіть код цих запитів та результати виконання (статусні коди, заголовки, тіла відповідей).


fetch(postsUrl)
.then(response => response.json())
.then(data => data.forEach(element => {
                document.body.insertAdjacentHTML(
                    'beforebegin',
                    `<h3>${element.title}</h3>
                    <p>${element.body}</p>
                    `
               )     
}))
.catch(e => console.error(`error: ${e}`));




async function fetchData(url) {
try { 
    const response = await fetch(url);
    if(response.ok) {
    const data = await response.json();
    console.log(data);
    } else {
        throw new Error(response.status);
    }
} catch(e) {
console.error(`error: ${e}`);
}
}

// fetchData(postsUrl)


const user = { 
    'name': 'Andrii',
    'message': 'Hello bro!',
}

async function fetchPost(url, body) {
    try {
        let response = await fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(body)
          });
        if(response.ok) { 
            console.log(`response ok ${response.status}`);
        } else {
            throw new Error(response.status);
        }
    } catch (error) {
      console.error(`error ${error}`);  
    } finally {
        console.log(`It was fetch with method POST`); // просто хотів заюзати finally 🤷‍♂️ щоб розрізняти запити в консолі
    }
}

// fetchPost(postsUrl, user);


async function fetchPut(url, body) {
    try {
        let response = await fetch(url, {
        method:  "PUT",
        headers: {
        'Content-Type' : 'application.json;charset=utf-8'
        },
        body: JSON.stringify(body)    
        });

        if (response.ok) {
            console.log(`response ok ${response.status}`);   
        } else {
            throw new Error(response.status);    
        }
    } catch (error) {
        console.error(`error ${error}`);      
    } finally {
        console.log(`It was fetch with method PUT`);  
    }
}


// fetchPut(`${postsUrl}/1`, user);


async function fetchDelete(url) {
    try {
    let response = await fetch(url, {
       method: "DELETE"});
      if (response.ok) {
            console.log(`response ok ${response.status}`);   
        } else {
            throw new Error(response.status);    
        }
    } catch (error) {
        console.error(`error ${error}`);      
    } finally {
        console.log(`It was fetch with method DELETE`);  
    }
}



fetchDelete(`${postsUrl}/1`);