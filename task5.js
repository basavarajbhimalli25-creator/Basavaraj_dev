
// JAVASCRIPT QUESTIONS & SOLUTIONS


//  VARIABLES & DATA TYPES


// Q1: Difference between var, let, and const?
//
// var   -> Function scoped, can be redeclared and reassigned
// let   -> Block scoped, cannot be redeclared, can be reassigned
// const -> Block scoped, cannot be redeclared or reassigned


// Q2: Can you re-declare a variable with var, let and const?

var a = 10;
var a = 20; //  Allowed

let b = 10;
// let b = 20; //  Not allowed

const c = 10;
// const c = 20; //  Not allowed


// Q3: What is the output?
//
// var x = 5;
// let y = 10;
// const z = 15;
//
// x = 20;
// y = 25;
// z = 30;
//
// console.log(x, y, z);
//

// Answer:
// TypeError: Assignment to constant variable.
// Because const z cannot be reassigned.


// Q4: Difference between declaration and initialization?

// Declaration
let fruit;

// Initialization
let marks = 90;


// Q5: What will be the output?

let value;
console.log(value);

// Output:
// undefined


// Q6: What is hoisting?

// Hoisting means JavaScript processes declarations
// before executing the code.

console.log(number);

var number = 100;

// Output:
// undefined


// Q7: Difference between null and undefined?

let firstValue;
let secondValue = null;

console.log(firstValue);  // undefined
console.log(secondValue); // null

// undefined -> variable declared but value not assigned
// null      -> intentionally empty value


// Q8: What will be the output?

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Output:
// object
// undefined
// object
// object



//  OPERATORS


// Q9: Difference between == and ===?

console.log(5 == "5");   // true
console.log(5 === "5");  // false

// ==  -> checks value after type conversion
// === -> checks value AND data type


// Q10: Difference between ++i and i++?

let i = 5;

console.log(++i); // 6

let j = 5;

console.log(j++); // 5
console.log(j);   // 6

// ++i -> increases first, then returns value
// i++ -> returns value first, then increases


// Q11: What will be the output?

let x = 10;
let y = "5";

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);

// Output:
// 105
// 5
// 50
// 2


// Q12: What are logical operators?

// AND (&&)
console.log(true && true); // true

// OR (||)
console.log(true || false); // true

// NOT (!)
console.log(!true); // false


// Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Output:
// true
// true
// false


// Q14: What is the ternary operator?

let userAge = 20;

let result = userAge >= 18 ? "Adult" : "Minor";

console.log(result);

// Output:
// Adult


// =====================================================
// 📌 TYPE CASTING
// =====================================================

// Q15: Difference between implicit and explicit type casting?

// Implicit conversion
let stringNumber = "10";
let numberValue = 5;

console.log(stringNumber - numberValue);

// Output:
// 5

// JavaScript automatically converts "10" into 10.


// Explicit conversion
let stringValue = "100";

console.log(Number(stringValue));

// Output:
// 100


// Q16: What will be the output?

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));
console.log(Boolean(0));
console.log(Boolean("hello"));

// Output:
// 123
// NaN
// 1
// 0
// false
// true


// Q17: What is NaN?

console.log(Number("hello"));

// Output:
// NaN

// NaN means "Not-a-Number".


//  CONDITIONAL STATEMENTS


// Q18: Difference between if-else and switch?

// if-else
let studentMarks = 75;

if (studentMarks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// switch
let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid day");
}


// Q19: What will be the output?

let age = 20;

if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult


// Q20: What is nested if?

let personAge = 20;
let hasId = true;

if (personAge >= 18) {

    if (hasId) {
        console.log("Entry allowed");
    }

}

// Output:
// Entry allowed


// Q21: Check if a number is even or odd using ternary operator.

let num = 10;

let evenOdd = num % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);

// Output:
// Even



//  LOOPS


// Q22: Difference between while and do-while?

// while loop
let count = 1;

while (count <= 3) {
    console.log(count);
    count++;
}

// The condition is checked BEFORE execution.


// do-while loop
let count2 = 1;

do {
    console.log(count2);
    count2++;
} while (count2 <= 3);

// The code executes at least once,
// because condition is checked AFTER execution.


// Q23: What will be the output?

for (let k = 1; k <= 5; k++) {
    console.log(k);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// Q24: Difference between for-of and for-in?

// for-of -> gives VALUES

let numbers = [10, 20, 30];

for (let number of numbers) {
    console.log(number);
}

// Output:
// 10
// 20
// 30


// for-in -> gives INDEXES / KEYS

for (let index in numbers) {
    console.log(index);
}

// Output:
// 0
// 1
// 2


// Q25: Program to find sum of numbers from 1 to 100.

let sum = 0;

for (let n = 1; n <= 100; n++) {
    sum = sum + n;
}

console.log(sum);

// Output:
// 5050



//  ARRAYS


// Q26: Difference between slice and splice?

let array1 = [1, 2, 3, 4, 5];

// slice() does NOT change original array
let slicedArray = array1.slice(1, 4);

console.log(slicedArray);
console.log(array1);

// Output:
// [2, 3, 4]
// [1, 2, 3, 4, 5]


// splice() CHANGES original array
let array2 = [1, 2, 3, 4, 5];

array2.splice(1, 2);

console.log(array2);

// Output:
// [1, 4, 5]


// Q27: What will be the output?

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]



//  FUNCTIONS


// Q28: Difference between function declaration
// and function expression?

// Function Declaration
function add(a, b) {
    return a + b;
}

console.log(add(10, 20));

// Output:
// 30


// Function Expression
const multiply = function (a, b) {
    return a * b;
};

console.log(multiply(10, 20));

// Output:
// 200


// Q29: What is an arrow function?

// Arrow function is a shorter way to write a function.

const greetUser = () => {
    return "Hello";
};

console.log(greetUser());

// Output:
// Hello


// Shorter arrow function

const square = number => number * number;

console.log(square(5));

// Output:
// 25


// Q30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);

// Output:
// Hello


