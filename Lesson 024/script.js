const colorButton = document.querySelector("#change_color");
const textArea = document.querySelector("#textarea_focus");
const videoPlayer = document.querySelector("#video_player");
const loginForm = document.querySelector('#login_form');
const taskContainer = document.querySelector(".task_container");


function randomValueRGB () { 
    return Math.floor(Math.random() * 255);   
   }

colorButton.addEventListener("click", () => {
    document.body.style.color = `rgb(${randomValueRGB()},${randomValueRGB()},${randomValueRGB()})`;
})

textArea.addEventListener("focus", () => {
    textArea.placeholder = 'Фокус набуто';
})

textArea.addEventListener("blur", () => {
    textArea.placeholder = 'Фокус втрачено.';
})

videoPlayer.addEventListener("dblclick", () => {
    videoPlayer.volume = 0.5;
})

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Форма надіслана.")
})

taskContainer.addEventListener("click", (event) => { 
    Array.from(taskContainer.children).forEach(element => {
        element.style.border = '';
        element.style.fontSize = 'inerhit';
    });
    if(!event.target.classList.contains("task")) {
        return;
    }
    const task = event.target;

    task.style.border = "2px solid black";
    task.style.fontSize = "18px";
})


