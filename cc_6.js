class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }
    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize} people.`;
    }
}
const employee1 = new Employee('Kayla Michelle', 'Production');
const employee2 = new Employee('Bob Lee', 'Sales');
const employee3 = new Employee ('Alice Smith', 'Marketing');
const manager1 = new Manager('Sarah Jones', 'IT', 5);
const manager2 = new Manager('David Brown', 'HR', 3);

class Company {
    constructor() {
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    listEmployees() {
        this.employees.forEach (employee => {console.log(employee.describe())});
    }
}