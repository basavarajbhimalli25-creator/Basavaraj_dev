// Task 1 — Student Result Analyzer

function studentResult(name, department, marks) {
    let total = marks.reduce((sum, mark) => sum + mark, 0);
    let average = total / marks.length;

    let pass = marks.every(mark => mark >= 35);

    let grade;

    if (!pass) {
        grade = "Fail";
    } else if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "Fail";
    }

    console.log("Student Name:", name);
    console.log("Department:", department);
    console.log("Marks:", marks);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", pass ? "Pass" : "Fail");
    console.log("Grade:", grade);
}

studentResult("Mahesh", "Computer Science", [85, 78, 92, 88, 80]);



// Task 2 — Employee Salary Calculator


let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

function calculateSalary(employee) {
    let basicSalary = employee.salary;
    let bonusPercentage = 0;

    if (employee.experience >= 5) {
        bonusPercentage = 15;
    } else if (employee.experience >= 2) {
        bonusPercentage = 10;
    }

    let bonus = basicSalary * bonusPercentage / 100;
    let finalSalary = basicSalary + bonus;

    console.log("===== Task 2: Employee Salary =====");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);
}

calculateSalary(employee);


// Task 3 — Product Filter System


let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

console.log("===== Task 3: Product Filter =====");

let above2000 = products.filter(product => product.price > 2000);
console.log("Products above ₹2,000:", above2000);

let electronics = products.filter(
    product => product.category === "electronics"
);
console.log("Electronics:", electronics);

let below1000 = products.find(product => product.price < 1000);
console.log("First product below ₹1,000:", below1000);

let totalProductPrice = products.reduce(
    (total, product) => total + product.price,
    0
);
console.log("Total price:", totalProductPrice);

let anyAbove50000 = products.some(product => product.price > 50000);
console.log("Any product above ₹50,000:", anyAbove50000);

let everyAbove500 = products.every(product => product.price > 500);
console.log("Every product above ₹500:", everyAbove500);


// ==============================
// Task 4 — Employee Management
// ==============================

let employeesTask4 = [
    { id: 101, name: "Kavin", role: "Frontend Developer", salary: 40000 },
    { id: 102, name: "Arun", role: "Backend Developer", salary: 55000 },
    { id: 103, name: "Priya", role: "HR Manager", salary: 60000 },
    { id: 104, name: "Dinesh", role: "Tester", salary: 42000 },
    { id: 105, name: "Meena", role: "Java Developer", salary: 70000 },
    { id: 106, name: "Rahul", role: "DevOps Engineer", salary: 65000 }
];

console.log("===== Task 4: Employee Management =====");

let employeeNames = employeesTask4.map(employee => employee.name);
console.log("Employee Names:", employeeNames);

let employeesAbove40000 = employeesTask4.filter(
    employee => employee.salary > 40000
);
console.log("Employees earning above ₹40,000:", employeesAbove40000);

let employee103 = employeesTask4.find(employee => employee.id === 103);
console.log("Employee with ID 103:", employee103);

let totalEmployeeSalary = employeesTask4.reduce(
    (total, employee) => total + employee.salary,
    0
);
console.log("Total Salary:", totalEmployeeSalary);

let highestPaidEmployee = employeesTask4.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);
console.log("Highest Paid Employee:", highestPaidEmployee);

let sortedEmployees = [...employeesTask4].sort(
    (a, b) => b.salary - a.salary
);
console.log("Employees High to Low:", sortedEmployees);

let onlyEmployeeNames = employeesTask4.map(employee => employee.name);
console.log("Only Employee Names:", onlyEmployeeNames);


// ==============================
// Task 5 — Shopping Cart
// ==============================

let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

function calculateCart(cart) {
    let itemTotals = cart.map(item => ({
        name: item.name,
        itemTotal: item.price * item.quantity
    }));

    let totalCartValue = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    let discount = 0;

    if (totalCartValue > 50000) {
        discount = totalCartValue * 10 / 100;
    }

    let finalAmount = totalCartValue - discount;

    console.log("===== Task 5: Shopping Cart =====");
    console.log("Item Totals:", itemTotals);
    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);
}

calculateCart(cart);


// ==============================
// Task 6 — Student Search System
// ==============================

let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

console.log("===== Task 6: Student Search =====");

let studentNames = students.map(student => student.name);
console.log("Student Names:", studentNames);

let above80 = students.filter(student => student.mark > 80);
console.log("Students above 80:", above80);

let priya = students.find(student => student.name === "Priya");
console.log("Student Priya:", priya);

let averageMark =
    students.reduce((total, student) => total + student.mark, 0) /
    students.length;

console.log("Average Mark:", averageMark.toFixed(2));

let anyoneFailed = students.some(student => student.mark < 40);
console.log("Anyone Failed:", anyoneFailed);

let everyoneAbove40 = students.every(student => student.mark > 40);
console.log("Everyone above 40:", everyoneAbove40);

let studentsSortedByMarks = [...students].sort(
    (a, b) => b.mark - a.mark
);
console.log("Students Sorted by Marks:", studentsSortedByMarks);


// ==============================
// Task 7 — Array Transformation Challenge
// ==============================

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];

console.log("===== Task 7: Array Transformation =====");

let doubledNumbers = numbers.map(number => number * 2);
console.log("Numbers × 2:", doubledNumbers);

let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log("Even Numbers:", evenNumbers);

let greaterThan15 = numbers.filter(number => number > 15);
console.log("Numbers greater than 15:", greaterThan15);

let firstGreaterThan20 = numbers.find(number => number > 20);
console.log("First number greater than 20:", firstGreaterThan20);

let totalNumbers = numbers.reduce(
    (total, number) => total + number,
    0
);
console.log("Total:", totalNumbers);

let anyGreaterThan40 = numbers.some(number => number > 40);
console.log("Any number greater than 40:", anyGreaterThan40);

let everyPositive = numbers.every(number => number > 0);
console.log("Every number positive:", everyPositive);

let numbersHighToLow = [...numbers].sort((a, b) => b - a);
console.log("Highest to Lowest:", numbersHighToLow);


// ==============================
// Task 8 — String Analyzer
// ==============================

function analyzeString(sentence) {
    console.log("===== Task 8: String Analyzer =====");

    console.log("Original Sentence:", sentence);
    console.log("Total Characters:", sentence.length);
    console.log("Uppercase:", sentence.toUpperCase());
    console.log("Lowercase:", sentence.toLowerCase());
    console.log(
        'Contains "JavaScript":',
        sentence.includes("JavaScript")
    );
    console.log("First Character:", sentence.slice(0, 1));
    console.log("Last Character:", sentence.slice(-1));

    let words = sentence.trim().split(/\s+/);

    console.log("Number of Words:", words.length);

    console.log(
        "JavaScript replaced with Python:",
        sentence.replace("JavaScript", "Python")
    );

    console.log("Sentence Array:", sentence.split(" "));
}

analyzeString("JavaScript is very powerful");