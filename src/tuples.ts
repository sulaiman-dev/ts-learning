// Tuples.
// These are little bits like arrays but there is one major difference that in tuples
// the position of value remain fixed when it is initialized.

let arr = ['sulaiman', 28, true];
// it is fine to do as... flexible on the basis of position.
arr[0] = false;
arr[1] = 'anas';
arr = [20, 'zaid', false];

let tup:[string, number, boolean] = ['sulaiman', 28, false];
//but if we try to pass wrong type for that specific position it will throw error.
// e.g
// tup[0] = false; // because it expects string at first position and so on.