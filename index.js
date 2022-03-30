
const generateHTML = require('./src/generateHTML');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const fs = require('fs'); 
const inquirer = require('inquirer');
const teamArray = []; 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'Input',
            name: 'Name',
            message: 'Enter the Manager name.', 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the manager name.");
                    return false; 
                }
            }
        },
        {
            type: 'Input',
            name: 'ID',
            message: "Enter the manager's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the manager's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'Input',
            name: 'Email',
            message: "Enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter the manager email.')
                    return false; 
                }
            }
        },
        {
            type: 'Input',
            name: 'Office Number',
            message: "Enter the manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter an office number.')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { name, id, email, officeNumber } = managerInput; 
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager); 
        console.log(manager); 
    })
};

const addEmployee = () => {
    console.log(`
    -----------------------------------
    Below Add new Employees to the Team
    -----------------------------------
    `);

    return inquirer.prompt ([
        {
            type: 'List',
            name: 'Role',
            message: "Choose your Employee's role",
            choices: ['Intern', 'Manager', 'Engineer']
        },
        {
            type: 'Input',
            name: 'Name',
            message: "Employees name", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter an employee's name.");
                    return false; 
                }
            }
        },
        {
            type: 'Input',
            name: 'ID',
            message: "Enter the employee's ID.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter the employee's ID.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'Input',
            name: 'Email',
            message: "Enter the employee's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email.')
                    return false; 
                }
            }
        },
        {
            type: 'Input',
            name: 'Github',
            message: "Enter the employee's Github username.",
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter the Employee's Github username!")
                }
            }
        },
        {
            type: 'input',
            name: 'School',
            message: "Enter the School name",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'Confirm',
            name: 'Confirm - Add Employee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teamArray;
        }
    })

};

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team profile has been created! Feel free to check out")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(teamArray => {
    return generateHTML(teamArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });
