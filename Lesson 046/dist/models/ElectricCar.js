import Vehicle from "./Vehicle.js";
export default class ElectricCar extends Vehicle {
    constructor() {
        super();
    }
    ;
    startEngine() {
        return "Electric car engine started";
    }
    chargeBattery() {
        return "Electric car battery is charging";
    }
}
