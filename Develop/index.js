// TODO: Include packages needed for this application

const inquirer = require('inquirer')
const fs = require('fs')

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the title of your application?',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Write a short description of your application.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Provide a step-by-step description of how to install your application.',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples of use.',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Include guidelines for how other developers can contribute to your project',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'Write tests for your application and include examples of how to run these tests.',
            name: 'tests'
        },
        {
            type: 'input',
            message: 'Provide the link to your GitHub Profile.',
            name: 'github'
        },
        {
            type: 'input',
            message: 'Provide your email address.',
            name: 'email'
        }
    ])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
