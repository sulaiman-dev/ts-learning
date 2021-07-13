"use strict";
//arrays 
let names = ['abc', 'def', 'ghi'];
names.push('jkl');
console.log('names: ', names);
let numbers = [2, 4, 6];
numbers.push(8);
console.log('numbers: ', numbers);
let mixed = ['abc', 1, 'def', 2];
mixed.push('ghi');
mixed.push(3);
mixed[0] = 0;
mixed[1] = 'jkl';
// buggy
// names.push(5);
// names[0] = true;
// numbers.push('ten');
// numbers[0] = 'zero';
// names = 'names';
//objects
let developer = {
    name: 'sulaiman',
    age: 27,
    isWorking: true
};
developer.age = 28;
developer.isWorking = false;
developer.name = 'shinwari';
developer = {
    name: 'Anas',
    age: 29,
    isWorking: false
};
//buggy 
// developer.age = "twenty eight";
// developer.isWorking = 1;
// developer.name = 02002;
// developer.skill = ['html', 'css', 'js'];
// developer = {
//     name: 'Anas',
//     age: 29,
// }
