// ALL TESTS FOR THE EMPLOYEE CLASS
const Employee = require('../lib/Employee');
test('creates an employee object', () => {
    const employee = new Employee('Mariana', 90, 'mmvrstudio@gmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Getting NAMES
test('gets employee name', () => {
    const employee = new Employee('Mariana', 80, 'mmvrstudio@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

//Getting IDS
test('gets employee ID', () => {
    const employee = new Employee('Mariana', 80, 'mmvrstudio@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

// Getting EMAILS
test('gets employee email', () => {
    const employee = new Employee('Mariana', 80, 'mmvrstudio@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// Getting ROLES
test('gets role of employee', () => {
    const employee = new Employee('Mariana', 80, 'mmvrstudio@gmail.com');
    expect(employee.getRole()).toEqual("Employee");
}); 

