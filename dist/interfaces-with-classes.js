import { Invoice2 } from "./classes/invoice2.js";
import { Payment } from "./classes/payment.js";
// let docOne: HasFormatter;
// let docTwo: HasFormatter;
// docOne = new Invoice2('client', 'web work', 200);
// docTwo = new Payment('recipient', 'marketing', 300);
// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log(docs);
// const invOne2 = new Invoice2('first', 'first item', 240);
// const invTwo2 = new Invoice2('second', 'second item', 250);
// const invThree2 = new Invoice2('third', 'third item', 260);
// let invoices2: Invoice2[] = [];
// invoices2.push(invOne2);
// invoices2.push(invTwo2);
// invoices2.push(invThree2);
// invoices2.forEach(invoice => {
//     console.log(invoice.client, invoice.amount, invoice.format())
// })
const form3 = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice2(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
    // console.log(
    //     type.value,
    //     toFrom.value,
    //     details.value,
    //     // amount.value //this is string version of number
    //     amount.valueAsNumber //now it becomes number.
    // )
});
