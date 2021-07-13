"use strict";
const anchor = document.querySelector("a");
console.log(anchor);
//buggy 
// 1- console.log(anchor.href);
// because typescript typically doesn't know about anchor as it does not have 
// special  access to index.html page during development.
// ways to fix 1.
// first method by checking with if statement
if (anchor) {
    console.log(anchor.href);
}
// by using exclamation mark at targeting.
const anchor1 = document.querySelector('a');
console.log('by using exclamation mark', anchor1.href);
const form = document.querySelector('form');
console.log('form', form);
const form1 = document.querySelector('.new-item-form');
// in case of targeting tag typescript knows about that it is html element 
// but in case of using class name or id it does not knows about it that it is form element.
// it can be handled by type-casting as 
// now we have all available properties of it in vscode.
const form2 = document.querySelector('.new-item-form');
const input = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form2.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(input.value, toFrom.value, details.value, 
    // amount.value //this is string version of number
    amount.valueAsNumber //now it becomes number.
    );
});
