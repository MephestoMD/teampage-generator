const Employee = require ("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, gitHub){
        super(name,id,email);
        this.gitHub = gitHub;
    }

    getRole() {
        return "Engineer";
    }

    getGit() {
        return this.gitHub;
    }

    getIcon() {
        return '<i class="bi bi-briefcase-fill"></i>'
        }
}

module.exports = Engineer;