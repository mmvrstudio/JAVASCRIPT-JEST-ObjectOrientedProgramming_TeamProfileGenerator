// ALL TESTS FOR THE INTERN CLASS
const Intern = require('../lib/Intern');
test('creates an Intern object', () => {
    const intern = new Intern('Mariana', 80, 'mmvrstudio@gmail.com', 'Asylum');
    expect(intern.school) .toEqual(expect.any(String));
});
// GETTING THE SCHOOL
test('gets employee school', () => {
    const intern = new Intern('Mariana', 80, 'mmvrstudio@gmail.com', 'Asylum');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// GETTING ROLE
test('gets role of employee', () => {
    const intern = new Intern('Mariana', 80, 'mmvrstudio@gmail.com', 'Asylum');
    expect(intern.getRole()).toEqual("Intern");
}); 