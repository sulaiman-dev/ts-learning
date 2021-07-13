// interfaces

interface isPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: isPerson = {
    name: "my name",
    age: 28,
    speak(text: string): void {
        console.log(text);
    },
    spend(amount: number): number {
        console.log(`I spend ${amount}`)
        return amount;
    }
}
// if we comment out any property or try to add new property it will through error.
console.log('interfaces', me)
// let someOne: isPerson;

const greet3 = (person: isPerson) => {
    console.log('hello', person.name);
}
// greet3({name: 'name'}) //throws error b/c it does not match interface.
greet3(me);