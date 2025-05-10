"use strict";
const root = document.getElementById("root");
const user = {
    id: 1,
    name: "Andrii",
    email: "andriytinkaluk@gmail.com",
    age: 21
};
function detailsUser(user) {
    const element = document.createElement("div");
    element.innerText =
        `id: ${user.id}
       name: ${user.name}
       email: ${user.email}
       age: ${user.age}`;
    return element;
}
// Task 2 
function getStatus(status) {
    switch (status) {
        case "success":
            return `Операція виконана успішно!`;
        case "error":
            return `Операція виконана з помилкою!`;
        case "pending":
            return `Операція виконується!`;
    }
}
// Task 3
const studentInfo = ["andrii", 5];
function showStudentInfo(studentsInfo) {
    const container = document.createElement("div");
    let elements = [];
    studentsInfo.forEach((item) => {
        const el = document.createElement("div");
        switch (typeof (item)) {
            case "string":
                el.innerText = `Ім'я студента: ${item}`;
                break;
            case "number":
                el.innerText = `Оцінка студента: ${item}`;
                break;
        }
        elements.push(el);
    });
    container.append(...elements);
    return container;
}
root === null || root === void 0 ? void 0 : root.append(detailsUser(user), showStudentInfo(studentInfo));
