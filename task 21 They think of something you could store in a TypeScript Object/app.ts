interface item {
    name: string
    price: number
}
const grocery: item ={
    name: `oil`,
    price: 240
}
const grocery1: item ={
    name: `rice`,
    price: 500
}
const grocery2: item ={
    name: `wheat`,
    price: 800
}
console.log(`grocery item 1: ${grocery.name}\n price: ${grocery.price}`)
console.log(`grocery item 2: ${grocery1.name}\n price: ${grocery1.price}`)
console.log(`grocery item 3: ${grocery2.name}\n price: ${grocery2.price}`)