import  Vehicle  from "./Vehicle.js";
import {Drivable} from "./IDrivable.js";

export default class Car extends Vehicle implements Drivable {
    constructor() {
        super();
    };
    startEngine(): string {
       return "Car engine started"
    }
    drive(): void {
        console.log( "Car is driving");
    }
}