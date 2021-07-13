"use strict";
// in default behavior of class other developers etc can change values of 
// different properties by re-assigning new values in this case we need 
// access modifiers (public, private and protected) to prevent this behaviour.
// we have three types of access modifiers.
// public => (default) => it allows to read and change value inside of the class as 
// well as out-side of the class.
// private => only allows us to read and change inside of the class.
// readonly => only allows us to read value both inside and outside of the class.
class Invoice1 {
    // readonly client: string;
    // private details: string;
    // public amount: number;
    // constructor(c: string, d: string, a: number) {
    //     this.client = c;
    //     this.details = d;
    //     this.amount = a;
    // }
    // short-hand for above code
    // it automatically assigns those values to properties of these names and it only
    // works when we provide access modifiers.
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
}
const invOne1 = new Invoice1('first', 'first item', 240);
const invTwo1 = new Invoice1('second', 'second item', 250);
const invThree1 = new Invoice1('third', 'third item', 260);
let invoices1 = [];
invoices1.push(invOne1);
invoices1.push(invTwo1);
invoices1.push(invThree1);
// re-assigning the values 
// invOne1.client = '1st'; // now it will give error because this property is 
// private and can only be changed inside class.
invTwo1.amount = 300;
// console.log('invoices: ', invoices1);
invoices1.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
