export class Payment {
    constructor(recipient, details, amount) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    // IF we comment out format method. it will throw error.
    format() {
        return `${this.recipient} is owed £${this.amount} for ${this.details}.`;
    }
}
