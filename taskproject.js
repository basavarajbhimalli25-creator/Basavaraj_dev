// Final Mini Project — Employee Dashboard


let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];

console.log("===== Final Mini Project: Employee Dashboard =====");

// 1. Employee List
console.log("1. All Employees:");
console.log(employees);


// 2. Search Employee by Name
function searchEmployee(name) {
    return employees.filter(
        employee =>
            employee.name.toLowerCase() === name.toLowerCase()
    );
}

console.log("2. Search Arun:");
console.log(searchEmployee("Arun"));


// 3. Department Filter
function filterByDepartment(department) {
    return employees.filter(
        employee =>
            employee.department.toLowerCase() ===
            department.toLowerCase()
    );
}

console.log("3. IT Employees:");
console.log(filterByDepartment("IT"));


// 4. Salary Filter
let salaryAbove50000 = employees.filter(
    employee => employee.salary > 50000
);

console.log("4. Employees earning above ₹50,000:");
console.log(salaryAbove50000);


// 5. Total Company Salary
let totalCompanySalary = employees.reduce(
    (total, employee) => total + employee.salary,
    0
);

console.log("5. Total Company Salary:", totalCompanySalary);


// 6. Highest Salary
let highestSalaryEmployee = employees.reduce(
    (highest, employee) =>
        employee.salary > highest.salary ? employee : highest
);

console.log("6. Highest Paid Employee:", highestSalaryEmployee);


// 7. Experience More Than 3 Years
let experiencedEmployees = employees.filter(
    employee => employee.experience > 3
);

console.log("7. Employees with more than 3 years experience:");
console.log(experiencedEmployees);


// 8. Sorting Low to High
let salaryLowToHigh = [...employees].sort(
    (a, b) => a.salary - b.salary
);

console.log("8. Salary Low to High:");
console.log(salaryLowToHigh);


// Sorting High to Low
let salaryHighToLow = [...employees].sort(
    (a, b) => b.salary - a.salary
);

console.log("Salary High to Low:");
console.log(salaryHighToLow);


// 9. Statistics
let averageSalary = totalCompanySalary / employees.length;

console.log("===== Employee Statistics =====");
console.log("Total Employees:", employees.length);
console.log("Total Salary: ₹" + totalCompanySalary);
console.log("Highest Salary: ₹" + highestSalaryEmployee.salary);
console.log("Average Salary: ₹" + averageSalary.toFixed(2));