const fs = require('fs')
const inquirer = require('inquirer')
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")
const team = []
const htmlTemplate = require("./src/htmlTemplate.js")
const path = require("path")
const outputDirectory = path.resolve(__dirname, "dist")
const outputPath = path.join(outputDirectory, "team.html")

menu = () => {
    createManager = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Name of manager?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'Employee id of manager?',
                    name: 'employeeId'
                },
                {
                    type: 'input',
                    message: 'Email of manager?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Address of manager?',
                    name: 'address'
                },
                {
                    type: 'input',
                    message: 'Office number of manager?',
                    name: 'officeNumber'
                }
            ])
            .then(({name, employeeId, email, address, officeNumber}) => {
                const manager = new Manager(name, employeeId, email, address, officeNumber)
                console.log(manager)
                team.push(manager)
                makeTeam()
            })
    }

    createIntern = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Name of intern?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'Employee id of intern?',
                    name: 'employeeId'
                },
                {
                    type: 'input',
                    message: 'Email of intern?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'School of intern?',
                    name: 'school'
                },
            ])
            .then(({name, employeeId, email, school}) => {
                const intern = new Intern(name, employeeId, email, school)
                console.log(intern)
                team.push(intern)
                makeTeam()
            })
    }

    createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: 'input',
                    message: 'Name of engineer?',
                    name: 'name'
                },
                {
                    type: 'input',
                    message: 'Employee id of engineer?',
                    name: 'employeeId'
                },
                {
                    type: 'input',
                    message: 'Email of engineer?',
                    name: 'email'
                },
                {
                    type: 'input',
                    message: 'Github username of engineer?',
                    name: 'github'
                },
            ])
            .then(({name, employeeId, email, github}) => {
                const engineer = new Engineer(name, employeeId, email, github)
                console.log(engineer)
                team.push(engineer)
                makeTeam()
            })
    }

    makeTeam = () => {
        inquirer
            .prompt([
                {
                    type:'list',
                    message:'What type of employee would you like to add to your team?',
                    choices: [
                        'Intern',
                        'Engineer',
                        'My team is complete now!'
                    ],
                    name:'employeeAdded'
                }
            ])
            .then((choice) => {
                switch (choice.employeeAdded) {
                    case 'Intern':
                        createIntern()
                        break
                    case 'Engineer':
                        createEngineer()
                        break
                    default: 
                        buildTeam()
                }
            })
    }
        function buildTeam() {
            fs.writeFileSync(outputPath, htmlTemplate(team), (err) =>
            err ? console.log(err) : console.log(`Success! team.html is created!`))
        }
    // need to writefile.
    
    createManager()
}

menu()


