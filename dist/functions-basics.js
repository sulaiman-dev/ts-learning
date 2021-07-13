"use strict";
let greet;
greet = () => {
    console.log('hello, world');
};
greet();
//? for optional no need for ? by providing default param
const add = (a, b, c = 10) => {
    console.log('sum: ', a + b);
};
add(5, 10);
const minus = (a, b) => {
    return a - b;
};
let result = minus(10, 5);
console.log('resultOfMinus', result);
//buggy
// add(5);
// add(5, '10');
// result = 'something else';
// result = minus('4', 2);
