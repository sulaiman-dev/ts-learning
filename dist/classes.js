"use strict";
// classes
// classes in ts is almost similar to classes in js.
// for understanding how it works go to (OOP in JS) playlist
// class is basically blue-print for objects.
// for example if we need to create invoice object/s we need to creat invoice class
// for creating those objects. 
class Invoice {
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
}
const invOne = new Invoice('first', 'first item', 240);
const invTwo = new Invoice('second', 'second item', 250);
const invThree = new Invoice('third', 'third item', 260);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.push(invThree);
console.log('invoices: ', invoices);
