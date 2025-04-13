
const tasksBody = document.getElementById("task-list");
const DATA_URL = "http://localhost:3000/tasks";

const popupResponse = document.querySelector(".popup-response");
const popupResponseMessage = document.querySelector(".popup-response-message");

const popupStatus = document.querySelector(".popup-status");
const statusButton = document.getElementById("status-button");
const closepopupStatusButton = document.querySelector(".popup-status-icon img")

const addTaskButton = document.getElementById("addTask");
const taskFormError =  document.querySelector(".task-form-error");

const preloader = document.getElementById("preloader");


let id;
let responsePopupTimeout;



(async () => {
  try {
    const data = await getTasks(DATA_URL);
    renderTasks(tasksBody, data);
  } catch(e) { 
    taskFormError.textContent = e;
  } finally {
    preloader.style.display = "none";
  }
})()


addTaskButton.addEventListener("click", (e) => {
  e.preventDefault();
  taskFormError.textContent = ""; 
  let title = document.getElementById("title").value.trim();
  let description = document.getElementById("description").value.trim();

  if(title !== "" || description !== "") {
    const task = {
      "title": title,
      "description": description,
      "status": "to-do",
    }
    
    postTask(DATA_URL, task)
    .then(response => {
      showRequestResponse(response);
      addTask(tasksBody, task);
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
      })
    .catch(e => taskFormError.textContent = e); 
    return; 
  } 
  taskFormError.textContent = "error : fill in all fields!!";
})

statusButton.addEventListener("click", (e) => {
  e.preventDefault();
  popupStatus.classList.remove("active");
  document.body.classList.remove("lock");
  const newStatus = document.getElementById("status-value").value;
  updateStatus(DATA_URL, id, {"status": newStatus}).then(response => showRequestResponse(response)).catch(e => taskFormError.textContent = e);
})


tasksBody.addEventListener("click", (e) => {      
  if(e.target.classList.contains("change-button")) {
    id = findTaskId(e);
    popupStatus.classList.add("active");
    document.body.classList.add("lock");
  }


  if(e.target.classList.contains("delete-button")) {
    id = findTaskId(e);
    deleteTask(DATA_URL, id).then(response => showRequestResponse(response)).catch(e => taskFormError.textContent = e);
  }
  })


closepopupStatusButton.addEventListener("click", () => {
  document.body.classList.remove("lock");
  popupStatus.classList.remove("active");
})

popupStatus.addEventListener("click", (e) => { 
  if(e.target.classList.contains("popup-status")) { 
    document.body.classList.remove("lock");
    popupStatus.classList.remove("active");
  }
})
  //  FUNCTIONS

function renderTasks(element, array) {
    if(!Array.isArray(array)) { 
    throw new Error("Data this task is not a array");
    }

    array.forEach(item => {
      element.insertAdjacentHTML(
            "beforeEnd",
            `<tr data-id="${item.id}">
             <td>${item.title}</td>
             <td>${item.description}</td>
             <td data-name="task-status">${item.status}</td>
             <td> <button class='change-button' id="change-status">змінити статус</button> <button class='delete-button'>видалити</button></td>
             </tr>`
        )
    })
}





function findTaskId(event) {
  let task = event.target.closest("tr");
  if(task) { 
  return task.dataset.id;
  }
  else { 
    throw new Error("Task don't find");
     
  }
}


function showRequestResponse(success) { 
  popupResponse.classList.remove("active", "good", "bad");

  void popupResponse.offsetWidth;

  if(responsePopupTimeout) {
    clearTimeout(responsePopupTimeout);
  }


  popupResponse.classList.add("active");

  if(success) { 
    popupResponse.classList.add("good");
    popupResponseMessage.textContent = "The action was successful!";
  } else {
    popupResponse.classList.add("bad");
    popupResponseMessage.textContent = "something went wrong!";
  }


 responsePopupTimeout =  setTimeout(() => {
  popupResponse.classList.remove("active");
}, 1999);
}

function addTask(element, body) {
  if(body) { 
    const {title, description, status} = body;
    element.insertAdjacentHTML(
      "beforeEnd",
      `<tr data-id="${findMaxId() + 1}">
       <td>${title}</td>
       <td>${description}</td>
       <td data-name="${status}">to-do</td>
       <td> <button class='change-button' id="change-status">змінити статус</button> <button class='delete-button'>видалити</button></td>
       </tr>`
  )
  }
}


function findMaxId() {
  const lastElements = document.querySelectorAll(`[data-id]`)[-1];
  if(!lastElements) {
    return 0;
  }
  return Number(lastElements.dataset.id);
}

//  REQUESTS


async function getTasks(url) {
  try {
      const response = await fetch(url);
      if(response.ok){
      const data = await response.json();
      return data;
  } else {
      throw new Error(`Http error: ${response.status} - ${response.statusText}`);
  }
  } catch (error) {
    console.error(error);
    throw error;  
  }
}

async function deleteTask(url, id) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "DELETE",
    });
    if(response.ok) {
      document.querySelector(`[data-id = "${id}"]`).remove();
      return true;
      
    } else { 
      throw new Error(`Http error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);
    throw error;  
  }
}




async function updateStatus(url, id, body) {
  try {
    const response = await fetch(`${url}/${id}`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(body),
    });
    if(response.ok) {
        let task = document.querySelector(`[data-id="${id}"]`);
        let status = task.querySelector(`[data-name="task-status"]`);
        status.textContent = body.status;
        return true;
    } else {
      throw new Error(`Http error: ${response.status} - ${response.statusText}`);
    }
  } catch (error) {
    console.error(error);  
    throw error;
  }
  
}


async function postTask(url, body) {
  try {
  const response = await fetch(url, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(body),
  })
  if (response.ok) {
    return true;
  } else { 
    throw new Error(`Http error: ${response.status} - ${response.statusText}`);  
  } 
  } catch (error) {
    console.error(error);
    throw error;
  }  
}

// -------------------------------------------------------------------------//