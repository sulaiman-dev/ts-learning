"use strict";
// type basics
let characters = "sulaiman";
let age = 26;
let isTodoDone = true;
// buggy code
// characters = 5;
// age = "twenty-seven";
// isTodoDone = "no";
characters = "shinwari";
age = 27;
isTodoDone = false;
// NaN error
// const circumference1 = (diameter) => {
//     return diameter * Math.PI
// }
// console.log(circumference1("hello"));
const circumference = (diameter) => {
    return diameter * Math.PI;
};
console.log(circumference(5));
