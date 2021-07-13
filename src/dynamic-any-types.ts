//type any just reverts ts to js. use with cautions
let age3:any = 38;
age3 = 'thirty';
age3 =  true;
age3 = [1, 3, 5];
age3 = {name: 'name', stars: 5};

console.log(age3);

let mixed3:any = [];
mixed3.push(1);
mixed3.push('two');
mixed3.push(true);
mixed3.push([2, 4, 6]);
mixed3.push({name: 'name', stars: 4});

console.log('mixed3', mixed3);

let developer1: {
    name: any,
    stars: any,
}

developer1 = {name: 'name1', stars: 5}
developer1 = {name: false, stars: "5"}
developer1 = {name: [1,3], stars: ['five']}
developer1 = {name: {name:'name2'}, stars: {stars: 5}}

console.log('developer1', developer1);