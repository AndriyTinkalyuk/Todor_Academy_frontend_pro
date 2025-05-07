import Vehicle from "./Vehicle.js";
export default class Car extends Vehicle {
    constructor() {
        super();
    }
    ;
    startEngine() {
        return "Car engine started";
    }
    drive() {
        console.log("Car is driving");
    }
}
