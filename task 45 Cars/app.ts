// Task 45
interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any; // Allow additional properties
}

function createCar(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): Car {
    const car: Car = {
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

const myCar = createCar("Toyota", "Camry",["colour: Red"], ["Year: 2009"]);
console.log(myCar);