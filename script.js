// JavaScript - Stackly Batch 39
// Topic: Variables (var, let, const), Rules & Practical Tasks

// variable :- 

// var   - global scope , function scope
// let   - block scope
// const - block scope


// ==========================================
// RULES DEMONSTRATION
// ==========================================

// ------------------------------------------
// 1. var
// ------------------------------------------

// 1. declaration  // 2. initialization
var a = 10

// 3. reuse        // 4. reinitialization
a = 12

// 5. redeclaration
var a = 13

console.log("var a final value:", a)


// ------------------------------------------
// 2. let 
// ------------------------------------------

// 1. declaration  // 2. initialization
let b = 15 

// 3. reuse        // 4. reinitialization
b = 16

// 5. redeclaration (NOT allowed in let)
// let b = 20 // ❌ Error: Identifier 'b' has already been declared

console.log("let b final value:", b)


// ------------------------------------------
// 3. const 
// ------------------------------------------

// 1. declaration  // 2. initialization (Mandatory at declaration time)
const c = 17 

// 3. reuse // 4. reinitialization (NOT allowed in const)
// c = 18 // ❌ Error: Assignment to constant variable

// 5. redeclaration (NOT allowed in const)
// const c = 19 // ❌ Error: Identifier 'c' has already been declared

console.log("const c value:", c)


// ==========================================
// 🔥 PRACTICAL QUESTIONS & CODING TASKS
// ==========================================

console.log("\n--- Practical Questions ---\n")

// Task 1: Create a variable for student name, age, and mark and print all three.
console.log("Task 1: Student Details")
let studentName = "Alex Sharma"
let studentAge = 21
let studentMark = 92.5

console.log("Student Name:", studentName)
console.log("Student Age :", studentAge)
console.log("Student Mark:", studentMark)
console.log()

// Task 2: Ask the user's name using prompt() and display it using alert().
function task2_promptAlert() {
    if (typeof window !== "undefined") {
        let userName = prompt("Enter your name:")
        if (userName) {
            alert("Welcome, " + userName + "!")
        }
    }
}

// Task 3: Ask the user's age using prompt() and print it using console.log().
function task3_promptConsole() {
    if (typeof window !== "undefined") {
        let userAge = prompt("Enter your age:")
        console.log("User Age entered:", userAge)
    }
}

// Task 4: Ask the user a question using confirm().
function task4_confirmQuestion() {
    if (typeof window !== "undefined") {
        let isJavaScriptFun = confirm("Are you enjoying learning JavaScript?")
        if (isJavaScriptFun) {
            console.log("User confirmed: Yes (OK)")
            alert("Awesome! Keep learning!")
        } else {
            console.log("User confirmed: No (Cancel)")
            alert("Keep practicing, you will love it soon!")
        }
    }
}

// Task 5: Ask the user's name and display it on the webpage using document.writeln().
function task5_documentWrite() {
    if (typeof window !== "undefined") {
        let name = prompt("Enter your name to display on the webpage:")
        if (name) {
            document.writeln("<h2>Hello, " + name + "! Welcome to JavaScript.</h2>")
        }
    }
}
