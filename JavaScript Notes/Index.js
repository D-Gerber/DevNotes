let name = 'Daniel';

// Cannot be a reserved keyword (let, var, if, else)
// Using one of them will leave you with an error
// Should be meaningfull (use meaningfull and descriptive names)
// Cannot start with a number for example (1name)
// Cannot contain a space or hyphen. 
// Are case sensitve
//- Use camel notation. The first letter of the first word should be lowercase and the first letter of every word after should be uppercase(firstName)
//- Or use snake notation snake_case is a variable naming convention where each word is in lower case, and separated by underscores (last_name)

let firstName = 'Daniel';
let lastName = 'Gerber';

End of Variables 

// If you dont want the value of a variable to change then you use a constant. 
// The value of a variable can change but the value of a constant cannot change. 
// Cannot reasign a constant.
// If you dont have to reassign then constant should be your choice 
// If you want to reassign the a new value use let

End of Constants

let name = 'Daniel'; // String Literal 
let age = '30'; // Number Literal 
let isApproved = true; // Boolean Literal
let firstName = undefined;
let lastName = null;

End of Primitive/ Value Types


let person = {
    name: 'Daniel',
    age: '30'
};

// Dot Notation
person.name = 'Megan';

// Bracket Notation
person ['name'] = 'Megan'

console.log(person);

End of Objects

let selectedColors =['red', 'blue']; // Square brackets called array literal and they indicate an empty array.


// Preforming a task
function greet(name, lastName) { // You can add a variable in between a parentheses we refer to this variable as a parameter. A function can have multipale parameters. Seperate parameters with a comma
    console.log('Hello ' + name + '' + lastName);
}

greet('John', 'Smith'); // Adding something in the brackets is refered to a argument so if you add 'John', John is refered to an argument. You should pass an argument for last name. 
// When you run the console it wwill show Hello John Smith

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(2);