var nameVar = 'Andrew';

console.log('nameVar', nameVar);

let nameLet = 'George';
nameLet = 'Bob';
console.log('nameLet', nameLet);

const fullName = 'Jen Mead';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName)