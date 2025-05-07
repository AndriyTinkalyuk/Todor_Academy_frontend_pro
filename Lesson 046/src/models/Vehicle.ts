export default abstract class Vehicle  {
    constructor() {
        
    }
    abstract startEngine():string 

    move():string {
        return `Vehicle is moving`
    }
}