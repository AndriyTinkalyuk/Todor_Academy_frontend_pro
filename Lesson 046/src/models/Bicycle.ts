import {Drivable} from "./IDrivable.js";

export default class Bicycle implements Drivable {
    constructor(){}

    drive(): void {
        console.log("Bicycle is being ridden");
        
    }
}