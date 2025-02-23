const Task = {
    init(id, title, description, status, deadline) { 
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.deadline = deadline;
        return this;
    },

    editTask(key, newValue) {
        this[key] = newValue;
    },

    completeTask() {
        this.status = 'complete';
        return `Task "${this.title}" was been completed.`
    }
}

const task1 = Object.create(Task).init(1, "Learn javascript", "take a course", "in process...", new Date("2025-02-09"));
task1.editTask("status", "finished (or no... :D)")
const task2 = Object.create(Task).init(2, "Buy products", "\n 1. a bottle of water \n 2. Bread", "in process...", new Date("2026-01-12"));


const TaskList =  function(id, title, description) { 
    this.id =id;
    this.title = title;
    this.description = description;
    this.list = [];


     this.addTask = (task) => {  //оскільки стрілкові функції не мають свого контексту ми можем посилатись на TaskList
        this.list.push(task);
    }

    this.removeTask = (id) => {
       let currentTask = this.list.findIndex(task => task.id === id);
       if(currentTask !== -1) {  // findIndex може повернути -1, якщо не знайде елемент (ну не може, а точно поверне, якщо не знайде елемент).
       //  можна б було винести в віддільну функцію, щоб перевикористати нижче
        this.list.splice(currentTask, 1);
        console.log(`task with index ${id} deleted.`);
    } else { 
        console.log(`task with index ${id} don't exists.`);
    }
    }

    this.showOverdueTasks = () => { 
    let overdueTasks = this.list.filter(task => task.deadline < new Date());
    console.log(`Overdue tasks:`)
    if (overdueTasks.length > 0) { 
        this.renderTasks(overdueTasks);
    } else { 
        console.log(`none`);
    }
    }

     this.showTasks = () => { 
        console.log(`Tasks in tasklist "${this.title}":`)
        if (this.list.length > 0) {
            this.renderTasks(this.list);
        }
        else { 
            console.log(`none`)
        }
    }

    this.renderTasks = (array) => { 
        array.forEach((task) => {
            console.group(task.title)
            for(let key in task) { 
                if (key !== "title" && typeof task[key] !== "function") {
                    if (key === "deadline") { 
                        this.calcDeadline(task, key); // виніс просто тому, що легче читати, але це не точно
                    } else {
                console.log(`${key}: ${task[key]}`);
                    }
            }
            }
            console.groupEnd();
        })
    }


    this.calcDeadline = (task, key) => { 
            let remainder = Math.ceil((task[key] - new Date()) / (1000 * 60 * 60 * 24));
            if(remainder < 0) { 
            console.log(`Overdue ${-remainder} days`) 
            } else {
            console.log(`stay ${remainder} days`)
            }
    }

}


const taskList1 = new TaskList(1, "My Task List", "It's my tasklist 1...");
taskList1.addTask(task1);
taskList1.addTask(task2);
taskList1.showTasks();



class Planner { 
    constructor(id, title, description) { 
        this.id = id;
        this.title = title;
        this.description = description;
        this.list = [];
    }

    addTaskList(taskList) { 
        this.list.push(taskList); 
    }

    removeTaskList(id) { 
        let currentTask = this.list.findIndex(task => task.id === id);
        if(currentTask !== -1) { 
        this.list.splice(currentTask, 1);}
        else { 
            console.log(`taskList with index ${id} don't exists.`);
        }
    }

    showTaskLists() {
        if (this.list.length > 0) { 
        console.log(`TaskLists in Planner "${this.title}":`)
        this.list.forEach(taskList => console.log(taskList.title));
    }
    }

    showOverdueTasks() { 
        this.list.forEach(taskList => taskList.showOverdueTasks());
    }

    showAllTasks() { 
        this.list.forEach(taskList => taskList.showTasks());
    }
}


const myPlanner = new Planner(1, "My planner", "Its my planner");
myPlanner.addTaskList(taskList1);
myPlanner.showTaskLists();
myPlanner.showOverdueTasks();

console.log("---------------------------------------");
taskList1.showOverdueTasks();
console.log("---------------------------------------");
console.log(task1.completeTask());

console.log(task1);