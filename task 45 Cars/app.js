"use strict";
function createCar(manufacturer, model, ...extras) {
    const car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(extra => {
        const key = Object.keys(extra)[0]; // Assuming only one key-value pair is provided
        const value = extra[key];
        car[key] = value;
    });
    return car;
}
const myCar = createCar("Toyota", "Camry", ["colour: Red"], ["Year: 2009"]);
console.log(myCar);
