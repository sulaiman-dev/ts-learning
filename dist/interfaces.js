"use strict";
// interfaces
const me = {
    name: "my name",
    age: 28,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log(`I spend ${amount}`);
        return amount;
    }
};
// if we comment out any property or try to add new property it will through error.
console.log('interfaces', me);
// let someOne: isPerson;
const greet3 = (person) => {
    console.log('hello', person.name);
};
// greet3({name: 'name'}) //throws error b/c it does not match interface.
greet3(me);
