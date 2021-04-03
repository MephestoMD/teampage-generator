const inquirer = require('inquirer');









function writeToFile(fileName, data) {
    // Generated team page goes here
    const teamPage = ''; 
    fs.writeFile(`MyTeam.html`, teamPage, (err) =>
    err ? console.error(err) : console.log('Success!'));
}