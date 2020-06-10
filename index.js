//my first javascript code!
let name = "Muneeza"; // string literal
let age = 30; // number literal
let isApproved = false; //Boolean literal can also be true
let firstName = undefined;
let selectedColor = null;
console.log(name);
console.log('Hello World');
let interestRate = 0.3;
interestRate=1
console.log(interestRate);
//objects represeented by curly braces
let person = {
    name: 'Leslie',
    age: 27
};
// dot notation
person.name = 'Slyvia'
// bracket notation
person['age'] = 43
console.log(person.age);
//Arrays
let selectedColors = ['red','purple'];
selectedColors[2] = 5
console.log(selectedColors.length);
//functions,performing tasks
function greet(name, lastName) {
    console.log('Hello ' +  name + ' ' + lastName)
}
// calculating a value
function square(number) {
    return number * number;
}

console.log(square(2)); 