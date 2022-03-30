// ALL TESTS FOR THE MANAGER CLASS
const Manager = require('../lib/Manager');

// MANAGER OBJECT 
test('creates an Manager object', () => {
    const manager = new Manager('Mariana', 80, 'mmvrstudio@gmail.com', 2);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});
// GETTING ROLE
test('gets role of employee', () => {
    const manager = new Manager('Mariana', 80, 'mmvrstudio@gmail.com');
    expect(manager.getRole()).toEqual("Manager");
}); 