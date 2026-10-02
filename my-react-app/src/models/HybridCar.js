import { Car } from './Car';

export class HybridCar extends Car {
    contructor(brand,model,year,fuelType,batterySize) {
        super(brand,model,year);
        this.fuelType = fuelType;
        this.batterySize = batterySize
    }

    mileage(model) {
        if (model === 'Prius') {
            return 50; // km per liter
        } else if(model === 'Volt') {
            return 42; // km per liter
        }
        return 0; // km per liter for unknown models
    }

    info() {
        return `${super.info()} - ${this.fuelType}, Battery: ${this.batterySize}, Mileage: ${this.mileage(this.model)} km/L`;
    }
}