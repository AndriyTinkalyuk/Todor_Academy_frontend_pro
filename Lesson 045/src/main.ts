const root = document.getElementById("root");

// Task 1 

type User = {
    id: number,
    name: string,
    email: string,
    age: number | null
}

const user: User = {
    id: 1,
    name: "Andrii",
    email: "andriytinkaluk@gmail.com",
    age: 21
}

function detailsUser(user: User) {
    const element = document.createElement("div");
    element.innerText = 
      `id: ${user.id}
       name: ${user.name}
       email: ${user.email}
       age: ${user.age}`

       return element;
    
}


// Task 2 

function getStatus(status: "success" | "error" | "pending"): string {
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

const studentInfo:[string, number] = ["andrii", 5,];

function showStudentInfo(studentsInfo:[string, number]) {
    const container = document.createElement("div");
    let elements: HTMLDivElement[] = [];

    studentsInfo.forEach( (item) => {
        const el = document.createElement("div");
        
        switch (typeof(item)) {
            case "string":
                el.innerText = `Ім'я студента: ${item}`
                break;
            case "number":
                el.innerText = `Оцінка студента: ${item}`
                 break;
        }

        elements.push(el); 
    })

    container.append(...elements);
    return container
}


// Task 4

enum OrderStatus {
    Pending = "Pending",
    Shipped = "Shipped",
    Delivered = "Delivered",
    Cancelled = "Cancelled"
}

function statusResponse(status: OrderStatus): string {
    switch (status) {
        case OrderStatus.Pending:
            return `Замовлення обробляється.`
        case OrderStatus.Shipped:
            return `Замовлення відправляється.`
        case OrderStatus.Delivered:
            return `Замовлення доставлено.`
        case OrderStatus.Cancelled:
            return `Замовлення Відмінено.`
    }
}

console.log(statusResponse(OrderStatus.Delivered));

// Task 5

type Product = {
id: number
name: string
description: string
price: number
}

type ProductUpdate = Partial<Product>;

type ProductSummary = Omit<Product, "description">

root?.append(
detailsUser(user),
showStudentInfo(studentInfo)
)

