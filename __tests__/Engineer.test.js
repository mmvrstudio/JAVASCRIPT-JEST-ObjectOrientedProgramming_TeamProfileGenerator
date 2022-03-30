// ALL TESTS FOR THE ENGINEER CLASS

const Engineer = require('../lib/Engineer');
test('creates an Engineer object', () => {
    const engineer = new Engineer('Mariana', 80, 'mmvrstudio@gmail.com', 'mmvrstudio');
    expect(engineer.github) .toEqual(expect.any(String));
});

// ENGINEER GITHUB
test('gets engineer github value', () => {
    const engineer = new Engineer('Mariana', 80, 'mmvrstudio@gmail.com', 'mmvrstudio');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// ROLE
test('gets role of employee', () => {
    const engineer = new Engineer('Mariana', 80, 'mmvrstudio@gmail.com', 'mmvrstudio');
    expect(engineer.getRole()).toEqual("Engineer");
});