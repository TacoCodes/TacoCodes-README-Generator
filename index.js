// import the generateMarkdown function from the utils/generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');
// import the inquirer module for prompting the user with questions
const inquirer = require('inquirer');
// import the fs module for working with the file system
const fs = require('fs');
// import the path module for working with file paths
const path = require('path')
// display a welcome message
console.log("WELCOME TO OUR README GENERATOR")
// remind the user to answer all the questions
console.log("Please answer all the Questions")
// Questions 
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description for your project:'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter installation instructions:'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'video',
    message: 'Enter the link or path of the video:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Enter contribution guidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  },

  {
    type: 'input',
    name: 'screenshot1',
    message: 'Enter the URL of the 1 screenshot:',
  },
  {
    type: 'input',
    name: 'screenshot2',
    message: 'Enter the URL of the 2 screenshot:',

  },
  {
    type: 'input',
    name: 'screenshot3',
    message: 'Enter the URL of the 3 screenshot:',

  },
  
  {
    type: 'input',
    name: 'profilePicture',
    message: 'Enter the URL of your profile picture:',
  },
];
// write the generated markdown file to the user's computer as README.md
inquirer.prompt(questions).then(answers => {
  const readme = generateMarkdown(answers);
  fs.writeFileSync('README.md', readme);
});