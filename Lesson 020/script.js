class Employee {
    constructor(name, age, position, baseSalary) { 
        this.name = name;
        this.age = age;
        this.position = position; 
        this.baseSalary = baseSalary;
    }

    calculateSalary() { 
        return `Salary: ${this.baseSalary}`;
    }

    work(){
        return `Employee "${this.position}" working...`;
    }
}


class Developer extends Employee{ 
    constructor(name, age, position, baseSalary, programmingLanguage){
        super(name, age, position, baseSalary);
        this.programmingLanguage = programmingLanguage;
    }

    calculateSalary() {
        return `Salary: ${Number(this.baseSalary) + 500}`;
    }
    work(){
        return `Developer "${this.position}" working...`;
    }
}

class Manager extends Employee { 
    constructor(name, age, position, baseSalary, teamSize){
        super(name, age, position, baseSalary);
        this.teamSize = teamSize;
    }

    calculateSalary() {
        return `Salary: ${Number(this.baseSalary) + 100 * this.teamSize}`;
    }
    work(){
        return `Manager "${this.position}" working... TeamSize : ${this.teamSize}`;
    }
}

const maksEmployee = new Employee("Maks", 19, "driver", 12000);
const saraDeveloper = new Developer("Sara", 18, "trainee", 8000);
const dianaManager = new Manager("Diana", 20, "middle", 20000, 10);

console.log(maksEmployee.work(), maksEmployee.calculateSalary());
console.log(saraDeveloper.work(), saraDeveloper.calculateSalary());
console.log(dianaManager.work(), dianaManager.calculateSalary());


/// 4. Менше коду, краща структура + читабельність, легче розширювати програму за допомогою наслідування.