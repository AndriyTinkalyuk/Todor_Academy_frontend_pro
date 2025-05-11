const statusEl = document.getElementById('status');
const statusButton = document.getElementById('status-button');

const eventSourse = new EventSource('http://localhost:3000/pizza-status');

eventSourse.onmessage = function(event) {
    console.log(event);
    statusEl.innerText = event.data;
};

eventSourse.onerror = function (event) {
    console.error("Помилка", event);
}
eventSourse.addEventListener('close', () => {
    console.log("end connection");
    eventSourse.close();
  });

  statusButton.addEventListener("click", () => {
    console.log("end connection by button");
    eventSourse.close();
  })
