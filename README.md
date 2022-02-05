# Professional-Readme

AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project

GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README



 return `
  ${projectsArr
    .map(({ title, description, table, install, usage, tests }) => {

        Tests: ${tests}
      `;
    })
    }
    `;
};

START HERE
//this is the name and email that will build to the Questions section of the readme
const questionsUser = () => {
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
        }
    ]);
};
//this is the details of the project itself for the main build of the readme
const questionsProject = readmeData => {
    console.log(`
==============================
Let's talk about your project!
==============================    
    `);

    //build the project data
    if (!readmeData.projects) {
        readmeData.projects = [];
    }
    return inquirer.prompt([
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
            choices: ['Apache', 'MIT', 'Boost', 'Creative Commons', 'BSD', 'GNU', 'Mozilla', 'Other']
        },
        {
            type: `input`,
            name: `tests`,
            message: `Please share any testing procedures, including libraries needed`,
        },
    ])
        .then(projectData => {
            readmeData.projects.push(projectData);
            return readmeData;
        })
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
    .then(questionsProject)
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

