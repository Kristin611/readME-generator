// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  //let licenses = '';

  if (license === 'MIT') {
    return '[![License: MIT](http://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license = 'Apache License 2.0') {
    return '[![License: Apache 2.0](http://img.shields.io/badge/license-Apache-20-blue.svg)](https://opensource.org/licenses/gpl-3.0)';
  } else if (license === 'GNU General Public License v3.0') {
    return '[![License: GPL 3.0](http://img.shields.io/badge/license-GPLv3-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return '';
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [License](#license)\n`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `This project is licensed under ${license}.`
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Description: 
    ${data.description}
  ## Table of Contents: 
  * [Installation](#installation)

  * [Usage](#usage)
  
  * [Contributing](#contributing)
  
  * [Tests](#tests)
  
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  ## Installation {#installation}
    ${data.install}
  ## Usage {#usage}
    ${data.usage}
  ## License 
    ${renderLicenseSection(data.license)}
  ## Contribute: {#contributing}
    ${data.contribute}
  ## Tests {#tests}
    ${data.tests} 
  ## Questions? {#questions}
    If you have additional questions about my application, please contact me below:
    GitHub Profile: ${data.github}
    Email: ${data.email}
`;
}

module.exports = generateMarkdown; //export generateMarkdown file to index.js file

