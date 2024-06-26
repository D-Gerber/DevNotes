# 04-10-2024

- Watching tutorial on JavaScript with Mosh.

## Variables

-- Momery storage with varibales var()
    Think of boxes you use to organize your stuff. You put your stuff in various boxes and put a label on each box. With this, you can easily find your stuff. A variable is like a box; what you put inside the box is the value that you assign to a variable (that’s the data), and the label that we put on the box is the name of our variable. Now, let’s see this in code.

- Rules for naming variables
-- If you want to declare multipale variables there are two ways to do it. You can declare them on one line and seperate them with a comma but best practice is to declare them on two seperate line 
    for example: 
    let firstName = 'Daniel';
    let lastName = 'Gerber';

-- Cannot be a reserved keyword (let, var, if, else)
-- Using one of them will leave you with an error
-- Should be meaningfull (use meaningfull and descriptive names)
-- Cannot start with a number for example (1name)
-- Cannot contain a space or hyphen. 
-- Are case sensitve
-- Use camel notation. The first letter of the first word should be lowercase and the first letter of every word after should be uppercase(firstName)
-- Or use snake notation snake_case is a variable naming convention where each word is in lower case, and separated by underscores (last_name)

## Constants

-- If you dont want the value of a variable to change then you use a constant. 
-- The value of a variable can change but the value of a constant cannot change. 
-- Cannot reasign a constant.
-- If you dont have to reassign then constant should be your choice 
-- If you want to reassign thenuse let

## Primitive/ Value Types

-- String (let name = 'Daniel';)
-- Number (let age = '30';)
-- Boolean (Can either be true or false)
-- Undefined (Not very common to use this. If we dont initilize it by default its value is undifined)
-- Null (We us null in situations where we want to explicitly clear the value of variable)

## Objects

-- Think of an object like a person in real life we have a name, age and address and so. These are the properties of a person. 
-- When dealing with multiple related variables you can put them inide of an object 
-- {} These are known as object literal
-- Two ways to access a property and change the value. First is with Dot notation (person.name = 'Megan') and second is Bracket Notation [] person ['name'] = 'Megan'
-- Dot notation is neater so it should be your default choice. 

## Arrays

-- When dealing with a list of objects in your applications for example the list of products in a shopping cart in a situation like that you use an array to store that list.
-- [] Square brackets called array literal and they indicate an empty array.
-- Array is a data structure that we use to represent a list of items

## Functions

-- Functions are one of the fundemental building blocks in JavaScript, a function is basically s set of statements that preforms a task or calculates a value.
-- () These are part of the syntax for declaring functions and then you put curly brackets {}
-- Whatever you put inside the curly brackets {} are refered to as the body of the function.
-- When declaring a Function you dont need to add a semicolon at the end of the curly bracket because we are not declairing it as a variable (Function Declairation)
-- You can add a variable in between a parentheses () we refer to this variable as a parameter. Add the + to concatenate two strings.
-- A function can have multipale parameters.

## Maths in Javascript

-- Number is a data type in JavaScript which represents numeric data.
-- JavaScript uses the + symbol as an addition operator when placed between two numbers.
-- JavaScript uses the - symbol for subtraction.
-- JavaScript uses the * symbol for multiplication of two numbers.
-- JavaScript uses the / symbol for division.
-- You can easily increment or add one to a variable with the ++ operator.
    - *i++;* is the equivalent of *i = i + 1;* 
    - Note: The entire line becomes i++;, eliminating the need for the equal sign.
-- You can easily increment or add one to a variable with the -- operator.
    - *i--;* is the equivalent of *i = i - 1;* 
    - Note: The entire line becomes i--;, eliminating the need for the equal sign.
-- We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as floating point numbers or floats.
    - Note: when you compute numbers, they are computed with finite precision. Operations using floating points may lead to different results than the desired outcome.
-- In JavaScript, you can also perform calculations with decimal numbers, just like whole numbers.
    - const product = 2.0 * 2.5;
    - That equals 5.0
-- You can also divide one decimal by another.
    - const quotient = 4.4 / 2.0;
    - That equals to 2.2
-- The remainder operator % gives the remainder of the division of two numbers.
    - Example: 5 % 2 = 1
               5 / 2 = 2 remainder 1
               2 * 2 = 4
               5 - 4 = 1
    - Usage: In mathematics, a number can be checked to be even or odd by checking the remainder of the division of the number by 2. Even numbers have a        remainder of 0, while odd numbers a remainder of 1.
    - Example: 17 % 2 = 1
               48 % 2 = 0
    - Note: The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.
-- In programming, it is common to use assignments to modify the contents of a variable. Remember that everything to the right of the equals sign is evaluated first, so we can say:
    - myVar = myVar + 5;

to add 5 to myVar. Since this is such a common pattern, there are operators which do both a mathematical operation and assignment in one step.

One such operator is the += operator.

    - let myVar = 1;
    - myVar += 5;
    - console.log(myVar);
    - 6 would be displayed in the console.

