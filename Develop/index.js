// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown') //importing  
const inquirer = require('inquirer')
const fs = require('fs')
const path = require('path')




// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(fileName), data)
}

// TODO: Create a function to initialize app
function init() { //starter function
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
            name: 'install'
        },
        {
            type: 'input',
            message: 'Provide instructions and examples of use.',
            name: 'usage'
        },
        {
            type: 'list',
            message: 'Select the license for your application.',
            name: 'license',
            choices: [
                'MIT',
                'Apache License 2.0',
                'GNU General Public License v3.0',
                'none'
            ]

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
    .then((responses) => {
        const appTitle = responses.title;
        const description = responses.description;
        const install = responses.install;
        const usage = responses.usage;
        const license = responses.license;
        const contribute = responses.contribute;
        const tests = responses.tests;
        const github = responses.github;
        const email = responses.email;
        console.log({...responses})
        

        writeToFile('README.md', generateMarkdown({...responses})) //spread operator
    })
}

// Function call to initialize app
init();
