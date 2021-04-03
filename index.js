const inquirer = require('inquirer');
const fs = require('fs');
// const html = require('generateHTML');

// Define an array of questions to handle the initial manager questions
const manQuestions = [
    {type: 'input', message: `What is the manager's name?`, name: 'manName'},
    {type: 'input', message: `What is the manager's employee ID?`, name: 'manID'},
    {type: 'input', message: `What is the manager's email address?`, name: 'manEmail'},
    {type: 'input', message: `What is the manager's office number?`, name: 'manOffice'},
];

// Define question for the menu prompt
const menuQuestion = {type: 'checkbox', message: `Would you like to add an engineer, an intern, or finish building your team?`, name: 'menuChoice',
    choices: ['Engineer', 'Intern', 'Finish']};

// Define questions for adding engineers
const engQuestions = [
    {type: 'input', message: `What is the employee's name?`, name: 'engName'},  
    {type: 'input', message: `What is the employee's email address?`, name: 'engEmail'},
    {type: 'input', message: `What is the employee's GitHub username?`, name: 'gitHub'},  
];

// Define questions for adding interns
const intQuestions = [
    {type: 'input', message: `What is the employee's name?`, name: 'intName'},  
    {type: 'input', message: `What is the employee's email address?`, name: 'intEmail'},
    {type: 'input', message: `What is the employee's school?`, name: 'school'},     
];

// Define an array to handle each employee object added
const empSet = [];


// function writeToFile(data) {
//     // Generated team page goes here
//     const teamPage = ''; 
//     fs.writeFile(`MyTeam.html`, teamPage, (err) =>
//     err ? console.error(err) : console.log('Success!'));
// }

// Function definition for the menu prompt
function menu() {
    inquirer.prompt(menuQuestion)
    .then(data => {
        let userChoice = data.menuChoice.join();
        switch (userChoice) {
            case 'Engineer': 
                engineer();
                break;
            case 'Intern': 
                intern();
                break;
            case 'Finish': 
                console.log('finish');
                writeToFile();
                break;
        }
        });
    }

// Function definition for engineer adding prompt
function engineer() { 
    inquirer.prompt(engQuestions)
    .then(data => {
        empSet.push(data);
        console.log(empSet);
        menu();
    });
}

// Function definition for intern adding prompt
function intern() { 
    inquirer.prompt(intQuestions)
    .then(data => {
        empSet.push(data);
        console.log(empSet);
        menu();
    });
}
       
          
// Inquirer prompt to begin app
inquirer.prompt(manQuestions)
.then (data => {
    empSet.push(data);
    console.log(empSet);
    menu();
})

