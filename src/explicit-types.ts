//explicit types
let characters2:string;
let age2:number
let isLoggedIn:boolean;

characters2 = 'my name';
age2 = 30;
isLoggedIn = true;

//buggy
// characters2 = false;
// age2 = 'thirty';
// isLoggedIn = 'false';

//arrays
let developers:string[] = [];
developers = ['one', 'two', 'three'];

//buggy 
// developers.push('four') //in case of when empty array in not initiallized
// developers = [1, 3, 5];

//union types
let mixed2:(string|number|boolean)[] = [];
mixed2.push('name');
mixed2.push(1);
mixed2.push(false);
console.log('mixed2', mixed2);

let uid:string|number;
uid = 'name';
uid = 1;

//buggy
// let newArr = [1, 2];
// mixed2.push(newArr);
// let newObj = {name: 'name', age: 36};
// mixed2.push(newObj);

// uid = false;
// uid = [1, 2];
// uid = {name: 'name', age: 35};

//objects
let developers2:object;
developers2 = {
    name:'first',
    stars: 5,
    js: true
}
developers2 = [1, 2];

let developers3: {
    name: string,
    stars: number,
    contributions: boolean
}

developers3 = {
    name: 'developer1',
    stars: 4,
    contributions: false,
}

//buggy
// developers2 = 'developer';
// developers2 = false;
// developers2 = 4;

// developers3 = {
//     name: 0202020,
//     stars: 'five',
//     contributions: 1
// }
// developers3 = {
//     name: "0202020",
//     stars: 4,
//     contributions: true,
//     skills: [1, 3, 5]
// }