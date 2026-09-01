// ==============================================================================
// JavaScript Practice Suite - Task 2
// Topics: Variables, Data Types, Dialogs, Operators, Increments, Objects, Arrays
// ==============================================================================

//Task 1 — var, let, const
console.log("-----------------------Task 1----------------------");
var studentName = "Naveen";
let studentAge = 22;
const collegeName = "National Engineering College";
console.log(studentName);
console.log(studentAge);
console.log(collegeName);
studentName = "Rahul";
studentAge = 23;
// collegeName = "ABC College";   // TypeError: Assignment to constant variable.
var studentName = "Kavitha";
// let studentAge = 24;          // Identifier 'studentAge' has already been declared.

//Task 2 — User Information
console.log("-----------------------Task 2----------------------");
var Name = typeof window !== "undefined" ? prompt("What is your Name?") : "Naveen";
var Age = typeof window !== "undefined" ? prompt("What is your age?") : "22";
var City = typeof window !== "undefined" ? prompt("What is your city?") : "Trichy";

console.log("Name : " + Name);
console.log("Age : " + Age);
console.log("City : " + City);

//Task 3 — Welcome Message
console.log("-----------------------Task 3----------------------");
var UserName = typeof window !== "undefined" ? prompt("What is your Name?") : "Naveen";
if (typeof alert !== "undefined") {
  alert("Welcome " + UserName + "!");
}
console.log("Welcome " + UserName + "!");

//Task 4 — Age Calculator
console.log("-----------------------Task 4----------------------");
var currentYear = 2026;
var birthYear = typeof window !== "undefined" ? prompt("What is your birth year?") : "2000";
console.log("Birth Year : " + birthYear);
console.log("Age : " + (currentYear - Number(birthYear)));

//Data Type Tasks
//Task 5 — Identify Data Types
console.log("-----------------------Task 5----------------------");
var str = "Hello";
var num1 = 100;
var float = 25.5;
var bool1 = true;
var bool2 = false;
var und;
var nul = null;
console.log(typeof (str));
console.log(typeof (num1));
console.log(typeof (float));
console.log(typeof (bool1));
console.log(typeof (bool2));
console.log(typeof (und));
console.log(typeof (nul));

//Task 6 — Student Data
console.log("-----------------------Task 6----------------------");
var student = {
  name: "Naveen",
  age: 22,
  city: "Trichy",
  qualification: ["B.Tech", "M.Tech"],
  isStudent: true
};
console.log(student);
console.log(student.name);
console.log(student.age);
console.log(student.qualification);
console.log(student.isStudent);

// Task 7 — Fruit Array
console.log("-----------------------Task 7----------------------");
var fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

//Arithmetic Operator Tasks
//Task 8 — Basic Calculator
console.log("-----------------------Task 8----------------------");
let a = 20;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

//Task 9 — Shopping Bill
console.log("-----------------------Task 9----------------------");
let Shirt = 999;
let Pant = 1499;
let Shoes = 1999;

var total = Shirt + Pant + Shoes;
console.log("Total = " + total);

//Task 10 — Simple Marks Calculation
console.log("-----------------------Task 10----------------------");
let Tamil = 80;
let English = 75;
let Maths = 90;

var totalMarks = Tamil + English + Maths;
var avg = totalMarks / 3;

console.log("Total Marks = " + totalMarks);
console.log("Average Mark = " + avg);

//Increment & Decrement Tasks
//Task 11 — Post Increment
console.log("-----------------------Task 11----------------------");
let a1 = 10;
let b1 = a1++;

console.log(a1);
console.log(b1);
// Output :
// 11
// 10

//Task 12 — Pre Increment
console.log("-----------------------Task 12----------------------");
let a2 = 10;
let b2 = ++a2;

console.log(a2);
console.log(b2);
// Output :
// 11
// 11

//Task 13 — Post Decrement
console.log("-----------------------Task 13----------------------");
let a5 = 20;
let b5 = a5--;

console.log(a5);
console.log(b5);
// Output :
// 19
// 20

//Task 14 — Pre Decrement
console.log("-----------------------Task 14----------------------");
let a3 = 20;
let b3 = --a3;

console.log(a3);
console.log(b3);
// Output :
// 19
// 19

//Challenge Tasks
//Task 15 — Find the Final Values
console.log("-----------------------Task 15----------------------");
let a4 = 5;
let b4 = a4++;
let c = ++a4;
let d = b4--;

console.log(a4);
console.log(b4);
console.log(c);
console.log(d);
// Output:
// 7
// 4
// 7
// 5

//Task 16 — Assignment Operators
console.log("-----------------------Task 16----------------------");
let num = 10;

num += 5;
console.log(num);
num -= 5;
console.log(num);
num *= 5;
console.log(num);
num /= 5;
console.log(num);
num %= 5;
console.log(num);
num **= 5;
console.log(num);

// Task 17 — Mini Student Profile
console.log("-----------------------Task 17----------------------");
var studentProfileName = "Naveen";
var studentProfileAge = 22;
var studentProfileCity = "Trichy";
var studentProfileCollege = "National Engineering College";

var subjects = ["JavaScript", "Python", "Web Technologies", "Database Systems", "Cloud Computing"];
var studentProfileObj = {
  name: "Naveen",
  age: 22,
  city: "Trichy",
  subjects: ["JavaScript", "Python", "Web Technologies", "Database Systems", "Cloud Computing"],
  isStudent: true
};

console.log("Student Name : " + studentProfileName);
console.log("Student Age : " + studentProfileObj.age);
console.log("City : " + studentProfileCity);
console.log("First subject : " + subjects[0]);
console.log("Last subject : " + studentProfileObj.subjects[studentProfileObj.subjects.length - 1]);
console.log("Total subjects : " + subjects.length);
console.log(studentProfileObj);

//Final Challenge — User + Calculator
console.log("-----------------------Final Task----------------------");
var userNum1 = typeof window !== "undefined" ? Number(prompt("Enter First Number")) : 10;
var userNum2 = typeof window !== "undefined" ? Number(prompt("Enter Second Number")) : 5;

console.log(userNum1 + userNum2);
console.log(userNum1 - userNum2);
console.log(userNum1 * userNum2);
console.log(userNum1 / userNum2);
console.log(userNum1 % userNum2);
console.log(userNum1 ** userNum2);
