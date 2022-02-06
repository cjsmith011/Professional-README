// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const generateReadme = require(`./utils/generateMarkdown`);
// TODO: Create an array of questions for user input

//this is the name and email that will build to the Questions section of the readme
const questionsUser = readmeData => {
    console.log(`
===================================
Let's gather information about you! 
===================================    
    `);
    return inquirer.prompt([
        {
            type: `input`,
            name: `name`,
            message: `What is your GitHub username?`,
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
            type: `input`,
            name: `title`,
            message: `What is the title of your project?`,
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
            choices: ['Apache', 'MIT', 'NPM', 'REUSE', 'Hex.pm', 'Eclipse', 'Other']
        },
        {
            type: `input`,
            name: `tests`,
            message: `Please share any testing procedures, including libraries needed`,
        },
        {
            type: `input`,
            name: `contribute`,
            message: `What are your standards for users who would like to contribute more to your project?`
        },
    ])
        // .then(projectData => {
        //     readmeData.push(projectData);
        //     return readmeData;
        // })
};

// TODO: Create a function to write README file
const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            //if there's an error, reject the promise and send the error to the promise's catch method
            if (err) {
                reject(err);
                //return out of the function to make sure the promise doesn't execute
                return;
            }
            //if it worked, resolve the promise and let the user know
            resolve({
                ok: true,
                message: 'Check out your spiffy ReadMe in the dist folder!'
            });
        });
    });
};

// TODO: Create a function to initialize app
module.exports = {writeFile: writeFile};

// Function call to initialize app
questionsUser()
    .then(readmeData => {
        return generateReadme(readmeData);
    })
    .then (pageHTML => {
        return writeFile(pageHTML);
    })
    .then (writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });

