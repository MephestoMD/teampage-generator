const Employee = require ("./Employee");

class Intern extends Employee {
    constructor (name, id, email, school){
        super(name,id,email);
        this.gitHub = gitHub;
    }

    getRole() {
        return "Intern";
    }

    getSchooled() {
        return this.school;
    }
}

module.exports = Intern;