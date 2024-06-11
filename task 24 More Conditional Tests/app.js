"use strict";
//Tests for equality and inequality with strings
let myName = "Iqra Sohail";
console.log("Equality Test:", (myName) === "Iqra Sohail");
console.log("Inequality Test:", (myName) !== "Usama Siddiqui");
//Tests using the lower case function
console.log("lowercase Test:", "IQRA SOHAIL".toLowerCase() === "iqra sohail");
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
//and less than or equal to
console.log("Equality Test:", 1000 === 1000);
let number = 10;
console.log("Inequality Test:", (number) !== (9));
console.log("greater than Test:", 1000 > 100);
console.log("less than Test:", 1000 < 2000);
console.log("greater than or equal Test:", 10 >= 10);
console.log("less than or equal:", 5 <= 10);
//Tests using "and" and "or" operators
console.log("and operator:", true && true);
console.log("or operator:", true || false);
//Test whether an item is in a array
const car = [1, 2, 3, 4];
console.log("Test number:", car.includes(1));
console.log("Test number:", car.includes(6));
