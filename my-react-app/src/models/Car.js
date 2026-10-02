//src/models/Car.js
export class Car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    info() {
        return `${this.brand} ${this.model} (${this.year})`;
    } 
}