// const logDetails = (uid: string|number, item:string) => {
//     console.log(`${item} has a uid of ${uid}`);
// }
// const greet1 = (user:{name: string, uid:string|number}) => {
//     console.log(`${user.name} says hello`);
// }

//after type aliases we can reuse it easily
type stringOrNum = string | number;
type objWithName = {name: string, uid: stringOrNum};

const logDetails = (uid: stringOrNum, item:string) => {
    console.log(`${item} has a uid of ${uid}`);
}
const greet1 = (user:objWithName) => {
    console.log(`${user.name} says hello`);
}