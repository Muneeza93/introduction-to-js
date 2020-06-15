//keywords for declaring variables var,let,const
// termination with a semi-colon (;)
//cannot be a reserved keyword
//should be meaningful
//case sensitive
//cannot contain a space or hyphen(-)
//this is my first javascript code!
console.log('Hello World');
let name = 'Muneeza';
console.log(name);
let firstName = 'Sebagabo'; 
let lastName = 'Leslie';
console.log(firstName,lastName);
//const makes sure value doesnt change
const interestRate = 0.3;
//interestRate = 1;
console.log(interestRate);
/* let name = "Muneeza"; // string literal
let age = 30; // number literal
let isApproved = false; //Boolean literal or use true */
//null used for clearing a variable
let selectedColor = null;
console.log(selectedColor);
//typeof operator used for dynamic typing
//object dealing with multiple related variables, use curly braces
let person = {
name: 'Leslie',
age: 30
};
// dot notation
person.name = 'Slyvia'
// bracket notation
person['age'] = 43
console.log(person.age);
console.log(person);
//Arrays uses square brackets
//Arrays a data structure used to represent list of items
let selectedColors = ['red','purple'];
selectedColors[2] = 5
console.log(selectedColors.length);
//length returns number of items in an array
//functions
//functions,performing tasks
function greet(name, lastName) {
    console.log('Hello ' +  name + ' ' + lastName)
}
// calculating a value
function square(number) {
    return number * number;
}

console.log(square(2));

