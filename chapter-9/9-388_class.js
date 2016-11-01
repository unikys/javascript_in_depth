
class Car {
    constructor(name) {
        this.name = name;
        this.type = "Car";
    }
    getName() {
        return this.name;
    }
}
let car = new Car("My car");
console.log("car.getName(): " + car.getName());


class SUV extends Car {
    constructor(name) {
        super(name);
        this.type = "SUV";
    }
}

let suv = new SUV("My SUV");
console.log("suv instanceof SUV: " + (suv instanceof SUV));
console.log("suv instanceof Car: " + (suv instanceof Car));
console.log("suv.getName(): " + suv.getName());
console.log(SUV);

