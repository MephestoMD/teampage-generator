const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
    {type: 'input', message: `What is the engineer's name?`, name: 'engName'},
    {type: 'input', message: `What is the engineer's ID?`, name: 'engID'},   
    {type: 'input', message: `What is the engineer's email address?`, name: 'engEmail'},
    {type: 'input', message: `What is the engineer's GitHub username?`, name: 'gitHub'},  
];

// Define questions for adding interns
const intQuestions = [
    {type: 'input', message: `What is the intern's name?`, name: 'intName'},
    {type: 'input', message: `What is the intern's ID?`, name: 'intID'},   
    {type: 'input', message: `What is the intern's email address?`, name: 'intEmail'},
    {type: 'input', message: `What is the intern's school?`, name: 'school'},     
];

// Define an array to handle each employee class object added
const empSet = [];

// Function definition for writing initial HTML
function headerHTML() {
    let headHTML =
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Webpage</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css"/>
    </head>
    <body>
        <h1><header>My Team</header></h1>
        <div id = "cardspace">`;
    
    fs.writeFile('./dist/TeamPage.html', headHTML, (err) => { if(err) console.log(err)});
} 

function cardHtml (employee) {
    let subInfo = '';
    switch (employee.getRole()){
        case 'Manager':
            subInfo = `Office number: ${employee.officeNumber}`;
            break;
        case 'Engineer':
            subInfo = `GitHub: <a href = "https://github.com/${employee.gitHub}">${employee.gitHub}</a>`;
            break;
        case 'Intern':
            subInfo = `School: ${employee.school}`;
            break;
    }
    let cardHTML =
    `
            <div class="card" style="width: 18rem;">
                <div class="card-body">
                    <h5 class="card-title">${employee.getIcon()}${employee.name}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
                    <p class="card-text">ID: ${employee.id}</p>
                    <p class="card-text">Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
                    <p class="card-text" id = "last">${subInfo}</p>
                </div>
            </div>
  `;

  fs.appendFile('./dist/TeamPage.html', cardHTML, (err) => { if(err) console.log(err)});

}

function endHtml (employee) {
    let lastHTML =
    `    
    </div>

    </body>
    </html>`;

  fs.appendFile('./dist/TeamPage.html', lastHTML, (err) => { if(err) console.log(err)});
}

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
                endHtml();
                break;
        }
        });
    }

// Function definition for engineer adding prompt
function engineer() { 
    inquirer.prompt(engQuestions)
    .then(data => {
        let newEngineer = new Engineer(data.engName, data.engID, data.engEmail, data.gitHub);
        empSet.push(newEngineer);
        cardHtml(newEngineer);
        menu();
    });
}

// Function definition for intern adding prompt
function intern() { 
    inquirer.prompt(intQuestions)
    .then(data => {
        let newIntern = new Intern(data.intName, data.intID, data.intEmail, data.school);
        empSet.push(newIntern);
        cardHtml(newIntern);
        menu();
    });
}


// Function call to write the beginning of the HTML file
headerHTML();

// Inquirer prompt to begin app
inquirer.prompt(manQuestions)
.then (data => {
    let newManager = new Manager(data.manName, data.manID, data.manEmail, data.manOffice);
    console.log(newManager.getRole());
    console.log(newManager);
    empSet.push(newManager);
    cardHtml(newManager);
    menu();
})

