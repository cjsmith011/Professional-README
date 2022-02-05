// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const generateReadme = require(`../utils/generateMarkdown`);
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: `name`,
            message: `Let's gather information about you! What is your GitHub username?`,
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please share your GitHub username, it's required!");
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `email`,
            message: `Please provide your email address so users can contact you for questions`,
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please share your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: `title`,
            message: `Now let's talk about your project!  What is the title of your project?`,
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('We definitely need a title!');
                    return false;
                }
            }
        },
        {
            type: `input`,
            name: `description`,
            message: `Share a brief description of your project.`
        },
        {
            type: `input`,
            name: `table`,
            message: `What would you like to list for the Table of Contents?`
        },
        {
            type: `input`,
            name: `install`,
            message: `What is required for installation to run your project?`
        },
        {
            type: `input`,
            name: `usage`,
            message: `What is some usage detail that you can share for users?`
        },
        {
            type: `checkbox`,
            name: `license`,
            message: `What license is available for your project?`,
            choices: ['Apache', 'MIT', 'Boost', 'Creative Commons', 'BSD', 'GNU', 'Mozilla', 'Other']
        },
        {
            type: `input`,
            name: `tests`,
            message: `Please share any testing procedures, including libraries needed`,
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init(generateReadme) {}

// Function call to initialize app
questions();
