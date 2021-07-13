"use strict";
// function signature is the general structure of the function, what type of 
// data it returned what type of parameter etc should be passed to it.
// Example 1
let greet2;
greet2 = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// Example 2
let calc;
calc = (num1, num2, action) => {
    console.log('action', action);
    return num1 + num2;
};
// Example 3
let logDetails1;
logDetails1 = (developer2) => {
    console.log(`${developer2.name} is ${developer2.age} years old`);
};
//buggy
// Example 1
// greet2 = (name:string, greeting: number) => {
//     console.log(`${name} says ${greeting}`);
// }
// Example 2
// calc = (num1: string, num2:boolean, action: string) => {
//     console.log('action', action)
//     return num1 + num2;
// }
// Example 3 
// logDetails1 = (developer2:{name: boolean, age: string}) => {
//     console.log(`${developer2.name} is ${developer2.age} years old`)
// }
