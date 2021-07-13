// export class Invoice2 {
//     constructor( 
//         readonly client: string,
//         private details: string,
//         public amount: number
//         ) 
//     {}
export class Invoice2 {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    // IF we comment out format method. it will throw error.
    format() {
        return `${this.client} owes £${this.amount} for ${this.details}.`;
    }
}
