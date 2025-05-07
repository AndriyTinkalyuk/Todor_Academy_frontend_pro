import Car from "./models/Car.js";
import Bicycle from "./models/Bicycle.js";
import ElectricCar from "./models/ElectricCar.js";

const car: Car = new Car();
const bicycle:Bicycle = new Bicycle();
const electricCar: ElectricCar = new ElectricCar();

console.log(car.startEngine() ,car.move());

car.drive();
bicycle.drive();
console.log(electricCar.startEngine(), electricCar.move(), electricCar.chargeBattery());

