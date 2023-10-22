// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenses) {
  //let licenses = '';

  if (licenses === 'MIT') {
    return '[![License: MIT](http://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (licenses = 'Apache License 2.0') {
    return '[![License: Apache 2.0](http://img.shields.io/badge/license-Apache 20-blue.svg)](https://opensource.org/licenses/gpl-3.0)';
  } else if (licenses === 'GNU General Public License v3.0') {
    return '[![License: GPL 3.0](http://img.shields.io/badge/license-GPLv3-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return '';
  }

}

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
//module.exports = renderLicenseBadge;
