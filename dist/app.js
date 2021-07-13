// const anchor = document.querySelector("a");
// console.log(anchor);
// code block for ListTemplate Item file
import { Invoice2 } from "./classes/invoice2.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
const form3 = document.querySelector('.new-item-form');
const type = document.querySelector('#type');
const toFrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
// code for tuples
let values;
values = [toFrom.value, details.value, amount.valueAsNumber];
form3.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        // doc = new Invoice2(toFrom.value, details.value, amount.valueAsNumber)
        // code for tuples
        doc = new Invoice2(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
