// for this let's change tsconfig file as
// as "target": "es6" and "module": "es2015" because modern browsers support this.
// make folder (classes) and import js file of class here
import { Invoice2 } from "./classes/invoice2.js";
const invOne2 = new Invoice2('first', 'first item', 240);
const invTwo2 = new Invoice2('second', 'second item', 250);
const invThree2 = new Invoice2('third', 'third item', 260);
let invoices2 = [];
invoices2.push(invOne2);
invoices2.push(invTwo2);
invoices2.push(invThree2);
invoices2.forEach(invoice => {
    console.log(invoice.client, invoice.amount, invoice.format());
});
