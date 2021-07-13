// export class Invoice2 {
//     constructor( 
//         readonly client: string,
//         private details: string,
//         public amount: number
//         ) 
//     {}

//     format() {
//         return `${this.client} owes £${this.amount} for ${this.details}.`
//     }
// }

// after HasFormatter interface
import { HasFormatter } from "../interfaces/HasFormatter.js";
export class Invoice2 implements HasFormatter {
    constructor( 
        readonly client: string,
        private details: string,
        public amount: number
        ) 
    {}
    // IF we comment out format method. it will throw error.
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`
    }
}