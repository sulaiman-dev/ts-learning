// Generics in ts allow us to create reusable blocks of code which can be 
// used with different types.

// 1.
// const addUID = (obj: object) => {
//     let uid = Math.floor(Math.random() * 100);
//     return {...obj, uid};
// }

// let genericsDoc = addUID({name: "sulaiman", age: 28})
// console.log('generics', genericsDoc)

//buggy b/c it does not know what properties the object has.
// console.log(genericsDoc.name)
// this error can be fixed as

// 2. now it will capture all of the properties of the object.
// we can use extends T for specific type (object or {name: string} or any other)
const addUID = <T extends {name: string}>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return {...obj, uid};
}

let genericsDoc = addUID({name: "sulaiman", age: 28})
console.log('generics', genericsDoc.name)

// with Interfaces initially without <T>
// by providing <T> it becomes generic and flexible for individual item or object etc.
interface Resource<T> {
    uid: number,
    resource: string,
    data: T
}
// working code
// let Rdoc1: Resource = {
//     uid: 1,
//     resource: 'person A',
//     data: {name: 'name A'}
// }

//buggy code b/c data is not of type object.
// let Rdoc1: Resource = {
//     uid: 1,
//     resource: 'person A',
//     data: 'name A'
// }

// after providing <T>
let Rdoc1: Resource<string[]> = {
    uid: 1,
    resource: 'person A',
    data: ['name A', 'name B']
}

let Rdoc2: Resource<object> = {
    uid: 1,
    resource: 'person A',
    data: {name: "name A", age: 28}
}