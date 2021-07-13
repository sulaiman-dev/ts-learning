// const anchor = document.querySelector("a");
// console.log(anchor);

// code block for ListTemplate Item file
import { Invoice2 } from "./classes/invoice2.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";


const form3 = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const toFrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

// code for tuples
let values:[string, string, number];
values = [toFrom.value, details.value, amount.valueAsNumber];

form3.addEventListener('submit', (e: Event) => {
    e.preventDefault();
    let doc: HasFormatter;
    if(type.value === 'invoice') {
        // doc = new Invoice2(toFrom.value, details.value, amount.valueAsNumber)
        // code for tuples
        doc = new Invoice2(...values)
    } else {
        doc = new Payment(...values);
    }

    list.render(doc, type.value, 'end');
})