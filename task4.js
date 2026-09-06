
// Task 32 — Employee Management Console

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Naveen",
        age: 26,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    },
    {
        name: "Divya",
        age: 23,
        department: "IT",
        role: "Tester",
        salary: 38000
    }
];

// Task 32.1 — for...of

for (let employee of employees) {
    console.log(employee);
}

// Task 32.2 — for...in

for (let employee of employees) {
    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}

// Task 32.3 — Function

function displayEmployee(employee) {
    console.log("Name:", employee.name);
    console.log("Age:", employee.age);
    console.log("Department:", employee.department);
    console.log("Role:", employee.role);
    console.log("Salary:", employee.salary);
}

// Task 32.4 — Function Parameters

for (let employee of employees) {
    displayEmployee(employee);
    console.log("----------------");
}

// Task 32.5 — Return

function getSalary(employee) {
    return employee.salary;
}

for (let employee of employees) {
    let salary = getSalary(employee);
    console.log(employee.name, salary);
}

// Task 32.6 — Condition

for (let employee of employees) {
    if (employee.salary >= 40000) {
        console.log(employee.name, "Salary is 40000 or above");
    }
}

// Task 32.7 — Arrow Function

let calculateAnnualSalary = (salary) => {
    return salary * 12;
};

for (let employee of employees) {
    console.log(
        employee.name,
        "Annual Salary:",
        calculateAnnualSalary(employee.salary)
    );
}

// Task 32.8 — Generator

function* employeeBenefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefits = employeeBenefits();

for (let benefit of benefits) {
    console.log(benefit);
}
