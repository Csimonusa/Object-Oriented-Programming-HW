const Fs = require('fs')
const inquirer = require('inquirer')
const Employee = require("./lib/Employee")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const Manager = require("./lib/Manager")

menu = () => {
    createManager = () => {
        inquirer
            .prompt([
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                }
            ])
    }

    createIntern = () => {
        inquirer
            .prompt([
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
            ])
    }

    createEngineer = () => {
        inquirer
            .prompt([
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
                {
                    type: '',
                    message: '',
                    name: ''
                },
            ])
    }

}



