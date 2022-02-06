const { template } = require("lodash");

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
const generateMarkdown = projectsArr => {
       return `${projectsArr.title}
  placeholder for license

  Basic Description
  __________________________________________________________________________
  ${projectsArr.description}

  Table of Contents
  __________________________________________________________________________
  ${projectsArr.table}


  Installation information: ${projectsArr.install}

  Usage information: ${projectsArr.usage}

  Tests: ${projectsArr.tests}

  Contributing: ${projectsArr.contribute}
  
  If you have any questions, please reach out!
        Email me at: ${projectsArr.email}
        or visit me on GitHub: "https://github.com/${projectsArr.name}"
  `;
};


module.exports = generateMarkdown;
