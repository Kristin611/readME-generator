// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description: 
    ${data.description}\n
  ## Table of Contents: 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributors](#contributors)\n
  ## Installation
    ${data.install}
  ## Usage
    ${data.usage}\n
  ## License 
    ${data.license}\n
  ## Contribute:
    ${data.contribute}\n
  ## Tests
    ${data.tests}\n 
  ## Questions?\n
    GitHub Profile: ${data.github}
    Email: ${data.email}






`;
}

module.exports = generateMarkdown;
