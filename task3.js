// Task 1 — For Loop
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2 — Reverse Number
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

// Task 3 — Even Numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 4 — Odd Numbers
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// // Task 5 — Multiplication Table
// let tableNumber = Number(prompt("Enter a number:"));

// for (let i = 1; i <= 10; i++) {
//     console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
// }

// Task 5 — Multiplication Table
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a number: ", function (tableNumber) {
    tableNumber = Number(tableNumber);

    for (let i = 1; i <= 10; i++) {
        console.log(`${tableNumber} x ${i} = ${tableNumber * i}`);
    }

    rl.close();
});


// Task 6 — Countdown
let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}

// Task 7 — Sum of Numbers
let i = 1;
let sum = 0;

while (i <= 10) {
    sum = sum + i;
    i++;
}

console.log(sum);

// Task 8 — Print Numbers
let number = 1;

do {
    console.log(number);
    number++;
} while (number <= 5);

// Task 9 — Do While Understanding
let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);

// Task 10 — String Characters
let name = "javascript";

for (let character of name) {
    console.log(character);
}

// Task 11 — Array Values
let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}

// Task 12 — Student Names
let students = ["Arun", "Priya", "Naveen", "Rahul", "Divya"];

for (let student of students) {
    console.log("Student:", student);
}

// Task 13 — Employee Object
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}

// Task 14 — Product Object
let product = {
    productName: "Laptop",
    price: 50000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}

// Task 15 — Simple Function
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();

// Task 16 — Function With Parameter
function greet(name) {
    console.log("Hello", name);
}

greet("Naveen");
greet("Arun");
greet("Priya");

// Task 17 — Multiple Parameters
function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 21, "Computer Science");
student("Priya", 22, "Information Technology");
student("Naveen", 20, "Electronics");

// Task 18 — Addition Function
function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);

// Task 19 — Salary
function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);

console.log(employeeSalary);

// Task 20 — Bonus Calculator
function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log(totalSalary);

// Task 21 — Default Parameter
function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");

// Task 22 — Named Function
function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(3));
console.log(square(4));
console.log(square(5));
console.log(square(10));

// Task 23 — Anonymous Function
let calculate = function (a, b) {
    return a + b;
};

console.log(calculate(10, 20));

// Task 24 — Arrow Function
let multiply = (a, b) => {
    return a * b;
};

console.log(multiply(10, 20));

// Task 25 — Scope
function test() {
    if (true) {
        var scopeA = 10;
        let scopeB = 20;
        const scopeC = 30;

        console.log(scopeA);
        console.log(scopeB);
        console.log(scopeC);
    }

    console.log(scopeA);
}

test();

// Task 26 — Hoisting with var
console.log(hoistedA);

var hoistedA = 10;

// Task 27 — Hoisting with let
try {
    console.log(hoistedB);
    let hoistedB = 20;
} catch (error) {
    console.log(error.name);
}

// Task 28 — Hoisting with const
try {
    console.log(hoistedC);
    const hoistedC = 30;
} catch (error) {
    console.log(error.name);
}

// Task 29 — IIFE
(function () {
    console.log("Welcome to JavaScript");
})();

(function (product, discount) {
    console.log(product + " has a " + discount + "% discount");
})("Laptop", 20);

// Task 30 — Callback / Higher-Order Function
function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);

// Task 31 — Generator Function
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator = cashback();

for (let value of cashbackGenerator) {
    console.log(value);
}
