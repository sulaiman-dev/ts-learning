// function signature is the general structure of the function, what type of 
// data it returned what type of parameter etc should be passed to it.

// Example 1
let greet2: (a: string, b: string) => void;
greet2 = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`);
}

// Example 2
let calc: (a: number, b: number, c: string) => number;
calc = (num1: number, num2:number, action: string) => {
        console.log('action', action)
        return num1 + num2;
}

// Example 3
let logDetails1: (obj:{name: string, age: number}) => void;
type person = {name: string, age: number}
logDetails1 = (developer2: person) => {
    console.log(`${developer2.name} is ${developer2.age} years old`)
}

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
