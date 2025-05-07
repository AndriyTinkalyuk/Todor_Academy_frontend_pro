import Vehicle from "./Vehicle.js"
import ElectricVehicle from "./IElectricVehicle.js"

export default class ElectricCar extends Vehicle implements ElectricVehicle {
    constructor() {
        super();
    };

    startEngine(): string {
        return "Electric car engine started";
    }

    chargeBattery(): string {
       return "Electric car battery is charging";
    }

}